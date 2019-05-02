const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');


class Shares{

  constructor(){
    this.data = []
  }

  bindEvents(){
    // selected share info passed from companies.js so we can use
    // string interpolation to insert the symbol of the selected
    // share into the getShareData function
    PubSub.subscribe('Shares:Selected-share-ready', (event)=>{
      const selectedSymbol = event.detail.symbol;
      this.getShareData(selectedSymbol);
      console.log(selectedSymbol);

    })
  }
  //call to API using symbol passed in through PubSub in bindEvents.
  getShareData(selectCompany){
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectCompany}&interval=1min&outputsize=full&apikey=6GR3MV93NBI8PBGT`
    const request = new RequestHelper(url);
    request.get()
    .then((data) =>{
      this.data = data;
      console.log(data);
      PubSub.publish('Shares:all-data-loaded', this.data)
    })
    .catch((message)=>{
      console.error(message);
    })
  }
}

module.exports = Shares;
