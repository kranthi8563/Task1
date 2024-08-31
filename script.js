const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = document.querySelector("i");


menuBtn.addEventListener("click",(e) => {

    navLinks.classList.toggle("open");
const isOpen = navLinks.classList.contains("open");
menuBTNicon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener("click", (e)=>{

    navLinks.classList.remove("Open");
    menuBTNicon.setAttribute("class","ri-menu-line");
})
document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.client_slide');
    const bullets = document.querySelectorAll('.client_bullet');
    let currentSlide = 0;
    function showSlide(index){
        const slidesContainer = document.querySelector('.client_slides');
        slidesContainer.style.transform = 'translateX(-${index * 100}%)';
        bullets.forEach(bullet => bullet.classList.remove('active'));
        bullets[index].classList.add('active');
    }

    bullets.forEach((bullet,index)=>{
        bullet.addEventListener('click',()=>{
            currentSlide=index;
            showSlide(currentSlide);
        });

        
    });
    showSlide(currentSlide);



});
  