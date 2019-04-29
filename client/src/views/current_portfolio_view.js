const PubSub = require ('../helpers/pub_sub');


class CurrentPortfolioView {

  constructor(){
    this.container = document.querySelector('#portfolio-container')
  }

  bindEvents(){
    PubSub.subscribe('Shares:users-portfolio-list',(event) =>{
      const shares = event.detail;
      this.render(shares)

    })
  }

  render(shares){
    this.clearShares();

    shares.forEach((share)=>{
      const card = this.createCard(share)
      this.container.appendChild(card)
    });
  }
  clearShares(){
    this.container.innerHTML = '';
  }

  createCard(share){

    const meta = document.createElement('div')
    meta.classList.add('meta')
    meta.innerHTML = share.quantity

    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = share.share_id

    const content = document.createElement('div')
    content.classList.add('content')

    const card = document.createElement('div')
    card.classList.add('ui')
    card.classList.add('card')

    content.appendChild(meta)
    content.appendChild(header)
    card.appendChild(content)

    return card;
  }

}

module.exports = CurrentPortfolioView;
