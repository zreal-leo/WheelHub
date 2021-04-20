import Vue from 'vue'
import Button from './component/button'
import Icon from './component/icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data: {
        isLoading: false
    }
})