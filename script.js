function moviescard(film){
    let movies = document.createElement("p")

    movies.className = "moviescss";

    movies.innerHTML = `
    <div class = "cards" style ="background-image:url(${film.logo});">
        <h2 id="header1">${film.title}</h2>
        <p>${film.description}</p>
        <button class="special">
        <a class="hyperlink" href =${film.link}>access it here</a>
        </button>
    </div>
    `
    document.getElementById("card-list").appendChild(movies);
}

function animecard(anime){
    let ani = document.createElement("p");

    ani.className = "moviescss";

    ani.innerHTML = `
    <div class = "cards" style ="background-image:url(${anime.logo});">
        <h2 id="header1">${anime.title}</h2>
        <p>${anime.description}</p>
        <button class="special">
        <a class="hyperlink" href =${anime.link}>access it here</a>
        </button>
    </div>
    `
    document.getElementById("card-list1").appendChild(ani);
}


function gamecard(game){
    let gaming = document.createElement("li");

    gaming.className = "moviescss";

    gaming.innerHTML = `
    <div class = "cards" style ="background-image:url(${game.logo});">
        <h2 id="header1">${game.title}</h2>
        <p>${game.description}</p>
        <button class="special">
        <a class="hyperlink" href =${game.link}>access it here</a>
        </p>
    </div>
    `
    document.getElementById("card-list2").appendChild(gaming);
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

function changedata(parameter){
    if(parameter==0){
        document.getElementById("card-list").classList.toggle("active")
        getmovie()
    }
    else if(parameter==1){
        document.getElementById("card-list2").classList.toggle("active")
        getgame()
    }
    else if(parameter==2){
        document.getElementById("card-list1").classList.toggle("active")
        getanime()
        }
}

