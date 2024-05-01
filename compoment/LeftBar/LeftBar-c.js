customElements.define('leftbar-compment', class extends HTMLElement {

  connectedCallback() {
    this.innerHTML =
      `
      <div id="left-bar">

      <div class="vh-100">100vh</div>
      <div class="vh-100">100vh</div>
      <div class="vh-100">100vh</div>
    </div>
    
    `
  }
})

