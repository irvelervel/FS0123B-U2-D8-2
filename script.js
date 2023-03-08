console.log('dom manipulation')

// legenda:
// getElementById <-- torna un elemento, quello con l'id specificato, oppure null
// getElementsByClassName <-- torna SEMPRE un array
// getElementsByTagName <-- torna SEMPRE un array
// querySelector <-- torna un elemento, il primo che rispecchia la query css fornita, oppure null
// querySelectorAll <-- torna SEMPRE un array

// selezioniamo l'immagine della card di mezzo
let allProdCards = document.getElementsByClassName('prod__card')
// let allProdCards = document.querySelectorAll('.prod__card')

// allProdCards è un array di tutti gli elementi con class 'prod__card
console.log(allProdCards)
let chosenProductCard = allProdCards[1] // la seconda

// come cambio l'immagine alla card?
// prima di tutto seleziono l'immagine dentro la card
let imgToChange = chosenProductCard.getElementsByTagName('img')[0]
console.log(imgToChange)

// imgToChange.remove()
imgToChange.setAttribute('src', 'https://placekitten.com/100')

// cerchiamo un riferimento al paragrafo testuale
let paragraphReference = document.querySelector('article .article__text')
paragraphReference.innerHTML =
  '<h3>CIAONE</h3><p>Questo testo è stato creato via JS</p>'
paragraphReference.style.color = 'red'

// creiamo un nuovo elemento nel menu a sx
// 1) creo il div in memoria
let newMenuElement = document.createElement('div')
// <div></div>
newMenuElement.innerText = 'Map'
// <div>Map</div>
newMenuElement.classList.add('nav__item--small')
// <div class="nav__item--small">Map</div>
// fatto! però questo div è solo in memoria attualmente, dobbiamo aggiungerlo alla pagina!
// seleziono il tag <nav>
let navReference = document.getElementsByTagName('nav')[0]
console.log(navReference)
navReference.appendChild(newMenuElement)
// :partying_face:
