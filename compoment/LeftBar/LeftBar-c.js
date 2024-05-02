customElements.define('leftbar-compment', class extends HTMLElement {

  connectedCallback() {
    this.innerHTML =
      `
      <div id="left-bar">
      <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">Section 1</div>
        <div class="accordion-content">
          <p>Content for section 1...</p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">Section 2</div>
        <div class="accordion-content">
          <p>Content for section 2...</p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">Section 3</div>
        <div class="accordion-content">
          <p>Content for section 3...</p>
        </div>
      </div>
    </div>
  
    </div>
    
    `

  }
})

