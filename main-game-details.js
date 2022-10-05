// change the main image
function changeMainImg(newSrc, newAlt) {
    document.querySelector('#game-details-main-img img').src = newSrc;
    document.querySelector('#game-details-main-img img').alt = newAlt;
}

var thumbnailArray = document.querySelectorAll('.game-details-thumbnails img');

function resetOpacity() {
    var thumbnailList = document.querySelectorAll('.game-details-thumbnails img');
    console.log(thumbnailList);
    
    thumbnailList.forEach((ele) => {
        ele.style.opacity = "0.5";
    });
}

for (var i = 0; i < thumbnailArray.length; i++) {
    thumbnailArray[i].onclick = function() {
        resetOpacity();
        changeMainImg(this.src, this.alt);
        this.style.opacity = "1";
    }
}