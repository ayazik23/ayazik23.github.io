/. Main Task ./
const photoArray = [
    "image/cat.jpg",
    "image/dog.jpg",
    "image/fox.jpg",
    "image/horse.jpg"
  ];
  
  function changePhoto() {
    const photoElement = document.getElementById("myPhoto");
    
    const currentPhotoSrc = photoElement.getAttribute("src");
    
    const currentIndex = photoArray.indexOf(currentPhotoSrc);
    
    const nextIndex = (currentIndex + 1) % photoArray.length;
    
    photoElement.setAttribute("src", photoArray[nextIndex]);
  }
  document.getElementById("changePhotoButton").addEventListener("click", changePhoto);
  
/. Complementary Task ./

  let currentIndex = 0;

function changePhotoForward() {
  currentIndex = (currentIndex + 1) % photoArray.length;
  updatePhoto();
}

function changePhotoBackward() {
  currentIndex = (currentIndex - 1 + photoArray.length) % photoArray.length;
  updatePhoto();
}

function updatePhoto() {
  const photoElement = document.getElementById("myPhoto");
  photoElement.setAttribute("src", photoArray[currentIndex]);
}

document.getElementById("nextPhotoButton").addEventListener("click", changePhotoForward);
document.getElementById("prevPhotoButton").addEventListener("click", changePhotoBackward);