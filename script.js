document.querySelectorAll('.like-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
        btn.classList.toggle('fa-regular');
      btn.classList.toggle('fa-solid');
        btn.classList.toggle('text-red-500');
})})


let closedbtn=document.getElementById("close-btn")
let closed=document.getElementById("close")
closedbtn.addEventListener('click', () => {
  closed.classList.add('opacity-0');
  setTimeout(() => {
    closed.style.display = 'none';
  }, 500); 
});

let sidenav=document.getElementById("sidenav")
let menuicon=document.getElementById("menuicon")
let closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


const images = document.querySelectorAll('.fade-image');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('opacity-100', i === index);
      img.classList.toggle('opacity-0', i !== index);
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
