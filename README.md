# Promise Rejection Dashboard

## Overview

**Promise Rejection Dashboard** is a JavaScript-based interactive puzzle project that challenges users to solve three distinct problems across different "rooms" by fetching data and handling promises. The project provides an engaging way to explore common JavaScript and React concepts while emphasizing promise handling and error management in asynchronous programming.

### Room 1: Fetch the Most Recent Book
In this room, users are tasked with fetching book data from a JSON file and finding the most recently published book. The title of the book serves as a key to the next room. Users practice making network requests and handling promise rejections when the data retrieval fails.

### Room 2: JavaScript & React Common Concepts
This room asks users to find shared programming concepts between JavaScript and React. The solution involves using set operations to find common elements between two sets. The output of the common concepts serves as the key to the next room.

### Room 3: Navigating the Labyrinth
In the final room, users must navigate a virtual labyrinth by following directions fetched from a JSON file. The labyrinth simulation involves asynchronous steps with delays between each, allowing users to practice managing promises, delays, and the overall flow of data retrieval.

---

## Features

1. **Room 1 - Fetch the Most Recent Book:**
   - Fetches a list of books from a `books.json` file.
   - Displays the most recent book based on the publication date.
   - Handles promise rejection for failed data retrieval.

2. **Room 2 - Common Concepts Finder:**
   - Uses sets to find shared concepts between JavaScript and React.
   - Displays the common concepts as the key to proceed to the next room.

3. **Room 3 - Labyrinth Navigation:**
   - Fetches a set of directions from a `directions.json` file.
   - Navigates through a virtual labyrinth step-by-step, simulating delays.
   - Handles promise rejections in case of errors during the navigation process.

---

## Project Setup

### Prerequisites

- A modern web browser that supports JavaScript and the Fetch API.
- A local server setup to serve static files (e.g., `Live Server` in VSCode or any HTTP server).
- `books.json` and `directions.json` files placed in the project directory.

### Running the Project

1. Download or clone the project files to your local machine.

2. Ensure you have the following structure in your project directory:
   ```
   /project-directory
   ├── index.html          # Main HTML file for the dashboard
   ├── app.js              # JavaScript file containing the room logic
   ├── books.json          # JSON file for book data in Room 1
   ├── directions.json     # JSON file for labyrinth directions in Room 3
   └── style.css           # Optional CSS file for custom styles
   ```

3. Start your local server and open the `index.html` file in a browser.

4. Use the browser's developer tools (Console) to see debug logs and any promise rejection messages.

---

## Error Handling and Debugging

This project places a strong emphasis on error handling and debugging. It features structured logging to track interactions and promise rejections at every step:

- **Room 1**: Catches errors if the `books.json` file cannot be fetched or parsed and provides a fallback message in the DOM.
- **Room 2**: Logs any issues encountered when processing set operations for JavaScript and React concepts.
- **Room 3**: Handles errors in the asynchronous labyrinth navigation, displaying helpful feedback if directions cannot be fetched or processed correctly.

---

## JSON Structure

### `books.json` Example (for Room 1):
```json
[
    {
        "title": "JavaScript: The Good Parts",
        "published": "2008-05-15"
    },
    {
        "title": "Eloquent JavaScript",
        "published": "2018-12-04"
    }
]
```

### `directions.json` Example (for Room 3):
```json
[
    { "step": "Turn left" },
    { "step": "Go straight" },
    { "step": "Turn right" },
    { "step": "Climb the stairs" }
]
```

---

## Key Concepts Explored

- **Promise Handling**: The project demonstrates how to use promises in real-world scenarios, from fetching JSON data to handling multiple asynchronous tasks.
- **Error Handling**: Focuses on proper error handling for network requests, ensuring that promise rejections are caught and handled gracefully in the UI.
- **Set Operations**: Demonstrates how to perform basic set operations in JavaScript, finding intersections between two sets.
- **Asynchronous Control Flow**: Teaches users how to manage asynchronous tasks with time delays, simulating real-world processes where tasks don’t resolve instantly.

---

## Enhancements and Future Development

- Add more rooms with additional puzzles that explore different aspects of JavaScript and React, such as event-driven programming or state management.
- Improve UI/UX by introducing animations and more detailed success/failure feedback.
- Introduce levels of difficulty by adding more complex labyrinth navigation or introducing new conditions in the concept-finding task.
- Implement caching mechanisms to optimize the fetching process and reduce load times.

---

## License

This project is open-source and is distributed under the MIT License. Contributions are welcome for improving the puzzle and adding more interactive elements.

---

**Enjoy solving the Promise Rejection Dashboard puzzles!**