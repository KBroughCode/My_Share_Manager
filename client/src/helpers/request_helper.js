class RequestHelper{

  constructor(url) {
    this.url = url;
  }

  get() {
    return fetch(this.url)
      .then((res) => {
        return res.json()
      });
  }

  post(payload) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }

  delete(){
  return fetch(this.url, {
    method: 'DELETE',
  })
    .then((response) => response.json());
  }
}

module.exports = RequestHelper;