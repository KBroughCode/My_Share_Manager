const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class Users{

  constructor(){
  this.data = []
  }

  bindEvents(){
    PubSub.subscribe('Users: user-removed', (event)=>{
      const userID = event.detail;
      this.removeUser(userID)
    })
  }

  getUserData(){
    const url = 'http://localhost:3000/shares/users'
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      console.log(data);
      PubSub.publish('Shares:users-name-list', this.data);
    })
    .catch((message)=>{
      console.error(message);
    })
  }

  removeUser(userID){
    const url = `http://localhost:3000/shares/users/${userID}`
    const request = new RequestHelper(url);
    request.delete(userID)
    .then((users)=>{
      PubSub.publish('Shares:users-name-list', users);
    })
    .catch(console.error)
    }

}

module.exports = Users;
