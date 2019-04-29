const PubSub = require ('../helpers/pub_sub');


class SelectMarketView{

  constructor(){
    this.element = document.querySelector('#company-list')
  }

  bindEvents(){
    PubSub.subscribe('Shares:companies-name-list', (event) =>{
      const companyData = event.detail;
      console.log(companyData);
      this.selectCompany(companyData);
    })

    this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value
      PubSub.publish('Shares:change', selectIndex);
    })
  }


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
