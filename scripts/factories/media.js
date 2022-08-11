
/* function factory for media data */

function MediaFactory(data) {
    const { date, id, image, likes, photographerId, price, title } = data;
    const picture = `assets/images/AllImage/${image}`;


    /* function generate all DOM element for photograph-card zone */
    function getMediaPersonnel() {
        const card_body = document.createElement('div');
        const card_title = document.createElement('p');
        card_title.textContent = title;

        const like = document.createElement('i');
        like.setAttribute("class", "fa-solid fa-heart");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        card_body.appendChild(img);
        card_body.appendChild(card_title);
        card_body.appendChild(like);
        
        return (card_body);
    }
    

    return { date, id, image, likes, photographerId, price, title, getMediaPersonnel }
}