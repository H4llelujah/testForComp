const checkbox = document.querySelector('.form_checkbox');
const fake = document.querySelector('.fake_span');
const svg = document.querySelector('svg');


checkbox.addEventListener('change', function() {
        svg.classList.toggle('hidden');
})

