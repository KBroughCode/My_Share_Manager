const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class UsersPortfolio{

  constructor(){
  this.data = []
  }

  bindEvents(){

  }

  getUserPortData(){
    const url = 'http://localhost:3000/shares/users_shares'
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
