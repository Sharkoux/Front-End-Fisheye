/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
// Mettre le code JavaScript lié à la page photographer.html

const url_id = window.location.search.slice(1);
console.log(url_id);

async function getPhotographers() {
  // call fichier json for data with fetch
  const data = await fetch("/data/photographers.json");
  const return_data = await data.json();
  const { photographers } = return_data;

  // return array data
  return {
    return_data: [...photographers],
  };
}

async function getMedia() {
  // call fichier json for data with fetch
  const data = await fetch("/data/photographers.json");
  const return_data2 = await data.json();
  const { media } = return_data2;

  // return array data
  return {
    return_data2: [...media],
  };
}

async function displayData2(return_data2) {
  const MediaSection = document.querySelector(".photograph-card");

  return_data2.forEach((media) => {
    if (Number(media.photographerId) === Number(url_id)) {
      const photographerMedia = MediaFactory(media);
      const userCardDOM = photographerMedia.getMediaPersonnel();
      MediaSection.appendChild(userCardDOM);
    }
  });
}

async function AddLike() {
  const Span_like = document.querySelectorAll(".span_price");
  const Nmber_like = document.querySelector(".nmber_like");
  const add_like = document.querySelectorAll(".like_0");

  function alllike() {
    // call all number like and addition
    const array = [Span_like[0].innerHTML];

    for (a = 1; a < Span_like.length; a += 1) {
      array.push(Span_like[a].innerHTML);
    }
    console.log(array);
    let sum = 0;
    for (z = 0; z < array.length; z += 1) {
      sum += Number(array[z]);
    }
    console.log(sum);
    // display total number like for this photograph

    Nmber_like.textContent = sum;
  }

  // for  all heart click
  add_like.forEach((n) => {
    // Number like + 1
    function NewLike() {
      const parent2 = n.parentNode;

      const like_all = Number(parent2.childNodes[3].innerHTML);
      console.log(n);
      parent2.childNodes[3].innerHTML = like_all + 1;
      // Impossible > +1
      n.removeEventListener("click", NewLike);
      n.removeEventListener("keydown", KeyDown);

      alllike();
    }

    // and keydown (ENTER)
    function KeyDown(e) {
      const keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode === 13) {
        NewLike();
      }
    }

    n.addEventListener("click", NewLike, false);
    n.addEventListener("keydown", KeyDown, false);
  });

  alllike();
}

// function choice sorting method

function SortChoice() {
  // call const
  const dropbtn = document.querySelector(".drop_btn");
  const dropdown = document.querySelector(".dropdown_body");
  const arrowup = document.querySelector(".angle-up");
  const arrowdown = document.querySelector(".angle-down");
  const Card = document.querySelectorAll(".div_card_body");
  const photograph_card = document.querySelector(".photograph-card");
  const choicePop = document.querySelector(".choicePop");
  const choiceDate = document.querySelector(".choiceDate");
  const choiceTitle = document.querySelector(".choiceTitle");

  // reveal arrow and menu choice
  dropdown.style.display = "flex";
  arrowup.style.setProperty("display", "flex", "important");
  arrowdown.style.display = "none";

  async function IfPopChoice() {
    dropdown.style.display = "none";
    const order_Pop = [].slice
      .call(Card)
      .sort((a, b) => a.childNodes[3].innerHTML - b.childNodes[3].innerHTML)
      .reverse();

    order_Pop.forEach((element) => {
      photograph_card.appendChild(element);
    });
    dropbtn.firstChild.replaceWith("Popularité");
    arrowup.style.setProperty("display", "none", "important");
    arrowdown.style.display = "flex";
  }
  // and keydown (ENTER)
  function KeyDown(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13) {
      IfPopChoice();
    }
  }
  // if "Popularité" choice, likes picture for order
  choicePop.addEventListener("click", IfPopChoice);
  choicePop.addEventListener("keydown", KeyDown, false);

  async function IfDateChoice() {
    dropdown.style.display = "none";
    console.log(Card[0].childNodes[1].innerHTML);
    const order_Date = [].slice
      .call(Card)
      .sort(
        (a, b) =>
          new Date(a.childNodes[1].innerHTML) -
          new Date(b.childNodes[1].innerHTML)
      );

    order_Date.forEach((element) => {
      photograph_card.appendChild(element);
    });
    dropbtn.firstChild.replaceWith("Date");
    arrowup.style.setProperty("display", "none", "important");
    arrowdown.style.display = "flex";
  }

  // and keydown (ENTER)
  function KeyDown2(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13) {
      IfDateChoice();
    }
  }

  // if "Date" choice, Date for order
  choiceDate.addEventListener("click", IfDateChoice);
  choiceDate.addEventListener("keydown", KeyDown2, false);

  async function IfTitleChoice() {
    dropdown.style.display = "none";
    console.log(Card[0].childNodes[2].innerHTML);
    const order_Title = [].slice
      .call(Card)
      .sort((a, b) =>
        a.childNodes[2].innerHTML > b.childNodes[2].innerHTML ? 1 : -1
      );

    order_Title.forEach((element) => {
      photograph_card.appendChild(element);
    });
    dropbtn.firstChild.replaceWith("Titre");
    arrowup.style.setProperty("display", "none", "important");
    arrowdown.style.display = "flex";
  }

  // and keydown (ENTER)
  function KeyDown3(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13) {
      IfTitleChoice();
    }
  }

  // if "Title" choice, Title for order
  choiceTitle.addEventListener("click", IfTitleChoice);
  choiceTitle.addEventListener("keydown", KeyDown3, false);

  dropbtn.addEventListener("dblclick", () => {
    dropdown.style.display = "none";
  });

  /* function close to ESC */
  document.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which;

    if (keyCode === 27) {
      dropdown.style.display = "none";
    }
  });
}

async function displayData(return_data) {
  const photographersSection = document.querySelector(".photograph-header");
  const insert = document.querySelector(".insert");
  const modal_name = document.querySelector(".modal_name");
  return_data.forEach((photographer) => {
    if (Number(photographer.id) === Number(url_id)) {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserPersonnalDom();
      photographersSection.appendChild(userCardDOM);
      const price = document.createElement("p");
      price.textContent = `${photographer.price}€ / jour`;
      modal_name.textContent = photographer.name;
      insert.appendChild(price);
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { return_data } = await getPhotographers();
  displayData(return_data);
  const { return_data2 } = await getMedia();
  displayData2(return_data2);
  AddLike();
  ligthbox();
}

init();
