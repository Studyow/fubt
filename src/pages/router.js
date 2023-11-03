// import Home01 from "./Home01";
import Header from '../template/header';
import Content01 from '../template/content';
import About from './About';
import News from './News';

const routes = [
    // { path: '/', component: <Home01 />},
    // { path: '/home-01', component: <Home01 />},
    { path: '/header', component: <Header />},
    { path: '/content01', component: <Content01 />},
    { path: '/about', component: <About/>},
    { path: '/news', component: <News/>}

]

export default routes;