/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* function factory photographe */

function photographerFactory(data) {
  /* call const */
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;
  /* function create all element DOM for article photographer-section */
  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("href", `../photographer.html?${id}`);
    link.setAttribute(
      "aria-label",
      `Direction la page de la photographe ${name}(nouvelle fenetre)`
    );

    const div_image = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo de profil de ${name}`);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    const p1 = document.createElement("h3");
    p1.textContent = `${city}, ${country}`;
    const p2 = document.createElement("h4");
    p2.textContent = tagline;
    const p3 = document.createElement("p");
    p3.textContent = `${price}€/jour`;

    article.appendChild(link);
    link.appendChild(div_image);
    div_image.appendChild(img);
    link.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    return article;
  }
  /* function générate all element DOM for article photographer-header */
  function getUserPersonnalDom() {
    const span = document.createElement("span");
    const div = document.createElement("div");
    span.appendChild(div);
    const first_name = document.createElement("h1");
    first_name.textContent = name;
    const position = document.createElement("h2");
    position.textContent = `${city}, ${country}`;
    const citation = document.createElement("p");
    citation.textContent = tagline;
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo de profil de ${name}`);
    div.appendChild(first_name);
    div.appendChild(position);
    div.appendChild(citation);
    span.appendChild(img);

    return span;
  }

  return {
    name,
    picture,
    portrait,
    id,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
    getUserPersonnalDom,
  };
}
