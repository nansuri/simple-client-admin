var exports = {};
const configData = {
    env: 'https://api.sedang.live/wam/',
    loginApi: 'auth/login',
    getDataApi: 'invitation/attendees?invitationId=',
    invitationId: localStorage.getItem('invitation_id') ,
    customHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
    },
}

exports.default = configData;