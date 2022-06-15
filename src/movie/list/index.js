import $ from 'jquery';
import styles from './index.module.less';

/**
 * 初始化函数，负责创建容器
 */
let container;
function init(){
   container = $('<div>').addClass(styles.container).appendTo('#app');
}

init();

/**
 * 根据传入的电影数组，创建元素，填充到容器中
 * @params movies 电影数组
 */
export function createMovieTags(movies){
  const items = movies.map(m=>{
    return `<div><a href = '${m.url}' target='_blank'><img src = '${m.cover}'></a>
    <a href ='${m.url}' target='_blank'><p class = ${styles.title}>${m.title}</p></a>
    <p class = ${styles.rate}>评分 ${m.rate}</p>
    </div>`
  }).join('');

  // 加入到容器中
  container[0].innerHTML = items;
}