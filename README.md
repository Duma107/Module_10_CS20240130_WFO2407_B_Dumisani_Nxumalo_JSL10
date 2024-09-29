# Escaping Vanilla JS: Abstraction Challenge

## Overview

**Escaping Vanilla JS: Abstraction Challenge** is an interactive puzzle project that challenges users to solve three distinct problems across different "rooms" by leveraging JavaScript's asynchronous capabilities. The project is designed to explore concepts like promise handling, set operations, and asynchronous control flow, with an emphasis on handling errors and abstracting complexity in JavaScript.

### Room 1: Fetch the Most Recent Book
In this room, users must fetch book data from a JSON file and determine which book was published most recently. The title of the most recent book unlocks the key to the next room. Users practice making network requests, handling promises, and managing errors if the fetch operation fails.

### Room 2: JavaScript & React Common Concepts
This room focuses on abstracting shared programming concepts between JavaScript and React. The user needs to find the intersection of concepts between these two sets, which serves as the code to unlock the next room. This room emphasizes the use of set operations and abstraction in programming.

### Room 3: Navigating the Labyrinth
In the final room, users are tasked with navigating through a virtual labyrinth by following step-by-step directions fetched from a JSON file. This room focuses on asynchronous control flow, simulating delays between each step to mimic real-world complexity in navigation, while also handling errors if the fetch fails.

---

## Features

1. **Room 1 - Fetch the Most Recent Book:**
   - Fetches a list of books from a `books.json` file.
   - Displays the title of the most recent book based on the publication date.
   - Gracefully handles promise rejections in case of network errors.

2. **Room 2 - JavaScript & React Common Concepts Finder:**
   - Compares sets of JavaScript and React concepts.
   - Uses set operations to find the intersection between the two.
   - Displays the common concepts as the key to the next room.

3. **Room 3 - Labyrinth Navigation:**
   - Fetches navigation directions from a `directions.json` file.
   - Simulates the user navigating the labyrinth with a time delay between steps.
   - Handles promise rejections and displays appropriate error messages.

---

## Project Setup

### Prerequisites

- A modern web browser with JavaScript and Fetch API support.
- A local server for serving static files (e.g., `Live Server` in VSCode or any HTTP server).
- JSON files (`books.json` and `directions.json`) placed in the project directory.

### Running the Project

1. Clone or download the project files to your local machine.

2. Ensure you have the following structure:
   ```
   /project-directory
   ├── index.html          # Main HTML file for the challenge
   ├── app.js              # JavaScript file for room logic
   ├── books.json          # JSON file with book data for Room 1
   ├── directions.json     # JSON file with directions for Room 3
   └── style.css           # Optional CSS for styling
   ```

3. Run the project using a local server and open `index.html` in a web browser.

4. Use developer tools (console) to view logs and check for promise rejection handling during the game.

---

## Error Handling and Debugging

This project emphasizes the importance of error handling and debugging asynchronous code:

- **Room 1**: Displays a user-friendly error message if the `books.json` file cannot be fetched or parsed.
- **Room 2**: Logs errors if set operations fail or if any JavaScript/React concept comparison encounters issues.
- **Room 3**: Handles errors during labyrinth navigation, providing helpful feedback if fetching directions fails or errors occur during navigation.

---

## JSON Structure

### `books.json` (Room 1 Example):
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

### `directions.json` (Room 3 Example):
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

- **Promise Handling**: Users learn how to manage promises, resolve asynchronous operations, and handle potential rejections in JavaScript.
- **Set Operations**: Room 2 demonstrates the use of sets in JavaScript to find common elements, abstracting concepts for solving puzzles.
- **Error Handling**: Each room features structured error handling to ensure smooth gameplay, with clear feedback if issues occur.
- **Asynchronous Flow Control**: Room 3 introduces delayed execution for navigating the labyrinth, mimicking real-world asynchronous programming scenarios.

---

## Future Enhancements

- Add additional rooms to cover more JavaScript concepts like event-driven programming, state management, or advanced abstraction patterns.
- Improve the UI/UX by adding visual effects or animations to enhance the user experience.
- Introduce difficulty levels or time limits for solving puzzles to add a gamified element to the project.

---

## License

This project is open-source and distributed under the MIT License. Contributions to improve the puzzles, add new features, or enhance gameplay are welcome.

---

**Enjoy solving the puzzles in Escaping Vanilla JS: Abstraction Challenge!**
