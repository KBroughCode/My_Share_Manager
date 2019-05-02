const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');

class Companies {

  constructor(){
  this.data = [];
  }

  bindEvents(){
    // subscribes to select market view to get users selection of
    // company from drop down
    PubSub.subscribe('Shares:change',(event)=>{
      const selectedIndex = event.detail;
      console.log(selectedIndex);
      const selectedShare = this.data[selectedIndex]
      console.log(selectedShare);
      // publishes selected share info so share.js model can use data
      // to extract share symbol for interpolation in API call
      PubSub.publish('Shares:Selected-share-ready', selectedShare)

    })
  }
  // gets data from database table shares
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
