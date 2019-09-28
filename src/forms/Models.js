import {INPUT, CHECKBOX} from './Constants';
 var authSchema =  {
        firstname: {required : true, isvalid : false, type : INPUT, value : "", post : true},
        lastname: {required : true, isvalid : false, type : INPUT, value : "", post : true},
        phonenumber: {required : true, isvalid : false, type : INPUT, value : "", post : true},
        emailaddress: {required : true, isvalid : false, type : INPUT, value : "", post : true},
        password: {required : true, isvalid : false, type : INPUT, value : "", post : true},
        usertype: {required : true, isvalid : true, type : CHECKBOX, value : "client", post : true},
        // accept : {required : true, isvalid : false, type : INPUT, value : false, post : false},
        confirmpassword : {required : true, isvalid : false, type : INPUT, value : "", post : false}
    }

    var LoginSchema = {
        username : {required : true, isvalid : false, type : INPUT, value : "", post : true},
        password : {required : true, isvalid : false, type : INPUT, value : "",  post : true}
    }

    var GetLawyerSchema = {
        clientname : {required : true, isvalid : false, type : INPUT, value : "", post : true},
        casetitle : {required : true, isvalid : false, type : INPUT, value : "", post : true},
        instruction : {required : true, isvalid : false, type : INPUT, value : "", post : true},
        reportdate : {required : true, isvalid : false, type : INPUT, value : new Date(), post : true},
        location : {required : true, isvalid : false, type : INPUT, value : "", post : true},
        // practicearea : {required : true, isvalid : false, type : INPUT, value : "", post : true},
    }
export {
    authSchema, LoginSchema,GetLawyerSchema
}