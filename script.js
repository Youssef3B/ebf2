

const allImages = document.querySelectorAll('.cards');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');
let currentImageIdx = 0;

imageView.addEventListener('click', function(){
  this.style.display = "none";
  imageBox.style.display = "none";
})

allImages.forEach(function(btn, index){
  btn.addEventListener('click', function(){
      imageView.style.display = "block";
      imageBox.style.display = "block";
      currentImageIdx = index + 1;
      currentImageDisplay(currentImageIdx);
  })
})
function currentImageDisplay(position){
  imageBox.style.background = `url(images/portfolio/${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
  currentImageIdx--;
  if(currentImageIdx === 0){
      currentImageIdx = allImages.length;
  }
  currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
  currentImageIdx++;
  if(currentImageIdx === 47){
      currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
})
function filterImages(filterId, clickedLink) {
  var allLinks = document.querySelectorAll('.nav-link');

  // Remove "active" class from all links
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].classList.remove('active');
  }

  // Add "active" class to the clicked link
  clickedLink.classList.add('active');

  var allImages = document.querySelectorAll('.cards img');

  for (var i = 0; i < allImages.length; i++) {
    var image = allImages[i];

    if (filterId === 'filterAll' || image.id === filterId) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  }
}





