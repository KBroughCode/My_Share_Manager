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
        header.innerHTML = `Name: ${user.name}`

      const portValue = document. createElement('div')
        portValue.classList.add('header')
        portValue.innerHTML = `Portfolio Value: `

      const image = document.createElement('img')
        image.classList.add('right','floated','massive','ui', 'avatar','image')
        image.src = `Images/${user.img_url}`

      const content = document.createElement('div')
        content.classList.add('content')

      const removeButton = document.createElement('div')
        removeButton.classList.add('ui', 'basic', 'red', 'button')
        removeButton.textContent = 'Remove'
        removeButton.value = user.id
      // eventlistener to be added

      const viewButton = document.createElement('div')
        viewButton.classList.add('ui', 'basic', 'black', 'button')
        viewButton.textContent = 'View'
        viewButton.value = user.id
        viewButton.addEventListener('click', (event) => {
        const singleUserID = event.target.value;
          PubSub.publish('Users:single-user-id-ready', singleUserID)
        })

      const orButton = document.createElement('div')
        orButton.classList.add('or')

      const card = document.createElement('div')
        card.classList.add('ui')
        card.classList.add('card')
        card.style.background = '#3CB371';

      const buttons = document.createElement('div')
        buttons.classList.add('ui','buttons')
        buttons.appendChild(viewButton)
        buttons.appendChild(orButton)
        buttons.appendChild(removeButton)

      content.appendChild(image)
      content.appendChild(meta)
      content.appendChild(header)
      content.appendChild(portValue)
      card.appendChild(content)
      card.appendChild(buttons)

      return card;
    }
}

module.exports = SelectProfileView;
