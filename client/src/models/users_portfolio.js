const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class UsersPortfolio{

  constructor(){
  this.data = []
  }

  bindEvents(){
    PubSub.subscribe('Users:single-user-id-ready', (event) =>{
      const userID = event.detail
      console.log(userID);
      this.getUserPortData(userID)
    })

  }

  getUserPortData(userID){
    const url = `http://localhost:3000/shares/users_shares/${userID}`
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      PubSub.publish('Shares:users-portfolio-list', this.data);
      console.log(this.data);
    })
    .catch((message)=>{
      console.error(message);
    })
  }

}

module.exports = UsersPortfolio;
