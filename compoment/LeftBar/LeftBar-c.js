customElements.define('leftbar-compment', class extends HTMLElement {

  connectedCallback() {
    this.innerHTML =
      `
      <div id="left-bar">
      <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">關注</div>
        <div class="accordion-content">
<ul>
  <li><a href="">澎澎</a></li>
  <li><a href="">w</a></li>
  <li><a href="">f</a></li>
  <li><a href="">f</a></li>
  <li><a href="">f</a></li>
</ul>

        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">刷題</div>
        <div class="accordion-content">
        <ul>
        <li><a href="">W3h</a></li>
        <li><a href="">weHwlp</a></li>
        <li><a href="">f</a></li>
        <li><a href="">f</a></li>
        <li><a href="">f</a></li>
      </ul>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">開發中</div>
        <div class="accordion-content">
          <p>Content for section 3...</p>
        </div>
      </div>
    </div>
  
    <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">作品</div>
    <div class="accordion-content">
    <ul>
    <li><a href="">學習作品</a></li>
    <li><a href="">網路學習</a></li>
    <li><a href="">手做開發</a></li>
    <li><a href="">f</a></li>
    <li><a href="">f</a></li>
  </ul>
    </div>
  </div>
</div>

    </div>
    
    `
    // console.log("lb-c");
  }
})

