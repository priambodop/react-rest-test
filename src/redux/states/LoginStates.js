import {fromJS} from 'immutable';

const loginState = {
    loginStatus: false,
    username: null,
    password: null,
    sessionData: {},
};

export default fromJS(loginState);