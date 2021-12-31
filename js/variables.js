var exports = {};
const configData = {
    env: 'https://nansuri.tunnelto.dev/',
    loginApi: 'apis/user/login',
    getDataApi: 'apis/invitation/attendee/query?invitationid=',
    invitationId: 'GREATESTGIFT01',
    customHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
    },
}

exports.default = configData;