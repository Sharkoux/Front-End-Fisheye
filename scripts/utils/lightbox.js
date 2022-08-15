




async function ligthbox() {
    let lightSubmit = document.querySelectorAll('.link_img');
    
    
    
    lightSubmit.forEach( function (i) {
    i.addEventListener('click', function() {
        console.log(i.firstChild.src)
    });
    });
    
    
}