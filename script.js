
        // Mantener la funcionalidad existente del modal
        const modal = document.getElementById('loginModal');
        const guestButton = document.getElementById('guestButton');
        const loginForm = document.getElementById('loginForm');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        guestButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Agregar scroll suave para los enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });