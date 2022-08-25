
// call const 
const lightbox_display = document.querySelector(".lightbox");
const lighbox_img = document.querySelector(".img");
const rigth = document.querySelector(".rigth");
const left = document.querySelector(".left");

let img_lightbox = document.createElement('img');
let p = document.createElement('p');

//function ligthbox 
 function ligthbox() {
    let lightSubmit = document.querySelectorAll('.link_img');
    let length = lightSubmit.length;
 
   
    
      //onclick lightbox visible
    lightSubmit.forEach(function (i) {
        i.addEventListener('click', OpenLightbox, false);
        i.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which;
            if ( keyCode === 13) {
               OpenLightbox()
            }
        });
        
        function OpenLightbox() {
            let card_body = document.querySelectorAll(".div_card_body");
            for(e = 0; e < card_body.length; e++) {
                card_body[e].firstChild.removeAttribute("data-order");
                card_body[e].firstChild.setAttribute("data-order", e)
            }
          
            
            lightbox_display.style.display = "block";
            
           

            

            //rule aria
            main.setAttribute('aria-hidden', 'true');
            lightbox_display.setAttribute('aria-hidden', 'false');
            body.setAttribute("overflow", "hidden");

            img_lightbox = document.createElement('img');

            // if not jpg create element for video
            if (i.firstChild.src.split('.')[4] === 'mp4') {
               
                img_lightbox = document.createElement('video');
                img_lightbox.autoplay = false;
                img_lightbox.controls = true;
                img_lightbox.setAttribute("src", i.firstChild.src);
                lighbox_img.appendChild(img_lightbox)
                
            } 
        
            
            
            img_lightbox.setAttribute("src", i.firstChild.src);
            p.textContent = i.parentNode.childNodes[2].textContent;



            lighbox_img.appendChild(img_lightbox);
            lighbox_img.appendChild(p);

            // find index to first picture onclick
           
            
        
            

            // add array for order
                var array = [lightSubmit[0].getAttribute("data-order")]
                //console.log(card_body[one].firstChild.firstChild.src.split('.')[4])
                for(z = 0; z < lightSubmit.length; z++) {
                    array.push(lightSubmit[z].getAttribute("data-order"))
                }
                console.log(array[0]);
                
                var a = array.findIndex(el => el == i.getAttribute("data-order"));
                
                var b = array[a];
                console.log(a)
                console.log(b)  
           
               
            
            
           
            // button rigth for slide img
            rigth.addEventListener('click', Rigth)
            async function Rigth() {
                
                if (b < card_body.length - 1) {
                    
                    b++
                    console.log(b)     
                    //if img or mp4
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'jpg') {
                        
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('img');
                        lighbox_img.appendChild(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'mp4') {
                        console.log("mp4")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('video');
                        img_lightbox.autoplay = false;
                        img_lightbox.controls = true;
                        lighbox_img.appendChild(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }

                    img_lightbox.setAttribute("src", card_body[b].firstChild.firstChild.src)
                    p.textContent =  card_body[b].firstChild.parentElement.childNodes[2].textContent;
                    

                }
                else {
                    b = 0;
                    //if img or mp4
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'jpg') {
                        console.log("jpg")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('img');
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'mp4') {
                        console.log("mp4")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('video');
                        img_lightbox.autoplay = false;
                        img_lightbox.controls = true;
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
                }  

             img_lightbox.setAttribute("src", card_body[b].firstChild.firstChild.src)
            p.textContent =  card_body[b].firstChild.parentElement.childNodes[2].textContent;
                
            }
     


            //button left for slide img
            left.addEventListener('click', Left)
            
            async function Left() {
                
                if (b > 0) {
                    b--
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'jpg') {
                        console.log("jpg")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('img');
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'mp4') {
                        console.log("mp4")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('video');
                        img_lightbox.autoplay = false;
                        img_lightbox.controls = true;
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
             
                    img_lightbox.setAttribute("src", card_body[b].firstChild.firstChild.src)
                    p.textContent =  card_body[b].firstChild.parentElement.childNodes[2].textContent;
                
                }
                else {
                    b = card_body.length - 1;
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'jpg') {
                        console.log("jpg")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('img');
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
                    if (card_body[b].firstChild.firstChild.src.split('.')[4] == 'mp4') {
                        console.log("mp4")
                        lighbox_img.removeChild(img_lightbox);
                        img_lightbox = document.createElement('video');
                        img_lightbox.autoplay = false;
                        img_lightbox.controls = true;
                        lighbox_img.append(img_lightbox)
                        lighbox_img.insertBefore(img_lightbox, p);
                    }
               
             img_lightbox.setAttribute("src", card_body[b].firstChild.firstChild.src)
             p.textContent =  card_body[b].firstChild.parentElement.childNodes[2].textContent;                }

            }
            // rigth or left [KEY]
            document.addEventListener('keydown', e => {
                const keyCode = e.keyCode ? e.keyCode : e.which;
        
                if (lightbox_display.getAttribute('aria-hidden') == 'false' && keyCode === 39) {
                    Rigth();
                }
                if (lightbox_display.getAttribute('aria-hidden') == 'false' && keyCode === 37) {
                    Left();
                }
            }); 
     
        }
    }); 
    
 


     



    /* function close to ESC */
    document.addEventListener('keydown', e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;

        if (lightbox_display.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
            closeLightbox()
        }
    })
     
}



async function closeLightbox() {
    lightbox_display.style.display = "none";
    main.setAttribute('aria-hidden', 'false');
    lightbox_display.setAttribute('aria-hidden', 'true');
    body.setAttribute("overflow", "");
    lighbox_img.removeChild(img_lightbox);
    lighbox_img.removeChild(p);
}
