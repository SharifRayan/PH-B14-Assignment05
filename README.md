# Dev Stack
Dev Stack is a small React based project for exploring diffrent technologies and building a personal technology stack. user can see technoology deatils, ratings, difficulty levels etc.

# Technologies
1. React.js
2. Vite
3. Tailwind CSS
4. React-Toastify
5. JavaScript (ES6+)
6. JSON

# Features
 1. Explore Technologies
Users can browse different development technologies and see their category, description, difficulty level, rating, and badge.
 2. Build Your Own Stack
Users can add technologies to their own stack. A technology cannot be added more than once. Add, remove, and remove all stack functionality with toast messages.
 3. Responsiveness
 Navbar, hero section, sidebar stack, and footer based on the provided design, all are responsive for diffrent devices.

# React Questions

1. What is JSX, and why is it used in React?
JSX lets us write HTML-like elements inside JavaScript. It makes React UI code easier to read and organize.

2. What is the difference between props and state?
Props are used to send data from a parent component to a child component on the other hand State is used to store data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState is a React Hook used to store and update data in a component. I used it for the mobile menu, loaded technologies, and the selected stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used when we want to perform something after a component renders. I used it to fetch the local technology JSON when the app loads.

5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list. It helps React understand which item was added, removed, or changed.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In this project, I used it to show a message when the stack is empty. {stack.length === 0 && (
  <p>Your stack is empty</p>
)}. YourStack component shows an empty message when stack.length ===0, and stack items otherwise.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child can call a function passed through props to send an event or value back to the parent. 
