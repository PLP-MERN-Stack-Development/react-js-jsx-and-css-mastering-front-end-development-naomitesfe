# Task Manager - Week 3 MERN Frontend Assignment

A **responsive Task Manager** built with **React.js, JSX, and Tailwind CSS** for the Week 3 Front-End Development assignment.  
This project demonstrates **component architecture**, **state management with hooks**, **local storage persistence**, **API integration**, and **responsive design**.

---

## 📝 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Author](#author)

---

## 🌟 Project Overview

This Task Manager allows users to:

- Add new tasks
- Mark tasks as completed
- Edit tasks
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persist tasks using **Local Storage**
- Toggle between **Light and Dark mode**
- Fetch data from a public API (optional integration)
- Responsive layout for mobile, tablet, and desktop

---

## ✅ Features

- **Reusable Components:** Button, TaskCard, TaskForm, TaskList, TaskManager, Header, Footer  
- **State Management:** `useState`, `useEffect`, `useContext`  
- **Custom Hooks:** `useLocalStorage` for tasks persistence  
- **Theme Switcher:** Light/Dark mode using Tailwind CSS  
- **Responsive Design:** Mobile-first layout with Tailwind utilities  
- **Task Filtering:** Filter tasks by All / Active / Completed  
- **Task Editing:** Inline editing for tasks  
- **Task Persistence:** Local Storage saves tasks across sessions  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, JSX  
- **Styling:** Tailwind CSS (v4)  
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)  
- **Package Manager:** npm  
- **Bundler:** Vite  

---

## 📂 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Button.jsx
│ ├── TaskManager.jsx
│ ├── TaskForm.jsx
│ ├── TaskList.jsx
│ └── TaskCard.jsx
├── context/
│ └── ThemeContext.jsx
├── hooks/
│ └── useLocalStorage.jsx
├── api/
│ └── fetchTasks.js
├── App.jsx
├── main.jsx
└── index.css

yaml
Copy code

---

## 💻 Installation

1. Clone your GitHub repository:

```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-naomitesfe
cd task-manager
```
Install dependencies:

``` bash
npm install
```
Start the development server:

```bash
npm run dev
```
Open in browser:

```
http://localhost:5173/
```
## 🚀 Usage
- Add Task: Type in the input box and click Add Task
- Complete Task: Click the checkbox to mark as completed
- Edit Task: Click Edit, update text, and click Save
- Delete Task: Click Delete
- Filter Tasks: Use All / Active / Completed buttons
- Theme Switch: Toggle light/dark mode
