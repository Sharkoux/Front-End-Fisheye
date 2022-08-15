
/* function factory for media data */

function MediaFactory(data) {
    const { date, id, image, likes, video, photographerId, price, title } = data;

    const picture = `assets/images/AllImage/${image}`;
    const video_mp4 = `assets/images/AllImage/${video}`;

    /* function generate all DOM element for photograph-card zone */
    function getMediaPersonnel() {

        const card_body = document.createElement('div');
        const card_title = document.createElement('p');
        card_title.textContent = title;

        const like = document.createElement('i');
        like.setAttribute("class", "fa-solid fa-heart");

        var img = document.createElement('img');
        img.setAttribute("src", picture);

        if (image == undefined) {
            console.log("error");
            img = document.createElement('video');
            img.autoplay = false;
            img.controls = true;
            img.src = video_mp4;

        }

        card_body.appendChild(img);
        card_body.appendChild(card_title);
        card_body.appendChild(like);

        return (card_body);
    }


    return { video, date, id, image, likes, photographerId, price, title, getMediaPersonnel }
}