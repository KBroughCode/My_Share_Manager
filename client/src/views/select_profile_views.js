const PubSub = require ('../helpers/pub_sub');

class SelectProfileView{

  constructor(){
    this.container = document.querySelector('#profile-container')
  }

  bindEvents(){
    PubSub.subscribe('Shares:users-name-list', (event)=>{
      const users = event.detail;
      console.log(users);
      this.render(users);
    })
  }

  render(users){
    this.clearUsers();

    users.forEach((user)=>{
      const card = this.createIdCard(user)
      this.container.appendChild(card)
    });
  }
  clearUsers(){
    this.container.innerHTML = '';
  }
    createIdCard(user){
      const meta = document.createElement('div')
      meta.classList.add('meta')
      meta.innerHTML = `User: ${user.user_id}`

      const header = document.createElement('div')
      header.classList.add('header')
      header.innerHTML = user.name

      const content = document.createElement('div')
      content.classList.add('content')

      const card = document.createElement('div')
      card.classList.add('ui')
      card.classList.add('card')
      card.style.background = '#3CB371';

      content.appendChild(meta)
      content.appendChild(header)
      card.appendChild(content)

      return card;
    }
}

module.exports = SelectProfileView;
