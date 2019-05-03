const PubSub = require ('../helpers/pub_sub');

class MarketCatalogue {

  constructor(){
    this.container = document.querySelector('#market-container')
  }



bindEvents(){
  //gets users info from user portfolio models getdata call
  PubSub.subscribe('Shares:all-data-loaded', (event)=>{
    const shares = event.detail;
    this.render(shares);
  })
}

render(shares){
  this.clearUsers();
  //for each user we will create a user card using the createIdCard function
  shares.forEach((share)=>{
    const card = this.createMarketCard(share)
    this.container.appendChild(card)
  });
}

clearUsers(){
  this.container.innerHTML = '';
}

//creates user card
createMarketCard(shares){
  const meta = document.createElement('div')
  meta.classList.add('meta')
  meta.innerHTML = `User: ${user.user_id}`

  const header = document.createElement('div')
  header.classList.add('header')
  header.innerHTML = `Name: ${shares['Global Quote']['01. symbol']}`

  const image = document.createElement('img')
  image.classList.add('ui','right','floated','mini','image')
    // will display up arrow if current price of share is greater than the open price
      if (shares['Global Quote']['05. price'] > shares['Global Quote']['02. open']){
    image.src = `Images/upArrow.png`
    //otherwise will show down arrow if shares are lower than open price
  }else if(shares['Global Quote']['05. price'] < shares['Global Quote']['02. open']){
    image.src = `Images/downArrow.png`
      }else{
    image.src = `Images/Bill_Decker.png`
  };

  const content = document.createElement('div')
  content.classList.add('content')

  const marketCard = document.createElement('div')
  marketCard.classList.add('ui')
  marketCard.classList.add('card')
  marketCard.style.borderColor = 'black'
  marketCard.style.borderStyle = 'solid'
  marketCard.style.background = '#FAF0E6';
  marketCard.style.opacity = '0.7';


  container.appendChild(image)
  container.appendChild(priceDifference)
  content.appendChild(container)
  content.appendChild(header)
  content.appendChild(meta)
  content.appendChild(currentPrice)
  marketCard.appendChild(content)

  this.container.appendChild(marketCard)

  }
}

module.exports = MarketCatalogue;
