import facebookService from '../../utils/SocialSignUps/FacebookService';
import requestProcessor from '../../api/RequestProcessor';
import { Registration_Success } from '../Constants';

const LoginWithFacebook = () => {
    return facebookService.fbLogin().then(res => {
        return res;
    }).catch(error => {
        return error;
    })
}

const RegisterUser = (userData) => (dispatch, getState) => {
    var processor = new requestProcessor();
    return processor.sendPost(`/auth/register`, userData).then(res => {
        if (res.success) {
            //success
            dispatch({ type: Registration_Success, payload: res.data });
            return { success: true }
        } else {
            //failure
            return { success: false, message: "Registration failed" };
        }
    }).catch(error => { return { success: false, message: "Could not register user" } });
}
const OauthRegister = (provider) => (dispatch, getState) => {
    var processor = new requestProcessor();
    return LoginWithFacebook().then(result => {
        if (result.success) {
            var userDetails = {
                name: result.data.name,
                avatar: `https://graph.facebook.com/${result.data.id}/picture`,
                email: result.data.email,
                token: result.data.token
            }
            return processor.sendPost(`/auth/register?auth=${result.data.id}&oauth=${provider}`, userDetails).then(serverresult => {
                if (serverresult.success) {
                    dispatch({ type: Registration_Success, payload: serverresult.data })
                    return { success: true }
                } else {
                    return { success: false, message: serverresult.message };
                }
            }).catch(error => { return { success: false, message: 'Network connection error' } });

        } else {
            return Promise.reject({ success: false, message: "Could not authenticate user" });
        }
    }).catch(error => { return { success: false, message: "Network connection error" } });
}

const Authenticate = (userData) => (dispatch, getState) => {
    var processor = new requestProcessor();
    return processor.sendPost("/auth/authenticate", userData).then(res => {
        if (res.success) {
            dispatch({ type: Registration_Success, payload: res.data });
            return { success: true }
        } else {
            return { success: false, message: res.message }
        }
    }).catch(error => { return { success: false, message: error } });
}

const oauthLogin = (oauth) => (dispatch, getState) => {
    var processor = new requestProcessor();
    return LoginWithFacebook().then(result => {
        if (result.success) {
            var userDetails = {
                token: result.data.token,
                authid : result.data.id
            }
            return processor.sendPost(`/auth/authenticate?oauth=${oauth}`, userDetails).then(serverresult => {
                if (serverresult.success) {
                    dispatch({ type: Registration_Success, payload: serverresult.data })
                    return { success: true }
                } else {
                    return { success: false, message: serverresult.message };
                }
            }).catch(error => { return { success: false, message: 'Network connection error' } });

        } else {
            return Promise.reject({ success: false, message: "Could not authenticate user" });
        }
    }).catch(error => { return { success: false, message: "Network connection error" } });

}


export { LoginWithFacebook, RegisterUser, OauthRegister, Authenticate, oauthLogin }