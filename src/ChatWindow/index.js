import ChatWindow from './ChatWindow'

Object.defineProperty(ChatWindow, 'install', {
	configurable: false,
	enumerable: false,
	value(Vue) {
		Vue.customElement('chat-window', ChatWindow);
		// Vue.component('chat-window', ChatWindow)
	}
})

export default ChatWindow
