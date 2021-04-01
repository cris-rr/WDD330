import ApiCall from './apicall.js';

const ApiMdb = new ApiCall();

// Initial Values
const INITIAL_SEARCH_VALUE = 'spiderman';
const log = console.log;

// Selecting elements from the DOM
const searchButton = document.querySelector('#search');;
const searchInput = document.querySelector('#inputSearch');
const moviesContainer = document.querySelector('#moviesContainer');
const providersContainer = document.querySelector('#providersContainer')
// const moviesSearchable = document.querySelector('#movies-searchable');

function createImageContainer(imageUrl, id) {
  const tempDiv = document.createElement('div');
  tempDiv.setAttribute('class', 'imageContainer');
  tempDiv.setAttribute('data-id', id);

  const movieElement = `
        <img src="${imageUrl}" alt="" data-movie-id="${id}">
    `;
  tempDiv.innerHTML = movieElement;

  return tempDiv;
}

function resetInput() {
  searchInput.value = '';
}

export function handleGeneralError(error) {
  log('Error: ', error.message);
  alert(error.message || 'Internal Server');
}

function createIframe(video) {
  const videoKey = (video && video.key) || 'No key found!!!';
  const iframe = document.createElement('iframe');
  iframe.src = `http://www.youtube.com/embed/${videoKey}`;
  iframe.width = 360;
  iframe.height = 315;
  iframe.allowFullscreen = true;
  return iframe;
}

function insertIframeIntoContent(video, content) {
  const videoContent = document.createElement('div');
  const iframe = createIframe(video);

  videoContent.appendChild(iframe);
  content.appendChild(videoContent);
}


export function createVideoTemplate(data) {
  const content = this.content;
  // content.innerHTML = '<p id="content-close">X</p>';
  content.innerHTML = '';
  const videos = data.results || [];

  if (videos.length === 0) {
    // content.innerHTML = `
    //         <p id="content-close">X</p>
    //         <p>No Trailer found for this video id of ${data.id}</p>
    //     `;
    content.innerHTML = `<p>No Trailer found for this video id of ${data.id}</p>`;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const video = videos[i];
    insertIframeIntoContent(video, content);
  }
}

function createSectionHeader(title) {
  const header = document.createElement('h2');
  header.innerHTML = title;

  return header;
}

export function renderProviders(data) {
  // console.log(data.results.US.flatrate);
  providersContainer.innerHTML = '';
  const providersBlock = generateProvidersBlock(data.results.US.flatrate);
  providersContainer.innerHTML = providersBlock;
}

export function renderMovies(data) {
  moviesContainer.innerHTML = '';
  const moviesBlock = generateMoviesBlock(data);
  // const header = createSectionHeader(this.title);
  // moviesBlock.insertBefore(header, moviesBlock.firstChild);
  moviesContainer.appendChild(moviesBlock);
}



// function renderSearchMovies(data) {
//   moviesSearchable.innerHTML = '';
//   const moviesBlock = generateMoviesBlock(data);
//   moviesSearchable.appendChild(moviesBlock);
// }

function generateProvidersBlock(data) {
  const providers = data;
  console.log(providers)
  let block = '';
  for (let i = 0; i < providers.length; i++) {
    const provider = providers[i];
    console.log('provider: ', provider);
    const name = provider.provider_name;
    const logo = ApiMdb.TMDB_PROVIDER_LOGO + provider.logo_path;
    block += `
    <div class="provider">
      <p>${name}</p>
      <img src="${logo}" alt="${name}">
    </div>`;
  }
  console.log(block);
  // providersContainer.innerHTML = block;
  return block;
}

function generateMoviesBlock(data) {
  const movies = data.results;
  const section = document.createElement('section');
  section.setAttribute('class', 'movie-list');

  for (let i = 0; i < movies.length; i++) {
    const {
      poster_path,
      id
    } = movies[i];

    if (poster_path) {
      // console.log(ApiMdb.TMDB_IMAGE, poster_path);
      const imageUrl = ApiMdb.TMDB_IMAGE + poster_path;

      const imageContainer = createImageContainer(imageUrl, id);
      section.appendChild(imageContainer);
    }
  }

  const movieSectionAndContent = createMovieContainer(section);
  return movieSectionAndContent;
}



// Inserting section before content element
function createMovieContainer(section) {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'movies');

  const template = `
        <div class="content">
        </div>
    `;

  movieElement.innerHTML = template;
  movieElement.insertBefore(section, movieElement.firstChild);
  return movieElement;
}

searchButton.onclick = function (event) {
  event.preventDefault();
  const value = searchInput.value

  if (value) {
    ApiMdb.searchMovie(value);
  }
  resetInput();
}

// Click on any movies
// Event Delegation
document.onclick = function (event) {
  // log('Event: ', event);
  const {
    tagName,
    id
  } = event.target;
  if (tagName.toLowerCase() === 'img') {
    const movieId = event.target.dataset.movieId;
    const section = event.target.parentElement.parentElement;
    const content = section.nextElementSibling;
    content.classList.add('content-display');
    ApiMdb.getVideosByMovieId(movieId, content);
    ApiMdb.getMovieProvidersByMovieId(movieId);
  }

  if (id === 'content-close') {
    const content = event.target.parentElement;
    content.classList.remove('content-display');
  }
}

// Initialize the search
// ApiMdb.searchMovie(INITIAL_SEARCH_VALUE);
// ApiMdb.getTopRatedMovies();
// ApiMdb.searchPopularMovie();