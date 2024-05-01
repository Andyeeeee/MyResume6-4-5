export function LeftBar() {
  const LeftBarDiv = document.getElementById('LeftBar')
  if (LeftBarDiv) {
    LeftBarDiv.innerHTML =
      `

      <div id="left-bar">

        <div class="vh-100">100vh</div>
        <div class="vh-100">100vh</div>
        <div class="vh-100">100vh</div>
      </div>
    `

    // document.addEventListener("DOMContentLoaded", function () {
    //   var dropdowns = document.querySelectorAll('.sidebar ul li ul');
    //   dropdowns.forEach(function (dropdown) {
    //     dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    //   });
    // });
  }
}