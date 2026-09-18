# UI Project

A modern and responsive UI built with React and Tailwind CSS for presenting prospective customer segmentation for a digital banking platform.

The project focuses on a clean, component-based layout with a hero section, navigation bar, customer segmentation cards, and horizontal card scrolling.

## 📸 Screenshot

![Project Screenshot](./screenshot.png)

## ✨ Features

- Modern and minimal UI
- Responsive layout
- Component-based React architecture
- Customer segmentation cards
- Horizontal scrolling card section
- Dynamic card data using React props
- Different colors and tags for customer segments
- Remix Icons integration
- Tailwind CSS styling
- Vite development environment

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript (JSX)**
- **Remix Icons**

The project uses React and React DOM as its main dependencies, with Vite and the React Vite plugin for development and building.

Tailwind CSS is integrated through the Vite Tailwind plugin. 

## 🧩 Component Architecture

The first section is divided into smaller reusable components:

```text
Section1
│
├── Navbar
│
└── Page1Content
    │
    ├── LeftContent
    │   ├── HeroText
    │   └── Arrow
    │
    └── RightContent
        │
        └── RightCard
            └── RightCardContent
```

`Section1` contains the navbar and main page content.

The main content is split into left and right areas, with the right side receiving customer data through props.

## 👥 Customer Segmentation

The customer data is stored in `App.jsx` and passed down through components using props.

Each customer object contains:

- Image
- Intro
- Color
- Segment tag

Example segments currently used:

```text
Satisfied
Underserved
Underbanked
Premium
```

The cards are generated dynamically using `.map()`, making it easy to add or remove customer segments.

## 🎨 UI Design

The interface uses Tailwind CSS utility classes for layout and styling.

The customer cards use:

- Fixed card width
- Rounded corners
- Full-height images
- Overlay content
- Dynamic background colors
- Rounded action buttons
- Horizontal scrolling

The right-side card container is implemented as a horizontally scrollable flex layout.



## 🖼️ Icons

The project uses **Remix Icons** for interface icons such as the arrow icon. The Remix Icon stylesheet is loaded in `index.html`. 

## 📌 Current Status

This project is a frontend UI implementation focused on practicing:

- React componentization
- Props
- Array mapping
- Tailwind CSS
- Responsive layouts
- Reusable components
- UI composition

## 🔮 Future Improvements

Possible improvements include:

- Add proper responsive behavior for mobile screens
- Add animations and transitions
- Add interactive card navigation
- Replace placeholder text with real content
- Add more customer segments
- Improve accessibility
- Add routing between sections
- Connect the UI to a backend/API

## 👨‍💻 Author

**Ramit Sarker**
