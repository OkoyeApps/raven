import { LoginManager, AccessToken } from 'react-native-fbsdk';


function facebookservice() {
    this.initUser = (token) => {
        return fetch('https://graph.facebook.com/v2.10/me?fields=id,name,first_name,last_name,email,gender,link,locale,timezone,updated_time,verified&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
                return {success : true, data : {token : token, ...json}};
            })
            .catch(() => {
                return 'Error authenticating with facebook';
            })
    }



    this.fbLogin = () => {
        return LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends', "user_photos"]).then(
            (result) => {
                if (result.isCancelled) {
                    // console.log('Login cancelled')
                    alert("could not authenticate user")
                } else {
                    return AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            return this.initUser(data.accessToken.toString())
                        }
                    )
                }
            },
            (error) => {
                console.log('Login fail with error: ' + error)
            }
        )
    }

}

export default facebookservice = new facebookservice();