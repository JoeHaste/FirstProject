//creating moviecards and presenting them
function moviescard(film){
    //creating an element that will store the website details
    let movies = document.createElement("li");
    //classname so that it easil customisable
    movies.className = "moviescss";
    //setting contents of html
    movies.innerHTML = `
    <div class = "cards" style ="background-image:url(${film.logo});">
        <h2 id="header1">${film.title}</h2>
        <p>${film.description}</p>
        <p>
        <a href =${film.link}>access it here</a>
        </p>
    </div>
    `
    document.getElementById("card-list").appendChild(movies);
}

function animecard(anime){
    //creating an element that will store the website details
    let ani = document.createElement("li");
    //classname so that it easil customisable
    ani.className = "moviescss";
    //setting contents of html
    ani.innerHTML = `
    <div class = "cards" style ="background-image:url(${anime.logo});">
        <h2 id="header1">${anime.title}</h2>
        <p>${anime.description}</p>
        <p>
        <a href =${anime.link}>access it here</a>
        </p>
    </div>
    `
    document.getElementById("card-list").appendChild(ani);
}


function gamecard(game){
    //creating an element that will store the website details
    let gaming = document.createElement("li");
    //classname so that it easil customisable
    gaming.className = "moviescss";
    //setting contents of html
    gaming.innerHTML = `
    <div class = "cards" style ="background-image:url(${game.logo});">
        <h2 id="header1">${game.title}</h2>
        <p>${game.description}</p>
        <p>
        <a href =${game.link}>access it here</a>
        </p>
    </div>
    `
    document.getElementById("card-list").appendChild(gaming);
}

var coll = document.getElementsByClassName("buttons");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//fetch request to get movie websites
function getmovie(){
    fetch("http://localhost:3000/m-website")
    .then(res => res.json())
    .then(films => films.forEach(film => moviescard(film)));
}

function getanime(){
    fetch("http://localhost:3000/a-website")
    .then(res => res.json())
    .then(animes => animes.forEach(anime => animecard(anime)))
}

function getgame(){
    fetch("http://localhost:3000/g-website")
    .then(res => res.json())
    .then(games => games.forEach(game => gamecard(game)))
}


