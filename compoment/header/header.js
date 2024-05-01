export function Header() {
  const headerDiv = document.getElementById('Header')
  if (headerDiv) {
    headerDiv.innerHTML =
      `
      <header id="nav">

    <nav class="header position-fixed w-100">
      <ul class="d-flex">
        <li class="d-md-none"> <button class="open-btn">
            <span class="menu-icon">&#9776;</span>
          </button></li>
        <li><a href="">123</a></li>
        <li><a href="">123</a></li>
        <li><a href="">123</a></li>
        <li class="ms-auto"><a href="">123</a></li>
      </ul>
    </nav>

    <div class="d-md-none position-fixed w-100 sidebar" id="sidebar" style="background-color: chocolate;">
      <ul class="d-flex justify-content-around text-center">
        <li class=""><a href="">我的文件</a></li>
        <li class=""><a href="">我的相關經歷</a></li>
        <li class=""><a href="">我的興趣</a></li>


      </ul>

      <hr style="color: #3a1d1d;font-size: 20px;height: 20px;">

      <div id="LeftBar"></div>

    </div>


  </header>
      `
    $(document).ready(function () {
      $(".open-btn").click(function () {
        $("#sidebar").toggle();
        $("body").toggleClass("no-scroll");
      });
    });
  }
}