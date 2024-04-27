document.addEventListener("DOMContentLoaded", function () {
    const porscheImg = document.getElementById("porscheImg");
    const mercedesImg = document.getElementById("mercedesImg");
    const porscheH1 = document.getElementById("porscheh1");
    const porscheH4 = document.getElementById("porscheh4");
    const mercedesH1 = document.getElementById("mercedesh1");
    const mercedesH4 = document.getElementById("mercedesh4");
    const leftButton = document.querySelector(".arrow.left");
    const rightButton = document.querySelector(".arrow.right");
    const startPorscheButton = document.querySelector(".startporsche");
    const startMercedesButton = document.querySelector(".startmercedes");
    const porscheAudio = document.getElementById("porscheAudio");
    const mercedesAudio = document.getElementById("mercedesAudio");
    const porscheSpec = document.getElementById("porschespec");
    const mercedesSpec= document.getElementById("mercedesspec");
    const porscheVideo = document.getElementById("porschevideo");
    const mercedesVideo = document.getElementById("mercedesvideo");

    leftButton.addEventListener("click", function () {
        moveCar("left");
        toggleStartButton("left");
    });

    rightButton.addEventListener("click", function () {
        moveCar("right");
        toggleStartButton("right");
    });

    function moveCar(direction) {
        const step = 50; // Adjust this value to change the step of movement
        const porschePos = parseFloat(porscheImg.style.left) || 0;
        const mercedesPos = parseFloat(mercedesImg.style.left) || 0;
    
        // Reset audio playback
        porscheAudio.pause();
        mercedesAudio.pause();
    
        if (direction === "left") {
            // Move Porsche off the screen to the left
            porscheImg.style.left = "-150%";
            porscheH1.style.left = "-150%";
            porscheH4.style.left = "-150%";
            porscheSpec.style.bottom = "-25%";
            porscheVideo.style.bottom = "-25%";
            // Move Mercedes to the middle of the screen
            mercedesImg.style.left = "50%";
            mercedesH1.style.left = "28.6%";
            mercedesH4.style.left = "22%";
            mercedesSpec.style.bottom = "0";
            mercedesVideo.style.bottom = "0";
        } else if (direction === "right") {
            // Move Mercedes off the screen to the right
            mercedesImg.style.left = "150%";
            mercedesH1.style.left = "150%";
            mercedesH4.style.left = "150%";
            mercedesSpec.style.bottom = "-25%";
            mercedesVideo.style.bottom = "-25%";
            // Reset Porsche to its initial position
            setTimeout(() => {
                porscheImg.style.left = "50%";
                porscheH1.style.left = "25.6%";
                porscheH4.style.left = "22%";
                porscheSpec.style.bottom = "0"; 
                porscheVideo.style.bottom = "0";
            }, 10); // Delay to allow Mercedes to move out of the screen before resetting Porsche
        }
    }

    function toggleStartButton(direction) {
        if (direction === "left") {
            startPorscheButton.style.display = "none";
            startMercedesButton.style.display = "block";
        } else if (direction === "right") {
            startPorscheButton.style.display = "block";
            startMercedesButton.style.display = "none";
        }
    }
});
