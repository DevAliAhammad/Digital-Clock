

            function updateClock() {

                    const now = new Date();

                    let hours = now.getHours();
                    let minutes = now.getMinutes();
                    let seconds = now.getSeconds();

                    // AM / PM
                    const ampm = hours >= 12 ? "PM" : "AM";

                    // Convert to 12-hour format
                    hours = hours % 12;

                    hours = hours === 0 ? 12 : hours;

                    // Add leading zero
                    hours = hours < 10 ? "0" + hours : hours;
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    // Display time
                    document.getElementById("clock").textContent =
                        `${hours}:${minutes}:${seconds}`;

                    // Display AM / PM
                    document.getElementById("ampm").textContent = ampm;


                    // Display date
                    const dateOptions = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    };

                    document.getElementById("date").textContent =
                        now.toLocaleDateString("en-US", dateOptions);
                }

                // Initial call
                updateClock();

                // Update every second
                setInterval(updateClock, 1000);
