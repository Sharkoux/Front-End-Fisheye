
// call const 
const lightbox_display = document.querySelector(".lightbox");
const lighbox_img = document.querySelector(".img");
const rigth = document.querySelector(".rigth");
const left = document.querySelector(".left");
let img_lightbox = document.createElement('img');


//function ligthbox 
 function ligthbox() {
    let lightSubmit = document.querySelectorAll('.link_img');
    let length = lightSubmit.length - 1;
    let p = document.createElement('p');
    

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
            
            console.log(i.parentNode.childNodes[1].textContent)
            lightbox_display.style.display = "block";

            //rule aria
            main.setAttribute('aria-hidden', 'true');
            lightbox_display.setAttribute('aria-hidden', 'false');
            body.setAttribute("overflow", "hidden");

            // if not jpg create element for video
            if (i.firstChild.src.split('.')[4] !== 'jpg') {
                img_lightbox = document.createElement('video');
                img_lightbox.autoplay = false;
                img_lightbox.controls = true;
            }


            img_lightbox.setAttribute("src", i.firstChild.src);
            p.textContent = i.parentNode.childNodes[1].textContent;



            lighbox_img.appendChild(img_lightbox);
            lighbox_img.appendChild(p);

            // find index to first picture onclick
            var index_lightbox = Array.from(lightSubmit).findIndex(el => {
                return el.textContent.includes(i.textContent);
            });

            console.log(index_lightbox)
            z = index_lightbox;

            // button rigth for slide img
            rigth.addEventListener('click', Rigth)


            async function Rigth() {
                if (z < length) {
                    z++;
                    if (lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
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
                    if (lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
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


            }

            //button left for slide img
            left.addEventListener('click', Left)

            async function Left() {
                if (z > 0) {
                    z--;
                    if (lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
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
                    if (lightSubmit[z].firstChild.src.split('.')[4] == 'jpg') {
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

            }
            document.addEventListener('keydown', e => {
                const keyCode = e.keyCode ? e.keyCode : e.which;
        
                if (lightbox_display.getAttribute('aria-hidden') == 'false' && keyCode === 39) {
                    Rigth();
                }
                if (lightbox_display.getAttribute('aria-hidden') == 'false' && keyCode === 37) {
                    Left();
                }
            })
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
}
