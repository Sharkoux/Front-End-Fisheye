//Mettre le code JavaScript lié à la page photographer.html


const url_id = window.location.search.slice(1);
console.log(url_id)

async function getPhotographers() {
    // call fichier json for data with fetch
    const data = await fetch('/data/photographers.json');
    const return_data = await data.json();
    console.log(return_data)
    const photographers = return_data.photographers;  
    
    // return array data
    return ({
        return_data: [...photographers]})
}

async function displayData(return_data) {
    const photographersSection = document.querySelector(".photograph-header");

    return_data.forEach((photographer) => {
        if (photographer.id == url_id) {
        console.log(photographer)
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserPersonnalDom();
        photographersSection.appendChild(userCardDOM);
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const { return_data } = await getPhotographers();
    displayData(return_data);
    
};

init();