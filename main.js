/* eslint-disable import/extensions */

// import
import Navigation from './js/navigation.js'
import pages from './js/pages.js'
// execution
const navigationBar = document.querySelector('#navigation-bar')
const rootContent = document.querySelector('#root-content')

new Navigation(rootContent, navigationBar, pages).init()
