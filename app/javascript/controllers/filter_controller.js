import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "noun",
    "verb",
    "adjective"
  ]

  connect() {
    const params = new URLSearchParams(window.location.search)
    const type = params.get('filterrific[filter_type]') || ''

    if (this.nounTarget) {
      switch(type) {
        case 'Verb':
          this.showVerb()
          break
        case 'Adjective':
          this.showAdjective()
          break
        case 'Noun':
          this.showNoun()
          break
        default:
          this.hideAll()
          break
      }

      document.getElementById(`filterrific_filter_type_${type.toLowerCase()}`).checked = true
    }
  }

  hideAll() {
    this.nounTarget.classList.toggle("hidden", true)
    this.verbTarget.classList.toggle("hidden", true)
    this.adjectiveTarget.classList.toggle("hidden", true)
  }

  showNoun() {
    this.nounTarget.classList.toggle("hidden", false)
    this.verbTarget.classList.toggle("hidden", true)
    this.adjectiveTarget.classList.toggle("hidden", true)
  }

  showVerb() {
    this.nounTarget.classList.toggle("hidden", true)
    this.verbTarget.classList.toggle("hidden", false)
    this.adjectiveTarget.classList.toggle("hidden", true)
  }

  showAdjective() {
    this.nounTarget.classList.toggle("hidden", true)
    this.verbTarget.classList.toggle("hidden", true)
    this.adjectiveTarget.classList.toggle("hidden", false)
  }

  showFunctionWord() {
    this.hideAll()
  }
}
