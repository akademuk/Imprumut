// Модальное окно cookie 
const cookieNotice = document.getElementById("cookie-notice");
const acceptCookiesButton = document.getElementById("accept-cookies");

acceptCookiesButton.addEventListener("click", () => {
    cookieNotice.classList.add("hidden");
});


// Модальное окно при успешной отправки формы
document.addEventListener("DOMContentLoaded", function () {
    const formBtn = document.getElementById("formBtn");
    const successMessage = document.getElementById("successMessage");
    const modal = document.getElementById("calculatorModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (formBtn && successMessage && modal && closeModalBtn) {
        formBtn.addEventListener("click", function () {
            showSuccessModal();
        });
        closeModalBtn.addEventListener("click", hideModal);
    }

    function showSuccessModal() {
        if (modal && successMessage) {
            successMessage.style.display = "flex";
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    function hideModal() {
        if (modal && successMessage) {
            modal.style.display = "none";
            successMessage.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});


// Модальное окно, вход в аккаунт
document.getElementById('Intrare').addEventListener('click', function () {
    document.getElementById('sign').style.display = 'flex';
    document.body.style.overflow = "hidden";
});
function closeSignBtn() {
    document.getElementById('sign').style.display = 'none';
    document.body.style.overflow = "auto";
}
function showPassword(event) {
    event.preventDefault();
    let passwordField = document.getElementById('password');
    let currentType = passwordField.type;

    passwordField.type = 'text';

    setTimeout(function () {
        passwordField.type = currentType;
    }, 1000);
}

// Модальное окно, блокировка номера
document.getElementById('blockNumberOpen').addEventListener('click', function () {
    document.getElementById('blockNumber').style.display = 'flex';
    document.body.style.overflow = "hidden";
});
function closeBlockBtn() {
    document.getElementById('blockNumber').style.display = 'none';
    document.body.style.overflow = "auto";
}

// Range
function updateSummary() {
    var rangeInput = document.getElementById('range');
    var rangeValue = parseInt(rangeInput.value);
    var sumElement = document.getElementById('sum');
    sumElement.textContent = rangeValue + ' zi';

    var rangePercent = ((rangeValue - parseInt(rangeInput.min)) / (parseInt(rangeInput.max) - parseInt(rangeInput.min))) * 100;
    rangePercent = Math.round(rangePercent);
    rangeInput.style.setProperty('--rangePercent', rangePercent + '%');
}
const slider = document.getElementById("range");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #5251CC 0%, #5251CC ${(value - min) / (max - min) * 100}%, #BCCAFC ${(value - min) / (max - min) * 100}%, #BCCAFC 100%)`;

slider.oninput = function () {
    this.style.background = `linear-gradient(to right, #5251CC 0%, #5251CC ${(this.value - this.min) / (this.max - this.min) * 100}%, #BCCAFC ${(this.value - this.min) / (this.max - this.min) * 100}%, #BCCAFC 100%)`;
    updateSummary(); // Add this line to update the summary when the slider is moved
};

function changeRange(delta) {
    var rangeInput = document.getElementById('range');
    var newValue = parseInt(rangeInput.value) + delta;
    newValue = Math.min(Math.max(newValue, parseInt(rangeInput.min)), parseInt(rangeInput.max));
    rangeInput.value = newValue;
    rangeInput.style.background = `linear-gradient(to right, #5251CC 0%, #5251CC ${(newValue - parseInt(rangeInput.min)) / (parseInt(rangeInput.max) - parseInt(rangeInput.min)) * 100}%, #BCCAFC ${(newValue - parseInt(rangeInput.min)) / (parseInt(rangeInput.max) - parseInt(rangeInput.min)) * 100}%, #BCCAFC 100%)`;
    updateSummary();
}



// Плавный переход к якорю 
jQuery(document).ready(function ($) {
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();
		var target = $(this.hash);
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
	});
});