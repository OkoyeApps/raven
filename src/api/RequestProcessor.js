import { RunLoaderDipatch, runNetworkDispatch } from './ApiUtility';
import config from './Config';
const baseUrl = config.localBaseUrl;
const OpenLoader = 'OPEN_LOADER';
const CloseLoader = 'CLOSE_LOADER';
var currentStatus = null;
class processRequest {
    constructor(accessToken) {
        this.header = {
            "headers": {
                authorization: `Bearer ${accessToken}`,
                'x-access-token': `Bearer ${accessToken}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }
        this.dispatcher = null;
        this.dispatcherDetail = null;
    }
    sendGet(url) {
        try {
            RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, OpenLoader);
            this.header.headers["x-access-token"] = `Bearer ${this.header.headers["x-access-token"]}`
            var currentStatus = 200;
            console.log("Url to visit", `${baseUrl}${url}`);
            return new Promise((resolve, reject) => {
                fetch(`${baseUrl}${url}`, { headers: this.header.headers, method: 'GET' })
                    .then(result => {
                        currentStatus = result.status;
                        return result.json();
                    })
                    .then(result => {
                        this.formatErrorResponseMessage({ status: currentStatus, ...result }).then(formattedResult => {
                            resolve(formattedResult);
                        }).catch(error => reject(error))
                    }
                    ).catch(error => {
                        this.formatErrorResponseMessage(null, error).catch(error => reject(error));
                    }).finally(error => {
                    })
            })
        } catch (ex) {
        }
    }
    async sendPost(url, payload = {}) {
        return new Promise((resolve, reject) => {

            this.header.headers["x-access-token"] = `Bearer ${this.header.headers["x-access-token"]}`
            fetch(`${config.baseUrl}${url}`, { method: 'POST', headers: this.header.headers, body: JSON.stringify(payload) })
                .then(result => {
                    currentStatus = result.status;
                    return result.json().then(resolvedJson => Object.assign(resolvedJson, { status: currentStatus }))
                })
                .then(result => {
                    this.formatErrorResponseMessage(result).then(formattedResult => resolve(formattedResult))
                        .catch(error => reject(error))
                }).catch(error => {
                    this.formatErrorResponseMessage(null, error).catch(error => reject(error));
                }).finally(error => {
                })
        })
    }
    async sendPut(url, payload) {
        return new Promise((resolve, reject) => {
            this.header.headers["x-access-token"] = `Bearer ${this.header.headers["x-access-token"]}`
            fetch(`${baseUrl}${url}`, { method: 'PUT', headers: this.header.headers, body: JSON.stringify(payload) })
                .then(result => {
                    currentStatus = result.status;
                    return result.json().then(resolvedJson => Object.assign(resolvedJson, { status: currentStatus }))
                })
                .then(result => this.formatErrorResponseMessage(result).then(formattedResult => {
                    resolve(formattedResult);
                }).catch(error => reject(error)))
                .catch(error => {
                    this.formatErrorResponseMessage(null, error).then(resolve()).catch(reject())
                }).finally(error => {
                })
        })

    }
    async sendDelete(url) {
        return new Promise((resolve, reject) => {
            this.header.headers["x-access-token"] = `Bearer ${this.header.headers["x-access-token"]}`
            fetch(`${baseUrl}${url}`, { method: 'DELETE', headers: this.header.headers, body: JSON.stringify(payload) })
                .then(result => {
                    currentStatus = result.status;
                    return result.json().then(resolvedJson => Object.assign(resolvedJson, { status: currentStatus }))
                })
                .then(result => this.formatErrorResponseMessage(result).then(formattedResult => {
                    resolve(formattedResult);
                }).catch(error => reject(error)))
            this.formatErrorResponseMessage(result.data).then(resolve()).catch(reject());
        }).catch(error => {
            reject(this.formatErrorResponseMessage(null, error));
        })
    }
    formatErrorResponseMessage = (success, failure) => {
        return new Promise((resolve, reject) => {
            if (success && success.status === 200) {
                console.log("in here 1")
                RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, CloseLoader);
                runNetworkDispatch(this.dispatcher, false);
                resolve({ success: true, data: success });
            }
            else {
                if (failure && failure.message === 'Network request failed') {
                    // runNetworkDispatch(this.dispatcher, true);
                    reject({ sucess: false });
                } else if (failure && failure.status === 401) {
                    //Log the person out
                    //reset all auth state
                    runNetworkDispatch(this.dispatcher, false);
                    reject({ success: false, data: null })
                } else {
                    runNetworkDispatch(this.dispatcher, false);
                    reject({ success: false })
                }
                RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, CloseLoader);
            }

        })
    }

}




export default processRequest;