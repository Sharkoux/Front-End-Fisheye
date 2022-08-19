//Mettre le code JavaScript lié à la page photographer.html


const url_id = window.location.search.slice(1);
console.log(url_id);



async function getPhotographers() {
    // call fichier json for data with fetch
    const data = await fetch('/data/photographers.json');
    const return_data = await data.json();
    const photographers = return_data.photographers;  
    
    // return array data
    return ({
        return_data: [...photographers]})
}



async function getMedia() {
    // call fichier json for data with fetch
    const data = await fetch('/data/photographers.json');
    const return_data2 = await data.json();
    const media = return_data2.media;  
    
    // return array data
    return ({
        return_data2: [...media]})
}

async function displayData2(return_data2) {
    const MediaSection = document.querySelector(".photograph-card");
    
    return_data2.forEach((media) => {
        if (media.photographerId == url_id) {
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
    //call all number like and addition   
    var array = [Span_like[0].innerHTML];
   
    for(a = 1; a < Span_like.length; a++) {
    array.push(Span_like[a].innerHTML);
    
    }
    console.log(array)
    let sum = 0;
    for (z = 0; z < array.length; z++) {
        sum += Number(array[z]);
     
    }
    console.log(sum);
    // display total number like for this photograph
   
    Nmber_like.textContent = sum;
    
    }
    
    add_like.forEach(function (n) {
        n.addEventListener('click', (e) => {
        var parent2 = n.parentNode; 
              
        parent2.childNodes[2].innerHTML + 1 
        
        console.log(parent2.childNodes)
    
        
       
        alllike();
        
    }

        )});
    

    alllike();
    

}

async function displayData(return_data) {
    const photographersSection = document.querySelector(".photograph-header");
    const insert = document.querySelector(".insert");
    const modal_name = document.querySelector(".modal_name");
    return_data.forEach((photographer) => {
        if (photographer.id == url_id) {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserPersonnalDom();
        photographersSection.appendChild(userCardDOM);
        const price = document.createElement('p');
        price.textContent = photographer.price + "€ / jour";
        modal_name.textContent = photographer.name;
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
    AddLike();
    ligthbox();
};

init();
