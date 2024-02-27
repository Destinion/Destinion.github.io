// lunchSpecial.js
document.addEventListener('DOMContentLoaded', function () {
    const lunchSpecialDiv = document.getElementById('lunchSpecial');
    const closeBtn = document.getElementById('closeBtn');
    
    // Function to check if the current time is within the specified range
    function isLunchTime() {
        const now = new Date();
        const hours = now.getHours();
        const timezoneOffset = now.getTimezoneOffset() / 60; // Convert minutes to hours

        // Check if the current time is between 11 am and 8 pm GMT+1
        return hours >= 11 + timezoneOffset && hours <= 21 + timezoneOffset;
    }

    // Function to update lunch special visibility and timer
    function updateLunchSpecial() {
        if (isLunchTime()) {
            lunchSpecialDiv.style.display = 'block';
            setTimer();
        } else {
            lunchSpecialDiv.style.display = 'none';
        }
    }

    // Function to set the timer for the day
    function setTimer() {
        const endDate = new Date();
        endDate.setHours(20); // Set the end hour (8 pm GMT+1)
        endDate.setMinutes(0);
        endDate.setSeconds(0);

        const now = new Date();
        const timeDifference = endDate - now;

        // Display the time difference as a countdown timer
        displayTimer(timeDifference);

        // Update the timer every second
        const timerInterval = setInterval(function () {
            const timeDifference = endDate - new Date();
            displayTimer(timeDifference);

            // Check if the timer has reached 0
            if (timeDifference <= 0) {
                clearInterval(timerInterval);
                lunchSpecialDiv.style.display = 'none';
                // Show the lunch special again after 3 minutes
                setTimeout(function () {
                    updateLunchSpecial();
                }, 180000); // 3 minutes in milliseconds
            }
        }, 1000);
    }

    // Function to display the timer
    function displayTimer(timeDifference) {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('timer').innerText = `Zbývá: ${hours}h ${minutes}m`;
    }

    closeBtn.addEventListener('click', function () {
        lunchSpecialDiv.style.display = 'none';
        setTimeout(function () {
            updateLunchSpecial();
        }, 180000);
    });

    updateLunchSpecial();
    setInterval(updateLunchSpecial, 60000);
});
