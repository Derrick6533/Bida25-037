document.addEventListener('DOMContentLoaded', () => {
    
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            
            navMenu.classList.toggle('open');
            
            navToggle.classList.toggle('active');
        });
    }

    
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.closest('.menu-section, .gallery-section');
            if (!container) return;

            
            const targetId = button.getAttribute('data-target');
            const targetPane = container.querySelector(`#${targetId}`);

            if (targetPane) {
                
                container.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                container.querySelectorAll('.menu-pane, .gallery-pane').forEach(pane => pane.classList.remove('active'));

                
                button.classList.add('active');
                targetPane.classList.add('active');
            }
        });
    });

});