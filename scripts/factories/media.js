function MediaFactory(data) {
    const { date, id, image, likes, photographerId, price, title } = data;
    const picture = `assets/images/AllImage/${image}`;

    function getMediaPersonnel() {
        const card_body = document.createElement('div');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        card_body.appendChild(img);
        return (card_body);
    }
    

    return { date, id, image, likes, photographerId, price, title, getMediaPersonnel }
}