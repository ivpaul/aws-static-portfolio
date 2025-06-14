function highlightTemporary(element) {
  element.classList.add('tapped');
  setTimeout(() => {
    element.classList.remove('tapped');
  }, 2000); 
}