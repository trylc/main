import './cover';   // 静态导入，表示初始就必须要依赖 cover 模块
import './global.less';
import ('./movie'); // 动态导入，表示运行到此代码时才会去远程加载 movie 模块
