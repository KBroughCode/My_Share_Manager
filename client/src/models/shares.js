const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');


class Shares{


  constructor(){
    this.data = []
  }

  bindEvents(){
    PubSub.subscribe('Shares:Selected-share-ready', (event)=>{
      const selectedSymbol = event.detail.symbol;
      this.getShareData(selectedSymbol);
      console.log(selectedSymbol);

    })
  }

  getShareData(selectCompany){
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectCompany}&interval=1min&apikey=6GR3MV93NBI8PBGT`
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
