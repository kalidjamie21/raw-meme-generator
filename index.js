const memeBtn = document.querySelector(".meme-btn");
const memeHolder = document.querySelector(".meme-holder");
memeImage = document.querySelector("img");

let imgArray = ["gettyimages-1253485225-612x612.jpg", "gettyimages-1300235980-612x612.jpg", "gettyimages-1318934927-612x612.jpg"];

memeBtn.addEventListener("click", function() {
 
    renderImage();

})


function renderImage() {
    let rand = Math.random();
    let randomNum = Math.floor(rand * imgArray.length);
    memeImage.setAttribute("src", "meme_images/" + imgArray[randomNum]);

        
    
    
}

   
