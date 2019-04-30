const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');


class CurrentPortfolioView {

  constructor(){
    this.container = document.querySelector('#portfolio-container')
  }

  bindEvents(){
    PubSub.subscribe('Shares:users-portfolio-list',(event) =>{
      const shares = event.detail;
      console.log(shares);
      this.render(shares)
    })
  }

  render(shares){
    this.clearShares();

    shares.forEach((share)=>{
      this.createCard(share)
    });
  }
  clearShares(){
    this.container.innerHTML = '';
  }

  createCard(share){

    const meta = document.createElement('div')
      meta.classList.add('meta')
      meta.innerHTML = `You hold ${share.quantity} shares`

    const header = document.createElement('div')
      header.classList.add('header')
      header.innerHTML = share.name

    const livePrice = `https://www.alphavantage.co/   query?function=GLOBAL_QUOTE&symbol=${share.symbol}&interval=1min&outputsize=full&apikey=6GR3MV93NBI8PBGT`
    const request = new RequestHelper(livePrice);
    request.get()
    .then((livePrice) =>{
      this.data = livePrice;
      const price = livePrice['Global Quote']['05. price'];

    const currentPrice = document.createElement('div')
      currentPrice.classList.add('meta')
      currentPrice.innerHTML = `Price Per Share: ${price}`;

    const holdingsValue = document.createElement('div')
      currentPrice.classList.add('meta')
      currentPrice.innerHTML = `Total Holdings Value: ${price * share.quantity}`;

    const content = document.createElement('div')
      content.classList.add('content')


    const card = document.createElement('div')
      card.classList.add('ui')
      card.classList.add('card')

    content.appendChild(header)
    content.appendChild(meta)
    content.appendChild(currentPrice)
    content.appendChild(holdingsValue)
    card.appendChild(content)

    this.container.appendChild(card)

    })

  }

}

module.exports = CurrentPortfolioView;
