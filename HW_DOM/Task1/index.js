let playList = [
   {  
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
   },
   
   {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
   },
   
   {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
   },
   
   {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
   },
   
   {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
   },
   
   {
   author: "AC/DC",
   song:"BACK IN BLACK"
   },
   
   {
   
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
   
   },
   
   {
   author: "METALLICA",
   song:"ENTER SANDMAN"
   } 
];

let playListTag = document.createElement('ol');
let wrapper = document.createElement('div');
let title = document.createElement('div');
let body = document.getElementsByTagName('body');
document.body.prepend(wrapper);
wrapper.prepend(playListTag);
wrapper.prepend(title);

title.insertAdjacentHTML('beforeend', `<h1 class="title"> PLAYLIST </h1>`);

for(let i = 0; i < playList.length; i++ ) {
   wrapper.classList.add('wrapper');
   playListTag.classList.add('playlist');
   let author = 'Author:'+' '+ playList[i].author;
   let song = 'Song:' + ' ' + playList[i].song;
   playListTag.insertAdjacentHTML('beforeend', `<li class="playlist__item"><p class="playlist__author">${author}</p><p class="playlist__song">${song}</p></li>`);
}

