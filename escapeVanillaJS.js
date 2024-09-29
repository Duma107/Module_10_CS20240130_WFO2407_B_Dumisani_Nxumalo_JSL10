document.addEventListener("DOMContentLoaded", () => {
    // Room 1: Fetching the most recent book
    const room1Button = document.getElementById("room1Button");
    const room1Result = document.getElementById("room1Result");

    if (room1Button && room1Result) {
        room1Button.addEventListener("click", () => {
            console.log("Room 1 button clicked");
            fetch('books.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(books => {
                    console.log("Books fetched:", books);
                    if (books.length === 0) {
                        room1Result.textContent = "No books available.";
                        return;
                    }
                    const mostRecentBook = findMostRecentBook(books);
                    room1Result.textContent = `The key to the next room is: ${mostRecentBook.title}`;
                })
                .catch(error => {
                    console.error('Error fetching books:', error);
                    room1Result.textContent = "Failed to retrieve the key.";
                });
        });
    } else {
        console.error("Room 1 elements not found in the DOM.");
    }

    // Room 2: Finding common JavaScript and React concepts
    const solveRoom2Button = document.getElementById("solveRoom2");
    const room2Result = document.getElementById("room2Result");

    if (solveRoom2Button && room2Result) {
        solveRoom2Button.addEventListener("click", () => {
            console.log("Room 2 button clicked");
            const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
            const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);

            const commonConcepts = findIntersection(jsConcepts, reactConcepts);
            console.log("Common concepts:", commonConcepts);
            if (commonConcepts.size === 0) {
                room2Result.textContent = "No common concepts found.";
            } else {
                room2Result.textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
            }
        });
    } else {
        console.error("Room 2 elements not found in the DOM.");
    }

    // Room 3: Navigating the labyrinth
    const solveRoom3Button = document.getElementById("solveRoom3");
    const room3Result = document.getElementById("room3Result");

    if (solveRoom3Button && room3Result) {
        solveRoom3Button.addEventListener("click", async () => {
            console.log("Room 3 button clicked");
            try {
                const response = await fetch('directions.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const directions = await response.json();
                console.log("Directions fetched:", directions);
                const message = await navigateLabyrinth(directions);
                room3Result.innerHTML = message;
            } catch (error) {
                console.error('Error navigating the labyrinth:', error);
                room3Result.textContent = "Failed to navigate the labyrinth.";
            }
        });
    } else {
        console.error("Room 3 elements not found in the DOM.");
    }
});

/**
 * Finds the most recent book based on the publication date.
 * @param {Array} books - Array of book objects.
 * @returns {Object} - The most recent book.
 */
function findMostRecentBook(books) {
    return books.reduce((latest, current) => {
        return new Date(current.published) > new Date(latest.published) ? current : latest;
    }, books[0]);
}

/**
 * Finds the intersection of two sets.
 * @param {Set} setA 
 * @param {Set} setB 
 * @returns {Set} - The intersection of setA and setB.
 */
function findIntersection(setA, setB) {
    return new Set([...setA].filter(element => setB.has(element)));
}

/**
 * Simulates navigating through a labyrinth using provided directions.
 * @param {Array} directions - Array of direction objects.
 * @returns {Promise<string>} - Success message upon completing navigation.
 */
async function navigateLabyrinth(directions) {
    try {
        // Log directions to verify data
        console.log("Navigating with directions:", directions.map(dir => dir.step));

        // Simulate asynchronous operations with a delay
        for (const direction of directions) {
            console.log(direction.step);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay between steps
        }

        return '🎉 You have successfully navigated the labyrinth and entered the React world!';
    } catch (error) {
        console.error('Error during labyrinth navigation:', error);
        throw error;
    }
}