import Vue from 'vue';
import VueWait from 'vue-wait';

Vue.use(VueWait); // add VueLoading as Vue plugin

export default ({app}) => {
    // inject options from module
    const pluginOptions = [{"useVuex":true}][0]
    app.wait = new VueWait(pluginOptions)
}
