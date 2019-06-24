import Banner from './Banner.vue';

Banner.install = (Vue) => {
    Vue.component(Banner.name, Banner);
}

export default Banner;