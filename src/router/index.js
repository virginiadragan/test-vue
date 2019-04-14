import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/Input'
import Output from '@/components/Output'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/output',
      name: 'Output',
      component: Output
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
