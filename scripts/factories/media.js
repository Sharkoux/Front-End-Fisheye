
/* function factory for media data */

function MediaFactory(data) {
    const { date, id, image, likes, video, photographerId, price, title } = data;

    const picture = `assets/images/AllImage/${image}`;
    const video_mp4 = `assets/images/AllImage/${video}`;

    /* function generate all DOM element for photograph-card zone */
    function getMediaPersonnel() {

        const div_one = document.createElement('div');
        div_one.setAttribute("class", "div_card_body");
        const card_body = document.createElement('a');
        card_body.setAttribute("class", "link_img");
        card_body.setAttribute("tabindex", "0");
        
        const date_ = document.createElement('p');
        date_.textContent = date;
        date_.setAttribute("hidden", "true");
        
        const card_title = document.createElement('p');
        card_title.textContent = title;

        const Nbr_Like = document.createElement('span');
        Nbr_Like.setAttribute("class", "span_price");
        Nbr_Like.textContent = likes;
        //console.log(likes)

        const like = document.createElement('i');
        like.setAttribute("class", "fa-solid fa-heart like_0");
        like.setAttribute('tabindex', 0);


        var img = document.createElement('img');
        img.setAttribute("src", picture);

        if (image == undefined) {
            console.log("error");
            img = document.createElement('video');
            img.autoplay = false;
            img.controls = true;
            img.src = video_mp4;
            img.setAttribute('tabindex', '1');  
        }
        div_one.appendChild(card_body);
        card_body.appendChild(img);
        div_one.appendChild(date_);
        div_one.appendChild(card_title);
        div_one.appendChild(Nbr_Like);
        div_one.appendChild(like);

        return (div_one);
    }


    return { video, date, id, image, likes, photographerId, price, title, getMediaPersonnel }
}