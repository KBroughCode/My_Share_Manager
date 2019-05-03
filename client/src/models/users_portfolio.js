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
      return data;
    })
    // data from get getUserPortData function is collected and then passed in as shares below

    .then((shares)=>{
      // promises array created so we can store each promise request
      const promises = [];
      //for each instance of share we create a new request and push this in thr promises array

      shares.forEach((share)=>{
        const livePrice = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${share.symbol}&interval=1min&outputsize=full&apikey=6GR3MV93NBI8PBGT`
        const request = new RequestHelper(livePrice);
        const promise = request.get()
        promises.push(promise)
      })

      Promise.all(promises).then((results)=>{

      const concatResults = [];

        results.forEach((result, index)=>{

          const price = result['Global Quote']['05. price']
          const changePercent = result['Global Quote']['10. change percent']
          const openPrice = result['Global Quote']['02. open']
          shares[index].price = price
          shares[index].changePercent = changePercent
          shares[index].openPrice = openPrice

          concatResults.push(shares[index]);
      })
        PubSub.publish('Shares:users-portfolio-list', concatResults)
      })
    })
  }

}

module.exports = UsersPortfolio;
