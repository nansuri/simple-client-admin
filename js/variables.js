var exports = {};
const configData = {
    env: 'https://nansuri.tunnelto.dev/',
    loginApi: 'apis/user/login',
    getDataApi: 'apis/invitation/attendee/query?invitationid=',
    invitationId: localStorage.getItem('invitation_id') ,
    customHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
    },
}

exports.default = configData;