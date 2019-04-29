const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class Users{

  constructor(){
  this.data = []
  }

  bindEvents(){

  }

  getUserData(){
    const url = 'http://localhost:3000/shares/users'
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      PubSub.publish('Shares:users-name-list', this.data);
      console.log(this.data);
    })
    .catch((message)=>{
      console.error(message);
    })
  }

}

module.exports = Users;
