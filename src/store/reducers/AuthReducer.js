import { Registration_Success } from '../Constants';

const initialState = {
    email: "",
    imageUrl: "",
    name: "",
    publicId: "",
    refreshToken: "",
    token: "",
    verified: ""
};


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Registration_Success:
            return { ...action.payload }
        default:
            return state;
    }
}

export default AuthReducer;