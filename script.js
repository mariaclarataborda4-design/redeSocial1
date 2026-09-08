document.addEventListene("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media")
if (!likeBtn) return;

const likesCountSpan = likeBtn.querySelector(".like-count");
const bookmarkBtn = document.querySelector("bookmark-btn");

let isLiked = false;
let baseLike = 0;

if (likesCountSpan){
    likesCountSpan.textContent = "0"
}

//númers grandes

function formatLikes(num) {
    if(num >=1000){
        return (num/1000).toFixed{1}+"K";
    }
    return num.toString();
}

function addLike(){
    baseLike++;
    isLiked = true;
    likeBtn.cloassList.add("liked");

    if(likesCountSpan){
        liked.textContent = formatLikes{baseLikes}
    }
}


})