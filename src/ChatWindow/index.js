// import ChatWindow from './ChatWindow'
// import vueCustomElement from 'vue-custom-element'

// Object.defineProperty(ChatWindow, 'install', {
// 	configurable: false,
// 	enumerable: false,
// 	value(Vue) {
// 		Vue.component('chat-window', ChatWindow)
// 	}
// })

// export default ChatWindow

import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import ChatWindow from './ChatWindow'

Vue.use(vueCustomElement)
Vue.customElement('chat-window', ChatWindow)
