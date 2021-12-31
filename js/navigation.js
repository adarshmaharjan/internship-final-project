class Navigation {
  constructor(renderElement, navElement, pages) {
    this.renderElement = renderElement
    this.navElement = navElement
    this.pages = pages
  }

  createNav() {
    const keys = Object.keys(this.pages[0])
    const list = document.createElement('ul')
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
    const homeContent = `
		<div class="wrapper">
		  <div id="banner">
			<h1>Welcome to Resume Creator</h1>
			<button class='btn resume-btn'>Create Resume</button>
		  </div>
		</div>
	  `
    this.renderElement.innerHTML = homeContent
    const banner = document.querySelector('#banner')
    const resumeBtn = banner.querySelector('.resume-btn')
    resumeBtn.addEventListener('click', () => {
      this.getPageContent('resume')
    })
  }

  getPageContent(page) {
    let pageContent = ''
    switch (page) {
      case 'home':
        this.createHome()
        break

      case 'resume':
        pageContent = this.pages[0].resume
        this.renderElement.innerHTML = pageContent

        break

      case 'about':
        pageContent = this.pages[0].about
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
