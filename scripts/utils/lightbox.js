
// call const 
const lightbox_display = document.querySelector(".lightbox");
const lighbox_img = document.querySelector(".img");
const rigth = document.querySelector(".rigth");
const left = document.querySelector(".left");
let img_lightbox = document.createElement('img');


//function ligthbox 
async function ligthbox() {
    let lightSubmit = document.querySelectorAll('.link_img');
    let length = lightSubmit.length - 1;
    let p = document.createElement('p');
    
    
    //onclick lightbox visible
    lightSubmit.forEach( function (i) {
    i.addEventListener('click', function() {
        
        console.log(i.childNodes[1].textContent)
        lightbox_display.style.display = "block";

      
       
        // if not jpg create element for video
        if (i.firstChild.src.split('.')[4] !== 'jpg') {
         img_lightbox = document.createElement('video');
         img_lightbox.autoplay = false;
         img_lightbox.controls = true;
        }

         
        img_lightbox.setAttribute("src", i.firstChild.src);
        p.textContent = i.childNodes[1].textContent;
        
        

        lighbox_img.appendChild(img_lightbox);
        lighbox_img.appendChild(p);

        // find index to first picture onclick
        var index_lightbox = Array.from(lightSubmit).findIndex(el => {
            return el.textContent.includes(i.textContent);
        });
        
        console.log(index_lightbox)
        z = index_lightbox;

        // button rigth for slide img
        rigth.addEventListener('click', function() {
        
        
            
        if(z < length) {
        z++;
        if(lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
            console.log("jpg")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('img');
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
        if (lightSubmit[z].firstChild.src.split('.')[4] == 'mp4') {
            console.log("mp4")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('video');
                img_lightbox.autoplay = false;
                img_lightbox.controls = true;
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
        
        img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
        p.textContent = lightSubmit[z].textContent;
        
        
        }
        else {
        z = 0;
        if(lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
            console.log("jpg")
            lighbox_img.removeChild(img_lightbox);
            img_lightbox = document.createElement('img');
            lighbox_img.append(img_lightbox)
            lighbox_img.insertBefore(img_lightbox, p);
        }
         if (lightSubmit[z].firstChild.src.split('.')[4] == 'mp4') {
        console.log("mp4")
            lighbox_img.removeChild(img_lightbox);
            img_lightbox = document.createElement('video');
            img_lightbox.autoplay = false;
            img_lightbox.controls = true;
            lighbox_img.append(img_lightbox)
            lighbox_img.insertBefore(img_lightbox, p);
        }
    } 
        img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src);
        p.textContent = lightSubmit[z].textContent;
           
        
        });
        
        //button left for slide img
        left.addEventListener('click', function() {
            if (z > 0) {
            z--;
            if(lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
                console.log("jpg")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('img');
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
             if (lightSubmit[z].firstChild.src.split('.')[4] == 'mp4') {
                console.log("mp4")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('video');
                img_lightbox.autoplay = false;
                img_lightbox.controls = true;
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
            img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
            p.textContent = lightSubmit[z].textContent;
            }
            else {
            z = length;
            if(lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
                console.log("jpg")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('img');
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
             if (lightSubmit[z].firstChild.src.split('.')[4] == 'mp4') {
            console.log("mp4")
                lighbox_img.removeChild(img_lightbox);
                img_lightbox = document.createElement('video');
                img_lightbox.autoplay = false;
                img_lightbox.controls = true;
                lighbox_img.append(img_lightbox)
                lighbox_img.insertBefore(img_lightbox, p);
            }
            img_lightbox.setAttribute("src", lightSubmit[z].firstChild.src)
            p.textContent = lightSubmit[z].textContent;
            }    
            
            });
    });
    });
    
      
    
}
async function closeLightbox() {
    lightbox_display.style.display = "none";
   }
