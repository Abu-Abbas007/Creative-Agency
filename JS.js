const videoContanier = document.querySelector('.video-contanier')
const buttonContanier = document.querySelector('.button-conatanier')
const video = document.querySelector('.video')
const videoTimeBar = document.querySelector('.video-time-bar') 
const bar = document.querySelector('.bar')
const playOrPauseButton = document.querySelector('.playbutton')
const videoDropShadow = getComputedStyle(videoContanier,"::before")
const videoVolume = document.querySelector("#videoVolume")


function videoPlayOrPause () {
    if (video.paused) {
        video.play();
        videoTimeBar.style.display="block"
        videoVolume.style.display="block"
        videoContanier.style.setProperty("--opacity","0");
        playOrPauseButton.style.borderWidth="0 0 0 15px"
        playOrPauseButton.style.borderStyle="double"
        buttonContanier.style.opacity="0"
    }

    else if (video.play) {
        video.pause();
        videoTimeBar.style.display="block"
        videoVolume.style.display="block"
        videoContanier.style.setProperty("--opacity","0")
        playOrPauseButton.style.borderWidth="15px 0 15px 15px"
        playOrPauseButton.style.borderStyle="solid"
        buttonContanier.style.opacity="100"
    }
}

function videoTime () {
    let time = video.currentTime/video.duration;
    bar.style.width = time*100 + "%"
}


function videoVolumeControl (e) {
    video.volume = e.target.value
}


video.addEventListener('timeupdate',videoTime);
video.addEventListener('click',videoPlayOrPause);
buttonContanier.addEventListener('click',videoPlayOrPause)

videoVolume.addEventListener('mousemove',videoVolumeControl)


const menuIcon = document.querySelector(".fa-bars");
const navBar = document.querySelector(".aside-nav-bar");

function menuIconActionHandaler() {
  menuIcon.classList.toggle("fa-bars-open");
  navBar.classList.toggle("nav-btn");
}

menuIcon.addEventListener("click", menuIconActionHandaler);