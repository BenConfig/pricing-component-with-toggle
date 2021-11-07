const prices = document.querySelectorAll('.price');
const frequencyRadioBtns = document.querySelectorAll('[type="radio"]');
const frequencyLabels = document.querySelectorAll('.frequency-label');
const frequencyToggle = document.querySelector('.frequency-toggle');

const basic = {
    'annually': 199.99,
    'monthly': 19.99
}
const professional = {
    'annually': 249.99,
    'monthly': 24.99
}
const master = {
    'annually': 399.99,
    'monthly': 39.99
}

// Default frequency
let frequency = 'annually';

function updateCards() {
    prices[0].textContent = '$' + basic[frequency];
    prices[1].textContent = '$' + professional[frequency];
    prices[2].textContent = '$' + master[frequency];
}

frequencyToggle.addEventListener('click', function(e) {
    if (frequency === 'annually') {
        frequency = 'monthly';
        frequencyRadioBtns[1].checked = true;
        frequencyToggle.classList.add('move');
    }
    else {
        frequency = 'annually';
        frequencyRadioBtns[0].checked = true;
        frequencyToggle.classList.remove('move');
    }
    updateCards();
});

frequencyRadioBtns.forEach(item => {
    item.addEventListener('change', function(e) {
        if (frequency === 'annually') {
            frequency = 'monthly';
            frequencyToggle.classList.add('move');
        }
        else {
            frequency = 'annually';
            frequencyToggle.classList.remove('move');
        }
        updateCards();
    });
});