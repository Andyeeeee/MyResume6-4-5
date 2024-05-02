function toggleAccordion(xx) {
  var content = xx.nextElementSibling;
  if (content.classList.contains('active')) {
    content.style.height = '0';
    content.classList.remove('active');
  } else {
    content.style.height = content.scrollHeight + 'px';
    content.classList.add('active');
  }
}
