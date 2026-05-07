
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}


//clock
const clock = document.getElementById("clock");

function updateClock() {
    if (clock) {
        const now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);
updateClock();

// SCROLL PROGRESS BAR
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }
});

// REVEAL ANIMATION
const revealItems = document.querySelectorAll(".reveal");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    revealItems.forEach((item) => {

        const itemTop =
            item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

// TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        if (topBtn) {
            topBtn.style.display = "block";
        }

    } else {

        if (topBtn) {
            topBtn.style.display = "none";
        }
    }
});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// COUNTER ANIMATION
const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});

// SEARCH FILTER
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".cardx");

        cards.forEach((card) => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// BOOKING POPUP
const bookingForm = document.querySelector(".booking-form");
const popup = document.getElementById("popup");

if (bookingForm && popup) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        popup.classList.add("popup-show");

        setTimeout(() => {
            popup.classList.remove("popup-show");
        }, 3000);
    });
}

// TRIP COST ESTIMATION
const destination = document.getElementById("destination");
const budget = document.getElementById("budget");
const travelers = document.getElementById("travelers");
const result = document.getElementById("result");

function calculateTrip() {

    if (!destination || !budget || !travelers || !result) {
        return;
    }

    let basePrice = 100000;

    if (destination.value === "Paris") {
        basePrice = 120000;
    }

    if (destination.value === "Spain") {
        basePrice = 100000;
    }

    if (destination.value === "Maldives") {
        basePrice = 150000;
    }

    if (destination.value === "Bali") {
        basePrice = 110000;
    }

    if (destination.value === "Switzerland") {
        basePrice = 200000;
    }

    if (budget.value === "Low Budget") {
        basePrice *= 0.8;
    }

    if (budget.value === "Medium Budget") {
        basePrice *= 1;
    }

    if (budget.value === "High Budget") {
        basePrice *= 1.5;
    }

    const total =
        Math.floor(basePrice * travelers.value);

    result.innerHTML =
        `Estimated Trip Cost: ₹${total}`;
}

if (destination) {
    destination.addEventListener("change", calculateTrip);
}

if (budget) {
    budget.addEventListener("change", calculateTrip);
}

if (travelers) {
    travelers.addEventListener("input", calculateTrip);
}

calculateTrip();


