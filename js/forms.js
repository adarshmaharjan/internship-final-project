// Functions
class Form {
  constructor(form, template) {
    this.form = form
    this.template = template
  }

  eventListeners() {
    const weAddBtn = this.form.querySelector('#weAddButton')
    weAddBtn.addEventListener('click', () => {
      this.addNewWEField()
    })
    const aqAddBtn = this.form.querySelector('#aqAddButton')
    aqAddBtn.addEventListener('click', () => {
      this.addNewAQField()
    })
    const generateCVBtn = this.form.querySelector('#generate-cv-btn')
    generateCVBtn.addEventListener('click', () => {
      this.template.style.display = 'block'
      this.form.style.display = 'none'

      this.generateCV()
    })
    const printBtn = this.template.querySelector('#print-btn')
    printBtn.addEventListener('click', () => {
      this.printCV()
    })
  }

  addNewWEField() {
    // console.log('Adding new work experience field')
    const newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Enter Here')
    const weOb = this.form.querySelector('#we')
    const weAddButtonOb = this.form.querySelector('#weAddButton')
    weOb.insertBefore(newNode, weAddButtonOb)
  }

  addNewAQField() {
    // add new academic qualification field

    const newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', 'Enter Here')
    const aqOb = this.form.querySelector('#aq')
    const aqAddButtonOb = this.form.querySelector('#aqAddButton')

    aqOb.insertBefore(newNode, aqAddButtonOb)
  }

  generateCV() {
    // console.log('generate CV')

    // For  name

    const nameFieldValue = this.form.querySelector('#nameField').value
    const nameT1 = this.template.querySelector('#nameT1')
    const nameT2 = this.template.querySelector('#nameT2')
    // assign name in template
    nameT1.innerHTML = nameFieldValue
    nameT2.innerHTML = nameFieldValue

    // For contacts
    const contactFieldValue = this.form.querySelector('#contactField').value
    const contactT = this.template.querySelector('#contactT')
    contactT.textContent = contactFieldValue

    // address

    const addressFieldValue = this.form.querySelector('#addressField').value
    const addressT = this.template.querySelector('#addressT')
    // assign address value
    addressT.textContent = addressFieldValue

    // Important Links
    const fbFieldValue = this.form.querySelector('#fbField').value
    const instagramFieldValue = this.form.querySelector('#instagramField').value
    const linkedInFieldValue = this.form.querySelector('#linkedinField').value

    const fbT = this.template.querySelector('#fbT')
    const instaT = this.template.querySelector('#instaT')
    const linkedT = this.template.querySelector('#linkedT')

    fbT.textContent = fbFieldValue
    instaT.textContent = instagramFieldValue
    linkedT.textContent = linkedInFieldValue
    // Professional Info

    // Objective
    const objectiveFieldValue = this.form.querySelector('.objectiveField').value
    const objectiveT = this.template.querySelector('#objectiveT')
    objectiveT.textContent = objectiveFieldValue

    // Work Experience
    const workExperiencesContainer = this.form.querySelector('#we')
    const workExperiences =
      workExperiencesContainer.querySelectorAll('.weField')
    let workExperienceContent = ''

    workExperiences.forEach((item) => {
      workExperienceContent += `<li>${item.value}</li>`
    })

    // add work experience in the template
    const weT = this.template.querySelector('#weT')
    weT.innerHTML = workExperienceContent

    // Academic Qualification
    const academicContainer = this.form.querySelector('#aq')
    const academicExperiences = academicContainer.querySelectorAll('.aqField')

    let academicExperienceContent = ''

    academicExperiences.forEach((item) => {
      academicExperienceContent += `<li>${item.value}</li>`
    })

    // add work experience in the template
    const aqT = this.template.querySelector('#aqT')
    aqT.innerHTML = academicExperienceContent

    //  hide content and show cv
    const header = document.getElementsByTagName('header')[0]
    const cvFormSection = document.querySelector('#cv-form-section')
    const cvTemplateSection = document.querySelector('#cv-template-section')

    header.classList.add('hide')
    cvFormSection.classList.add('hide')
    cvTemplateSection.classList.remove('hide')
  }

  printCV() {
    const printBtn = this.template.querySelector('#print-btn')
    const originalContents = document.body.innerHTML

    printBtn.style.display = 'none'
    const printContent = this.template.outerHTML
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = originalContents
  }

  init() {
    this.template.style.display = 'none'
    this.eventListeners()
    return this
  }
}

export default Form
// DOM
// const cvForm = document.querySelector('#cv-form')
// const cvTemplate = document.querySelector('#cv-template')
// new Form(cvForm, cvTemplate).init()
