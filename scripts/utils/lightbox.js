
// call const 
const lightbox_display = document.querySelector(".lightbox")
const lighbox_img = document.querySelector(".img")
const rigth = document.querySelector(".rigth")
const left = document.querySelector(".left")
let img_lightbox = document.createElement('img');

//function ligthbox 
async function ligthbox() {
    let lightSubmit = document.querySelectorAll('.link_img');
    let length = lightSubmit.length - 1;
    let p = document.createElement('p');
    let z = 0;
    
    //onclick lightbox visible
    lightSubmit.forEach( function (i) {
    i.addEventListener('click', function() {
        
        console.log(i.childNodes[1].textContent)
        lightbox_display.style.display = "block";

      
       
        
        if (i.firstChild.src.split('.')[4] !== 'jpg') {
         img_lightbox = document.createElement('video');
         img_lightbox.autoplay = false;
         img_lightbox.controls = true;
        }

         
        img_lightbox.setAttribute("src", i.firstChild.src);
        p.textContent = i.childNodes[1].textContent;
        console.log(i.firstChild);
        

        lighbox_img.appendChild(img_lightbox);
        lighbox_img.appendChild(p)

    });
    });
    
    // button rigth for slide img
    rigth.addEventListener('click', function() {
   

    if(z < length) {
    z++;
    if(lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
        lighbox_img.removeChild(img_lightbox);
        img_lightbox = document.createElement('img');
        lighbox_img.append(img_lightbox)
        lighbox_img.insertBefore(img_lightbox, p);
    }
    img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
    p.textContent = lightSubmit[z].textContent;
    
    }
    else {
    z = 0;
    img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src);
    p.textContent = lightSubmit[z].textContent;
    }    
    
    });
    //button left for slide img
    left.addEventListener('click', function() {
        if (z > 0) {
        z--;
        img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
        p.textContent = lightSubmit[z].textContent;
        }
        else {
        z = 9;
        img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
        p.textContent = lightSubmit[z].textContent;
        }    
        
        });

    
}