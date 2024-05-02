function toggleAccordion(xx) {
  let content = xx.nextElementSibling;
  if (content.style.height === '0px' || content.style.height === '') {
    content.style.height = content.scrollHeight + 'px';
  } else {
    content.style.height = '0px';
  }
}

console.log("test");