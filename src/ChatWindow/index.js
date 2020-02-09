import ChatWindow from './ChatWindow'
import vueCustomElement from 'vue-custom-element'

Object.defineProperty(ChatWindow, 'install', {
	configurable: false,
	enumerable: false,
	value(Vue) {
		// Vue.customElement('chat-window', ChatWindow);
		// Vue.component('chat-window', ChatWindow)

		Vue.use(vueCustomElement)
		Vue.customElement('chat-window', ChatWindow)
	}
})

export default ChatWindow
