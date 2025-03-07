document.addEventListener('DOMContentLoaded', function() {
    // Hacer los admonitions clickeables si contienen enlaces
    const admonitions = document.querySelectorAll('.md-typeset .admonition, .md-typeset details');
    
    admonitions.forEach(function(admonition) {
      const link = admonition.querySelector('a');
      if (link) {
        // Añadir clase para estilos
        admonition.classList.add('clickable');
        
        // Crear un enlace que cubra todo el admonition
        const fullLink = document.createElement('a');
        fullLink.href = link.href;
        fullLink.classList.add('admonition-link');
        fullLink.setAttribute('aria-hidden', 'true');
        
        // Insertar el enlace
        admonition.style.position = 'relative';
        admonition.appendChild(fullLink);
        
        // Hacer que el admonition sea clickeable
        admonition.addEventListener('click', function(e) {
          if (e.target !== link) {
            window.location.href = link.href;
          }
        });
      }
    });
  });