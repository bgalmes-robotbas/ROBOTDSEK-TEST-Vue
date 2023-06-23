import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MacBookPro162 from './views/mac-book-pro162'
import NavigationDrawer from './views/navigation-drawer'
import MacBookPro1621 from './views/mac-book-pro1621'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'MacBookPro162',
      path: '/',
      component: MacBookPro162,
    },
    {
      name: 'NavigationDrawer',
      path: '/navigation-drawer',
      component: NavigationDrawer,
    },
    {
      name: 'MacBookPro1621',
      path: '/mac-book-pro1621',
      component: MacBookPro1621,
    },
  ],
})
