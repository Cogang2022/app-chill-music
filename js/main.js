const getEle = (id) => {
    return document.getElementById(id);
};
const videoBg = document.querySelectorAll('.video');
const day = getEle('day');
const rainday = getEle('rainday');
const night = getEle('night');
const rainnight = getEle('rainnight');
const toggle_mode = document.querySelector('.toggle__mode');
const toggle__rainy = document.querySelector('.toggle__rainy');
const author__img = document.querySelector('.author__img');
const audio_play = document.querySelector('.audio_play');
const toggle__play = document.querySelector('.toggle__play');
const player = getEle('player');
const btn_prev = document.querySelector('.btn-prev');
const btn_next = document.querySelector('.btn-next');
console.log(player);

let isDay = true;
let isRain = false;
let isPlay = true;

const renderVideo = () => {
    videoBg.forEach(element => {
        element.classList.add('hide');
    });
    if (isDay && !isRain) {
        day.classList.remove('hide');
    } else if (isDay && isRain) {
        rainday.classList.remove('hide');
    } else if (!isDay && !isRain) {
        night.classList.remove('hide');
    } else {
        rainnight.classList.remove('hide');
    }
};

// chuyển video 
toggle_mode.onclick = () => {
    isDay = !isDay;
    console.log(isDay);
    toggle_mode.classList.toggle("night", !isDay)
    renderVideo();
};

toggle__rainy.onclick = () => {
    isRain = !isRain;
    toggle__rainy.classList.toggle("color_togerRain", isRain)
    renderVideo();

};

// phát nhạc


const chillMusic = [{
        author: "./img/chill1.jpg",
        music: "./music/chill1.mp3"
    },
    {
        author: "./img/chill2.jpg",
        music: "./music/chill2.mp3"
    },
    {
        author: "./img/focus1.png",
        music: "./music/chill3.mp3"
    },
    {
        author: "/img/duongvenha.jpg",
        music: "./music/duongvenha.mp3"
    }, {
        author: "/img/mua.jpg",
        music: "./music/congchuabongbong.mp3"
    },
    {
        author: "/img/xuankhongmau.jpg",
        music: "./music/xuankhongmau.mp3"
    }

];

const rederMusic = (index) => {
    const { author, music } = chillMusic[index];
    author__img.src = author;
    audio_play.src = music;
};


let index = 0;
toggle__play.onclick = () => {


    if (isPlay) {
        isPlay = !isPlay;
        toggle__play.src = './img/pause.svg';
        console.log(isPlay);
        player.addEventListener('ended', () => {
            index++;
            if (index === chillMusic.length) {
                index = 0;
            }
            rederMusic(index);
            player.play();

        })
        player.play();

    } else {
        isPlay = !isPlay;
        toggle__play.src = './img/play.svg';
        player.pause();
    }
};
let preIndex = index;
btn_prev.onclick = () => {

    if (preIndex == 0) {
        preIndex = chillMusic.length - 1;
    } else {
        preIndex--;
    }
    if (!isPlay) {
        rederMusic(preIndex);
        player.play();
        index = preIndex;
    }
};

btn_next.onclick = () => {
    if (preIndex == chillMusic.length - 1) {
        preIndex = 0;
    } else {
        preIndex++;
    }
    if (!isPlay) {
        rederMusic(preIndex);
        player.play();
        index = preIndex;
    }
}