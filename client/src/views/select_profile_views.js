const PubSub = require ('../helpers/pub_sub');

class SelectProfileView{

  constructor(){
    this.container = document.querySelector('#profile-container')
  }

  bindEvents(){
    //gets users info from user portfolio models getdata call
    PubSub.subscribe('Shares:users-name-list', (event)=>{
      const users = event.detail;
      this.render(users);
    })
  }

  render(users){
    this.clearUsers();
    //for each user we will create a user card using the createIdCard function
    users.forEach((user)=>{
      const card = this.createIdCard(user)
      this.container.appendChild(card)
    });
  }

  clearUsers(){
    this.container.innerHTML = '';
  }

  //creates user card
  createIdCard(user){
    const meta = document.createElement('div')
    meta.classList.add('meta')
    meta.innerHTML = `User: ${user.user_id}`

    const header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = `Name: ${user.name}`


    const image = document.createElement('img')
    image.classList.add('right','floated','massive','ui', 'avatar','image')
    image.src = `Images/${user.img_url}`

    const content = document.createElement('div')
    content.classList.add('content')

    const removeButton = document.createElement('div')
    removeButton.classList.add('ui', 'basic', 'red', 'button')
    removeButton.textContent = 'Remove User'
    removeButton.value = user.id
    //event listener for click on remove button to call remove user function
    removeButton.addEventListener('click',(event)=>{
    const userID = event.target.value
    PubSub.publish('Users: user-removed', userID)
    })


    const viewButton = document.createElement('div')
    viewButton.classList.add('ui', 'basic', 'black', 'button')
    viewButton.textContent = 'View'
    viewButton.value = user.id
    // event listener for click on view button. when click occurs
    // user ID is passed to user portfolio model
    viewButton.addEventListener('click', (event) => {
    const singleUserID = event.target.value;
      PubSub.publish('Users:single-user-id-ready', singleUserID)
    })

    const orButton = document.createElement('div')
    orButton.classList.add('or')

    const card = document.createElement('div')
    card.classList.add('ui')
    card.classList.add('card')
    card.style.borderColor = '#453F30'
    card.style.borderStyle = 'solid'
    card.style.background = '#97AA92';

    const buttons = document.createElement('div')
    buttons.classList.add('ui','buttons')
    buttons.appendChild(viewButton)
    buttons.appendChild(orButton)
    buttons.appendChild(removeButton)

    content.appendChild(image)
    content.appendChild(meta)
    content.appendChild(header)
    card.appendChild(content)
    card.appendChild(buttons)

    return card;
  }
}

module.exports = SelectProfileView;
