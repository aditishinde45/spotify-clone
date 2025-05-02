let song1=document.querySelector(".song1");
let audio=document.querySelector("audio");
let volume=document.querySelector(".progress-bar");
let runSong=document.querySelector(".running");
let song_name=document.querySelector("#name");
let artist=document.querySelector("#artist");
let song2=document.querySelector(".song2");
let song3=document.querySelector(".song3");
let song4=document.querySelector(".song4");
let song5=document.querySelector(".song5");
let song6=document.querySelector(".song6");
let song7=document.querySelector(".song7");
let sidebar=document.querySelector(".sidebar");
let hamburger=document.querySelector(".hamburger");
let cross=document.querySelector(".cross");
let songs=[];
console.dir(audio);
console.log(volume.value);
song1.addEventListener("click",()=>{
    audio.src="song1.mp3";
    let path="song1.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card2img.jpeg";
    song_name.innerText="Mahiya Jinna Sohna";
    artist.innerText="Drshan raval";
});
song2.addEventListener("click",()=>{
    audio.src="song2.mp3";
    let path="song2.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card3img.jpeg";
    song_name.innerText="Mere  Pass tum ho";
    artist.innerText="Rahat fateh ali";
});
song3.addEventListener("click",()=>{
    audio.src="song3.mp3";
    let path="song3.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card4img.jpeg";
    song_name.innerText="Naa Ready";
    artist.innerText="Anirudh Ravichander";
});
song4.addEventListener("click",()=>{
    audio.src="song4.mp3";
    let path="song4.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card7.jpeg";
    song_name.innerText="Raataan Lambiyan";
    artist.innerText="Kamal Khan";
});
song5.addEventListener("click",()=>{
    audio.src="song5.mp3";
    let path="song5.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card8.jpeg";
    song_name.innerText="Dil Se Dil";
    artist.innerText="Vishal Chandrashekhar";
});
song6.addEventListener("click",()=>{
    audio.src="song6.mp3";
    let path="song6.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card9.jpeg";
    song_name.innerText="Ae Dil Hai Mushkil Title Track";
    artist.innerText="Pritam, Arijit Singh";
});
song7.addEventListener("click",()=>{
    audio.src="song7.mp3";
    let path="song7.mp3";
    songs.push(path);
    audio.setAttribute("autoplay",true);
    console.dir(audio);
    audio.volume=volume.value;
    runSong.src="card10.jpeg";
    song_name.innerText="Lavender Neramae";
    artist.innerText="Aditya RK";
});
hamburger.addEventListener("click" ,()=>{
    sidebar.classList.add("visible");
    cross.classList.add("visible");
});
cross.addEventListener("click",()=>{
    sidebar.classList.remove("visible");
})