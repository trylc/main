import { createMovieTags } from './list/index';
import { getMovies } from '@/api/movies';
import { createPagers } from './pager';


async function init(){
   const resp = await getMovies(1, 30);
   // 调用函数创建图片模块
   createMovieTags(resp.data.movieList);

   // 调用函数创建分页模块
   createPagers(1,30,resp.data.movieTotal);
}
init();

