$.get('index.html', null, function(text){
    ($(text).find('#name'));
});


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)



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
    //window.open("movie.html")
    if(res != undefined || null){
      console.log("if call");
    }
    else {
        console.log("Message")
        let refreshMessage = document.querySelector('.moviecards');
        let Newp = document.createElement("p");
        Newp.setAttribute("id","msgToRef");
        refreshMessage.append(Newp);
        document.getElementById('msgToRef').innerHTML = "Refresh To Load Content";
    }
}
let access = window.localStorage.getItem("token");
movies(access);
