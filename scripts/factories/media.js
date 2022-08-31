/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// function factory for media data

function MediaFactory(data) {
  const { date, id, image, likes, video, photographerId, price, title } = data;

  const picture = `assets/images/AllImage/${image}`;
  const video_mp4 = `assets/images/AllImage/${video}`;

  /* function generate all DOM element for photograph-card zone */
  function getMediaPersonnel() {
    const div_one = document.createElement("div");
    div_one.setAttribute("class", "div_card_body");

    const Nbr_Like = document.createElement("span");
    Nbr_Like.setAttribute("class", "span_price");
    Nbr_Like.textContent = likes;
    // console.log(likes)

    const card_body = document.createElement("a");
    card_body.setAttribute("class", "link_img");
    card_body.setAttribute("tabindex", "0");
    card_body.setAttribute(
      "aria-description",
      `Afficher la photo nommée ${title} ayant ${Nbr_Like.textContent} like`
    );

    const date_1 = document.createElement("em");
    date_1.textContent = date;
    date_1.setAttribute("hidden", "true");

    const card_title = document.createElement("p");
    card_title.textContent = title;

    const like = document.createElement("i");
    like.setAttribute("class", "fa-solid fa-heart like_0");
    like.setAttribute("tabindex", 0);
    like.setAttribute("aria-label", "like");
    like.setAttribute("role", "link");

    let img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo nommée ${title}`);

    if (image === undefined) {
      console.log("error");
      img = document.createElement("video");
      img.autoplay = false;
      img.controls = true;
      img.src = video_mp4;
      img.setAttribute("tabindex", "0");
    }
    div_one.appendChild(card_body);
    card_body.appendChild(img);
    div_one.appendChild(date_1);
    div_one.appendChild(card_title);
    div_one.appendChild(Nbr_Like);
    div_one.appendChild(like);
    console.log(div_one);
    return div_one;
  }

  return {
    video,
    date,
    id,
    image,
    likes,
    photographerId,
    price,
    title,
    getMediaPersonnel,
  };
}
