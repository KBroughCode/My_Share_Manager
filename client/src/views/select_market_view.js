const PubSub = require ('../helpers/pub_sub');


class SelectMarketView{

  constructor(){
    this.element = document.querySelector('#company-list')
  }

  bindEvents(){
    //subscribes to list of companies from companies.js model
    PubSub.subscribe('Shares:companies-name-list', (event) =>{
      const companyData = event.detail;
      this.selectCompany(companyData);
    })
    //event listener for when the new share is selected from dropdown
    // this is then subscribed back to companies.js
    this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value
      PubSub.publish('Shares:change', selectIndex);
    })
  }

  // loops through array of company informaiton creating
  // a dropdown list

  selectCompany(companyData){
    companyData.forEach((share, index)=>{
      const option = document.createElement('option')
      option.textContent = share.name;
      option.value = index;
      this.element.appendChild(option);
    })
  }
}

module.exports = SelectMarketView;
