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



async function getMedia() {
    // call fichier json for data with fetch
    const data = await fetch('/data/photographers.json');
    const return_data2 = await data.json();
    console.log(return_data2.media)
    const media = return_data2.media;  
    
    // return array data
    return ({
        return_data2: [...media]})
}
async function displayData2(return_data2) {
    const MediaSection = document.querySelector(".photograph-card");

    return_data2.forEach((media) => {
        if (media.photographerId == url_id) {
        console.log(media.video)
        const photographerMedia = MediaFactory(media);
        const userCardDOM = photographerMedia.getMediaPersonnel();
        MediaSection.appendChild(userCardDOM);
        }
    });
};

async function displayData(return_data) {
    const photographersSection = document.querySelector(".photograph-header");
    const insert = document.querySelector(".insert");
    const modal_name = document.querySelector(".modal_name");
    return_data.forEach((photographer) => {
        if (photographer.id == url_id) {
        console.log(photographer)
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserPersonnalDom();
        photographersSection.appendChild(userCardDOM);
        const price = document.createElement('p');
        price.textContent = photographer.price + "€ / jour";
        modal_name.textContent = photographer.name
        insert.appendChild(price)
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const { return_data } = await getPhotographers();
    displayData(return_data);
    const { return_data2 } = await getMedia();
    displayData2(return_data2);
    ligthbox();
};

init();
