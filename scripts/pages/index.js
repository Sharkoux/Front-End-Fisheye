/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* Function call data json fetch */
async function getPhotographers() {
  // call fichier json for data with fetch
  const data = await fetch("./data/photographers.json");
  const return_data = await data.json();
  console.log(return_data);
  const { photographers } = return_data;

  // return array data
  return {
    return_data: [...photographers],
  };
}

/* Function add element DOM in photographe_section */
async function displayData(return_data) {
  const photographersSection = document.querySelector(".photographer_section");

  return_data.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
/* function init */
async function init() {
  // Récupère les datas des photographes
  const { return_data } = await getPhotographers();
  displayData(return_data);
}

init();
