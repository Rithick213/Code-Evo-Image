document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn'); 
    const filterItems = document.querySelectorAll('.filter-item'); 
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage'); 
    const closeBtn = document.querySelector('.close'); 

   
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter'); 
            filterItems.forEach(item => {
               
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });

    
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex'; 
            modalImg.src = item.querySelector('img').src; 
        });
    });

    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });
// Close modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});
