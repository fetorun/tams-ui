import { createApp } from 'vue'
import '@tams-ui/theme-chalk/src/dark/css-vars.scss'
import '@tams-ui/theme-chalk/src/notification.scss'
import '@tams-ui/theme-chalk/src/message-box.scss'
import '@tams-ui/theme-chalk/src/message.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)

  app.mount('#play')
})()
