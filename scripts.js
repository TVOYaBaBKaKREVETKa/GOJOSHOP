document.querySelectorAll('nav ul li').forEach(li => {
  if (li.querySelector('ul')) {
    li.addEventListener('mouseover', () => {
      li.querySelector('ul').style.display = 'block';
    });
    li.addEventListener('mouseout', () => {
      li.querySelector('ul').style.display = 'none';
    });
  }
});