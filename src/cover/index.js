import $ from 'jquery';
import styles from './index.module.less';
import videoUrl from '@/assets/movie.mp4';
import audioUrl from '@/assets/music.mp3';

function init() {
    const container = $('<div>').addClass(styles.container).appendTo('#app');
    const vdo = $('<video>')
        .prop('src', videoUrl)
        .prop('autoplay', true)
        .prop('loop', true)
        .addClass(styles.video)
        .appendTo(container);
    const ado = $('<audio>')
        .prop('src', audioUrl)
        .prop('autoplay', true)
        .prop('loop', true)
        .appendTo(container);  

    // 添加豆瓣电影文字
    $('<h1>').text('豆瓣电影').addClass(styles.title).appendTo(container);
        
    // 超出视口高度视频、音频暂停播放
    $(window).on('scroll', function(){
        const scrollTop = document.documentElement.scrollTop; // 当前滚动高度
        const vHeight = document.documentElement.clientHeight; // 视口高度
        if(scrollTop >= vHeight){
            vdo[0].pause();
            ado[0].pause();
        }else{
            vdo[0].play();
            ado[0].play();
        }
    })
}
init();