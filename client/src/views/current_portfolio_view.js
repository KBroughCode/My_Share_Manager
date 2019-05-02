const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');
const {calculateData} = require ('../helpers/data_helper');

class CurrentPortfolioView {

  constructor(){
    this.container = document.querySelector('#portfolio-container')
    this.totalPortVal = null;
  }

  bindEvents(){
    PubSub.subscribe('Shares:users-portfolio-list',(event) =>{
      const shares = event.detail;
      this.calculatePortTotal(shares);
      this.render(shares);
  });
}
//function that creates a total Portfolio Value by taking
// the total value of each holding a user has in their Portfolio
// and adding them together in an array via reduce

calculatePortTotal(shares){
  const portTotal = []
  shares.forEach((share)=>{
    const sharePrice = share.price * 100
    const shareQuantity = share.quantity
    const totalHoldings = sharePrice * shareQuantity
    portTotal.push(totalHoldings)
    this.totalPortVal = calculateData(portTotal)
  })
}
  render(shares){
    this.clearShares();
    this.createTotalsCard()

    shares.forEach((share)=>{
      this.createCard(share)
    });
  }

  clearShares(){
    this.container.innerHTML = '';
  }
  // creates card for each holding a user has
  createCard(share){
    const meta = document.createElement('div')
    meta.classList.add('meta')
    meta.innerHTML = `You hold ${share.quantity} shares`

    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = share.name

    const currentPrice = document.createElement('div')
    const sharePrice = share.price / 10.0
    currentPrice.classList.add('meta')
    currentPrice.innerHTML = 'Price Per Share:' + sharePrice

    const holdingsValue = document.createElement('div')
    const indivHolding = sharePrice * share.quantity / 10
    const totalIndivHolding = indivHolding.toFixed(1)
    holdingsValue.classList.add('meta')
    holdingsValue.innerHTML = 'Total Holdings Value: £'+ totalIndivHolding

    const container = document.createElement('div');
    container.id = 'arrow-container'
    container.classList.add('right','floated')

    const priceDifference = document.createElement('div')
    priceDifference.classList.add('meta')
    priceDifference.innerHTML = share.changePercent;

    const image = document.createElement('img')
    image.classList.add('ui','right','floated','mini','image')
      // will display up arrow if current price of share is greater than the open price
        if (share.price > share.openPrice ){
      image.src = `Images/upArrow.png`
      //otherwise will show down arrow if shares are lower than open price
        }else if(share.price < share.openPrice ){
      image.src = `Images/downArrow.png`
        }else{
      image.src = `Images/Bill_Decker.png`
    };

    const content = document.createElement('div')
    content.classList.add('content')

    const card = document.createElement('div')
    card.classList.add('ui')
    card.classList.add('card')
    card.style.borderColor = 'black'
    card.style.borderStyle = 'solid'
    card.style.background = '#FAF0E6';
    card.style.opacity = '0.7';


    container.appendChild(image)
    container.appendChild(priceDifference)
    content.appendChild(container)
    content.appendChild(header)
    content.appendChild(meta)
    content.appendChild(currentPrice)
    content.appendChild(holdingsValue)
    card.appendChild(content)

    this.container.appendChild(card)

    }
//creates total portfolio amount tile for each user
  createTotalsCard(shares){
    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = 'Total Portfolio Amount:' + this.totalPortVal / 10000

    const content = document.createElement('div')
    content.classList.add('content')

    const totalCard = document.createElement('div')
    totalCard.classList.add('ui')
    totalCard.classList.add('card')
    totalCard.style.borderColor = 'black'
    totalCard.style.borderStyle = 'solid'
    totalCard.style.background = '#FAF0E6';


    content.appendChild(header)
    totalCard.appendChild(content)

    this.container.appendChild(totalCard)
  }
}

module.exports = CurrentPortfolioView;
