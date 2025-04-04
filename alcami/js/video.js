// founder video

var videoThumbnail = document.getElementsByClassName("video-thumbnail")[0];
var founderVideo = document.getElementsByClassName("founder-video")[0];
videoThumbnail.addEventListener("click", function () {
    videoThumbnail.style.display = "none";
    founderVideo.style.display = "block"
});


// tutorial video

var tutorialThumbnail = document.getElementsByClassName("tutorial-video-thumbnail")[0];
var tutorialVideo = document.getElementsByClassName("tutorial-video")[0];
tutorialThumbnail.addEventListener("click", function () {
    tutorialThumbnail.style.display = "none";
    tutorialVideo.style.display = "block"
})