// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(respo => {
        obj = respo.data.articles;
        for (let article in obj){
            obj[article].forEach(article => cardsContainer.appendChild(createCard(article.authorName, article.authorPhoto, article.headline)));
        }
    })
    .catch(err => console.log('Failed to grab data', err));


function createCard(name, img, headline){
    const card = document.createElement('div');
    const headlineContainer = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headlineContainer.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headlineContainer.textContent = headline;
    authorName.textContent = name;
    authorImg.src = img;

    card.appendChild(headlineContainer);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    return card;
};
