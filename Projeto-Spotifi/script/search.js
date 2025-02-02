const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

// solução para uma nova consulta, mas não esta dando certo.

/*
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlist");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm));
}

 
function displayResults(result, searchTerm) {
  resultPlayList.classList.add("hidden");
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = ''; //limpa os resultados anteriores

  const filteredArtists = result.fiter(artist=> artist.name.toLowerCase().includes(searchTerm));

  filteredArtists.forEach(artist => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML =` 
      <div class="card-img">
          <img class="artist-img" src="${artist.urlImg}" />
            <div class="play">
                <span class="fa fa-solid fa-play"></span>
            </div>
      </div>
    <div class="card-text">
          <span class="artist-name">${artist.name}</span>
          <span class="artist-categorie">Artista</span>
        </div>
    `;
     gridContainer.appendChild(artistCard);
  });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm === '') {
    resultPlayList.classList.remove('hidden');
    resultArtist.classList.add('hidden');
    return;
  }
  requestApi(searchTerm);
});
*/
