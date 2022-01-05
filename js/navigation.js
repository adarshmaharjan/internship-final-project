/* eslint-disable import/extensions */
// imports
import formResume from './template/form-resume.js'
import homePage from './template/home.js'
import aboutPage from './template/about.js'

import Form from './forms.js'

class Navigation {
  constructor(renderElement, navElement, pages) {
    this.renderElement = renderElement
    this.navElement = navElement
    this.pages = pages
  }

  createNav() {
    const keys = Object.keys(this.pages[0])
    const list = document.createElement('ul')
    const logo = document.querySelector('#logo')
    logo.addEventListener('click', () => {
      this.createHome()
    })
    const navContent = keys
      .map((key) => `<li><a href="#" class="nav-link" >${key}</a></li>`)
      .join('')
    list.innerHTML = navContent
    this.navElement.appendChild(list)
    const navLinks = list.querySelectorAll('.nav-link')
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        this.getPageContent(keys[index])
      })
    })
  }

  createHome() {
    const homeContent = homePage
    this.renderElement.innerHTML = homeContent
    const banner = document.querySelector('#banner')
    const resumeBtn = banner.querySelector('.resume-btn')
    resumeBtn.addEventListener('click', () => {
      this.getPageContent('resume')
    })
  }

  createAbout() {
    return this
  }

  getPageContent(page) {
    let pageContent = ''
    switch (page) {
      case 'home':
        this.createHome()
        break

      case 'resume':
        pageContent = formResume
        this.renderElement.innerHTML = pageContent

        // eslint-disable-next-line no-case-declarations
        const cvForm = document.querySelector('#cv-form')
        // eslint-disable-next-line no-case-declarations
        const cvTemplate = document.querySelector('#cv-template')
        new Form(cvForm, cvTemplate).init()

        break

      case 'about':
        pageContent = aboutPage
        this.renderElement.innerHTML = pageContent
        break

      default:
        this.createHome()
        break
    }
    // this.renderElement.innerHTML = pageContent
  }

  init() {
    this.getPageContent('home')
    this.createNav()
    return this
  }
}

export default Navigation
