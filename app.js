const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

var token =""
var res;
 async function a(data,token){  
    var config = {
      method: 'post',
      url: 'https://demo.credy.in/api/v1/usermodule/login/',
      headers: { 
        "Content-Type": "application/json",
      },
      data : data
    };
    token =  await axios(config)
    .then( (response)=> {
        return JSON.stringify(response.data.data.token)})
    .catch(function (error) {
    console.log(error);
    });
    window.localStorage.setItem("token", token);
    if(window.localStorage.getItem("token") == token ){
      movies(token);
    }
    else {
      document.getElementById('signInMsg').innerHTML = "Bad Credentials"
    }
}

const button = document.querySelector('.btn-primary');
button.addEventListener('click',()=>{
    let userId = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    var data = JSON.stringify({
        "username": userId,
        "password": password
      });
   console.log(data);    
    a(data)
   

});

async function movies(token){
  console.log(token)
  let options = {
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Authorization': `Token ${token}`
    }
  }
  res = await fetch("https://demo.credy.in/api/v1/maya/movies/",options)
        .then(data => {return data.json()})
        .then(d => console.log("successcall"))
        .catch(err => console.log(err));
  console.log(res)
  window.location = 'movie.html';
  if(res != undefined || null){
    console.log("if call")
    Displaycards();
  }
  else{
    console.log("Message")
    let refreshMessage = document.querySelector('.moviecards').innerHTML = "refresh page to load contents";
  }
}



let changeTheme = document.querySelector('.btn-theme');
let flag = true;
changeTheme.addEventListener('click',()=>{
  const bodyElement = document.getElementById("BODY");
  console.log(bodyElement)
  if(flag){bodyElement.classList.add("body-color-dark");
  flag = false;
  }
  else{
    bodyElement.classList.remove("body-color-dark")
    flag = true;
  }
})