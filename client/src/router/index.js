import Vue from 'vue'
import Router from 'vue-router'
import ChartingDemo from '@/components/ChartingDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChartingDemo',
      component: ChartingDemo
    }
  ]
})
