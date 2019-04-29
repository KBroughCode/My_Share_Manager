const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class Companies {

  constructor(){
  this.data = [];
  }

  bindEvents(){
    PubSub.subscribe('Shares:change',(event)=>{
      const selectedIndex = event.detail;
      console.log(selectedIndex);
      const selectedShare = this.data[selectedIndex]
      console.log(selectedShare);
      PubSub.publish('Shares:Selected-share-ready', selectedShare)

    })
  }

  getCompNameData(){
    const url = 'http://localhost:3000/shares'
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      console.log(data);
      PubSub.publish('Shares:companies-name-list', this.data);
    })
    .catch((message)=>{
      console.error(message);
    })
  }

}

module.exports = Companies;
