import './style.css'
const section = document.getElementById("section")

const articles = [{
  titre: "comment devenir une yandere en 3 étape ?",
  contenu: "Je vais vous expliquer comment devenir une yandere facilement et de manière amusante...",
  avatar: "80.jpg",
  pseudo: "Reginald Brewer"
}, {
  titre: "ma relation avec le fromage",
  contenu: "voila 16 ans que je suis en couple avec le fromage et mon couple et je dirais fusionnel",
  avatar: "72.jpg",
  pseudo: "Delores Rhodes"
}, {
  titre: "comment ce transformer en chien",
  contenu: "1ère étape : crush sur makima",
  avatar: "51.jpg",
  pseudo: "Micheal Martin"
}]

for (let i = 0; i < articles.length; i++) {
  section.innerHTML += `
  <article>
  <h3>${articles[i].titre}</h3>
  <p>${articles[i].contenu}</p>
  <p><img src="${articles[i].avatar}">${articles[i].pseudo}</p>
  </article>
  `

}