function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p1 = document.createElement( 'h3' );
        p1.textContent = city + ", " + country;
        const p2 = document.createElement( 'h4' );
        p2.textContent = tagline;
        const p3 = document.createElement( 'p' );
        p3.textContent = price + "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        return (article);
    }
    return { name, picture, portrait, id, city, country, tagline, price, getUserCardDOM }
}