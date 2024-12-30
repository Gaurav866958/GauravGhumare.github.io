console.log("Welcome to Spotify");

//initilise the varialbles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "JRoy-Justin Beiber", filePath: "songs/1.mp3", coverPath: "cover/jroy.jpg" },
    { songName: "O sita", filePath: " songs/2.mp3", coverPath: "cover/osita.jpg" },
    { songName: "Ordinary person", filePath: " songs/3.mp3", coverPath: "cover/ordinary.jpg" },
    { songName: "Taambdi Chaamdi", filePath: " songs/4.mp3", coverPath: "cover/tamdi1.jpg" },
    { songName: "Tere Liye", filePath: " songs/5.mp3", coverPath: "cover/tere.jpg" },
    { songName: "Toh Dishoom", filePath: " songs/6.mp3", coverPath: "cover/dishoom.jpg" },
    { songName: "Tu Hain Toh", filePath: " songs/7.mp3", coverPath: "cover/tuhain.jpg" },
    { songName: "Nadaniyaan", filePath: " songs/8.mp3", coverPath: "cover/nad.jpg" },
    { songName: "Bloody Sweet", filePath: " songs/9.mp3", coverPath: "cover/jroy.jpg" }
]


songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
// audioElment.play();

//Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;

})
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex>7){
        songIndex = 0;
        songIndex++;
    }
    
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


})
document.getElementById('previous').addEventListener('click', () => {
   if (songIndex<=0){
    songIndex = 0;
   }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


})

