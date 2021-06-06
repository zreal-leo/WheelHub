const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/component/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('props 接受 position', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="top" trigger="click">
            <template slot="content">这是 popover 内容</template>
            <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({el: div})
        vm.$el.querySelector('button').click()
        setTimeout(() => {
            const popoverElement = document.body.querySelector('.content-wrapper')
            expect(popoverElement.classList.contains('position-top')).to.be.true
            done()
        }, 200)
    })
})