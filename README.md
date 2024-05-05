# Message Threads Viewer

## Project Overview

The application dynamically loads message thread data and renders them in and expandable format. The application features two main visual states for the message threads: collapsed and expanded.

### Features

- **Collapsed State**: Threads with two or more messages appear collapsed, with messages stacked behind each other, each indented and positioned above and to the left of the previous one. A colored bar with the number of messages appears in the upper right corner.
- **Expanded State**: On a single click, all messages within a thread are expanded to be fully visible, displayed one below the other. This expansion is irreversible.
- **Message Scoring**: Each message includes a score between 1 and 10. Messages with a score of 5 or less are marked with a low rating, affecting the color of the title and message count bar. Messages with a score of 6 or higher are considered high rating and are highlighted accordingly.

## Technologies Used

- **Node.js**
- **React (v18)**
- **Sass**
- **Vite (v5.2.0)**
- **JSON Server**: Used to mock the backend for loading thread data.

## Setup and Installation

1. **Clone the Repository**

   ```
   https://github.com/kristiyan675/threads.git

   ```

2. Navigate to folder

   ```
   cd your-project-repo

   ```

3. Install dependencies

   ```
   npm install
   ```

4. Make sure you don't have any services running on port 3000 and run the json-server

   ```
   npm run server

   ```

5. Run the app in a new terminal

   ```
   npm run dev
   ```

## Future Improvements

- Create a different component for the content of the messages
- Improve css styling for edge case where the thread question is too long
- Move the fetch data logic to a different component
