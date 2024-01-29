function toggleAccordion(sectionNumber) {
    var accordionContent = document.querySelectorAll('.accordion-content');
    accordionContent.forEach(function(content, index) {
      if (index + 1 === sectionNumber) {
        content.classList.toggle('active');
      } else {
        content.classList.remove('active');
      }
    });
  }
  