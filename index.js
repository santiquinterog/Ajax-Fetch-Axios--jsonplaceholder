

const API_URL = 'https://jsonplaceholder.typicode.com';

/* Ajax */

const responseAjax = document.querySelector("#ajax");

// Instanciar objeto
const api = new XMLHttpRequest();

// Realiza una petición de apertura de comunicación con un método, true es si la petición es asíncrona
api.open("GET", `${API_URL}/users`, true);

// Envía la petición al servidor
api.send();

api.onreadystatechange = function() {
  if(this.status === 200 && this.readyState === 4){
    const users = JSON.parse(this.response);
    const template = users.map((user) => `<li>${user.name} - ${user.email}</li>`)
    responseAjax.innerHTML = `<ul>${template}</ul>`
  }
}

/* Fetch */

const responseFetch = document.querySelector("#fetch");

fetch(`${API_URL}/users`).then((responseFetch) => responseFetch.json()).then ((users) => {
  const template = users.map((user) => `<li>${user.name} - ${user.email}</li>`)
  responseFetch.innerHTML = `<ul>${template}</ul>`
})


/* Axios */

const responseAxios = document.querySelector("#axios");

  axios.get(`${API_URL}/users`).then((response) => {
    const template = response.data.map((user) => `<li>${user.name} - ${user.email}</li>`)
    console.log(response.data);
    responseAxios.innerHTML = `<ul>${template}</ul>`
  })