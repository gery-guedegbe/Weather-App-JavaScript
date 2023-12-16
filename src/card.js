// Fonction pour créer le contenu de la carte

export const createCard = () => {
  const card = document.getElementById("card");

  // Crée un champ de saisie dans la barre de recherche

  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");
  card.appendChild(searchDiv);

  const creatInput = document.createElement("input");
  creatInput.type = "text";
  creatInput.placeholder = "enter city name";
  creatInput.spellcheck = "false";
  searchDiv.appendChild(creatInput);

  // Crée un bouton et une image de recherche dans la barre de recherche

  const creatButton = document.createElement("button");
  searchDiv.appendChild(creatButton);
  const searchImg = document.createElement("img");
  searchImg.src = "images/search.png";
  creatButton.appendChild(searchImg);

  // Crée un conteneur d'erreur et un paragraphe pour afficher les erreurs

  const error = document.createElement("div");
  error.classList.add("error");
  const errorParagraph = document.createElement("p");
  errorParagraph.textContent = "Invalid city name";
  error.appendChild(errorParagraph);
  card.appendChild(error);

  // Crée un conteneur pour les informations météorologiques

  const weather = document.createElement("div");
  weather.classList.add("weather");
  card.appendChild(weather);

  // Crée une icône météo dans le conteneur météo

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weather-icon");
  weatherIcon.src = "images/rain.png";
  weather.appendChild(weatherIcon);

  // Crée un élément pour afficher la température

  const h1 = document.createElement("h1");
  h1.classList.add("temp");
  h1.textContent = "21°C";
  weather.appendChild(h1);

  // Crée un élément pour afficher le nom de la ville

  const h2 = document.createElement("h2");
  h2.classList.add("city");
  h2.textContent = "Porto Novo";
  weather.appendChild(h2);

  // Crée un conteneur pour les détails météorologiques

  const details = document.createElement("div");
  details.classList.add("details");
  weather.appendChild(details);

  // Crée une colonne pour afficher l'humidité

  const colomn1 = document.createElement("div");
  colomn1.classList.add("col");
  details.appendChild(colomn1);

  // Crée une icône pour l'humidité

  const image1 = document.createElement("img");
  image1.src = "images/humidity.png";
  colomn1.appendChild(image1);

  // Crée un conteneur pour afficher l'humidité et son libellé

  const div1 = document.createElement("div");
  colomn1.appendChild(div1);

  // Crée un paragraphe pour afficher le pourcentage d'humidité

  const humidityParagraph = document.createElement("p");
  humidityParagraph.textContent = "60%";
  humidityParagraph.classList.add("humidity");
  div1.appendChild(humidityParagraph);

  // Crée un paragraphe pour afficher le libellé "Humidity"

  const humidityLabelParagraph = document.createElement("p");
  humidityLabelParagraph.textContent = "Humidity";
  div1.appendChild(humidityLabelParagraph);

  // Crée une colonne pour afficher la vitesse du vent

  const colomn2 = document.createElement("div");
  colomn2.classList.add("col");
  details.appendChild(colomn2);

  // Crée une colonne pour afficher la vitesse du vent

  const image2 = document.createElement("img");
  image2.src = "images/wind.png";
  colomn2.appendChild(image2);

  // Crée un conteneur pour afficher la vitesse du vent et son libellé

  const div2 = document.createElement("div");
  colomn2.appendChild(div2);

  // Crée un paragraphe pour afficher la vitesse du vent

  const windSpeedParagraph = document.createElement("p");
  windSpeedParagraph.textContent = "12 km/h";
  windSpeedParagraph.classList.add("wind");
  div2.appendChild(windSpeedParagraph);

  // Crée un paragraphe pour afficher le libellé "Wind Speed"

  const windSpeedLabelParagraph = document.createElement("p");
  windSpeedLabelParagraph.textContent = "Wind Speed";
  div2.appendChild(windSpeedLabelParagraph);

  return card;
};
