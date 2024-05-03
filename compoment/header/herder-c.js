customElements.define('header-compment', class extends HTMLElement {

  connectedCallback() {
    this.innerHTML =
      `

<style>
.no-scroll {
  overflow: hidden;
}

.close-icon{
  display:none
}

</style>

<header id="nav">

<nav class="header position-fixed w-100" style="padding:0 20px;">
  <ul class="d-flex h-100" style="align-items: center;">
  <li class="d-lg-none"> <button class="open-btn">
  <span class="menu-icon" style="color:black">&#x2261;</span>
  <span class="close-icon ">&#10006;</span>
    </button></li>
    <li><a href="/index.html">首頁</a></li>
    <li class="d-none d-lg-block"><a href="page/doc/docAboutMe.html">文件</a></li>
    <li class="d-none d-lg-block"><a href="">經歷</a></li>
    <li class="d-none d-lg-block"><a href="">興趣</a></li>
    <li class="ms-auto"><button>主題開關</button></li>
    <li><a href="">github</a></li>
  </ul>
</nav>

<div class="d-lg-none position-fixed w-100 sidebar" id="sidebar" style="background-color: chocolate;">
  <ul class="d-flex justify-content-around text-center">
    <li class=""><a href="page/doc/docAboutMe.html">文件</a></li>
    <li class=""><a href="">經歷</a></li>
    <li class=""><a href="">興趣</a></li>


  </ul>

        <hr style="color: #3a1d1d;font-size: 20px;height: 5px;">
  
        <leftbar-compment style="width: 100%;"></leftbar-compment>
  
      </div>
  
  
    </header>
  
    
    
   `
    $(document).ready(function () {
      $(".open-btn").click(function () {
        $("#sidebar").toggle();
        $("body").toggleClass("no-scroll");
        $(".menu-icon, .close-icon").toggle();
      });

      $(window).resize(function () {
        if ($(window).width() >= 992) {
          $("#sidebar").hide();
          $("body").removeClass("no-scroll");
          $(".menu-icon").show();
          $(".close-icon").hide();
        }
      });
    });



  }
})



