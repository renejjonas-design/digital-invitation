const openButton =
    document.getElementById("openButton");

const invitation =
    document.getElementById("invitation");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

// OPEN INVITATION

openButton.addEventListener("click", function () {

    invitation.style.display = "block";

    invitation.scrollIntoView({
        behavior: "smooth"
    });


    backgroundMusic.play()
        .catch(function () {
            console.log(
                "Music could not start automatically."
            );
        });

});

// COUNTDOWN

const baptismDate =
    new Date("October 10, 2026 09:00:00").getTime();

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCountdown() {

    const now = new Date().getTime();

    const difference = baptismDate - now;


    if (difference <= 0) {

        daysElement.textContent = "0";
        hoursElement.textContent = "0";
        minutesElement.textContent = "0";
        secondsElement.textContent = "0";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    daysElement.textContent = days;

    hoursElement.textContent = hours;

    minutesElement.textContent = minutes;

    secondsElement.textContent = seconds;

}


updateCountdown();

setInterval(updateCountdown, 1000);

// GOOGLE MAPS

const mapButton = document.getElementById("mapButton");

mapButton.addEventListener("click", function () {

    window.open(
        "https://maps.app.goo.gl/ieFfSVC76DtwhWZ97",
        "_blank"
    );

});

// IMAGE GALLERY

const galleryItems =
    document.querySelectorAll(".gallery-item");

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closeViewer =
    document.getElementById("closeViewer");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image =
            item.querySelector("img");

        viewerImage.src = image.src;

        imageViewer.style.display = "flex";

    });

});


closeViewer.addEventListener("click", function () {

    imageViewer.style.display = "none";

});


imageViewer.addEventListener("click", function (event) {

    if (event.target === imageViewer) {

        imageViewer.style.display = "none";

    }

});


/* =================================
   RSVP FORM
   ================================= */

const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const guestName =
            document.getElementById("guestName").value.trim();

        const attendance =
            document.getElementById("attendance").value;

        if (!guestName || !attendance) {
            rsvpMessage.textContent =
                "Please complete the required fields.";

            return;
        }

        if (attendance === "yes") {

            rsvpMessage.textContent =
                `Thank you, ${guestName}! We look forward to celebrating with you. 💛`;

        } else {

            rsvpMessage.textContent =
                `Thank you for letting us know, ${guestName}. 💛`;
        }

        rsvpForm.reset();

    });
}
// MUSIC CONTROL

musicButton.addEventListener("click", function () {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicButton.textContent = "♫";

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "🔇";

    }

});


// SCROLL REVEAL

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});

/* =================================
   MEMORIES QR CODE
   ================================= */

const memoryDriveLink =
    "https://drive.google.com/drive/folders/12uXxI4Ho58gLZCOiJ0RwXAS0LWuIBYT3";

const memoryQR = document.getElementById("memoryQR");

if (memoryQR) {
    const qrScript = document.createElement("script");

    qrScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";

    qrScript.onload = function () {
        new QRCode(memoryQR, {
            text: memoryDriveLink,
            width: 180,
            height: 180,
            colorDark: "#4a3b24",
            colorLight: "#fffaf0",
            correctLevel: QRCode.CorrectLevel.H
        });
    };

    document.head.appendChild(qrScript);
}