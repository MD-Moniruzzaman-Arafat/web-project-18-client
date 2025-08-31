# 🌍 web-project-18-client

An interactive web application for discovering, adding, and managing top tourist spots across various countries. Built with React, Vite, and Firebase Authentication, the app features a modern UI, user authentication, and dynamic data management.

---

## 🚀 Features

- **Home Page:**
  - Carousel banner with beautiful images.
  - "Why Choose Us" section highlighting unique selling points.
  - List of countries with flags.
  - Display of top tourist spots.
- **Tourist Spots:**
  - Browse all tourist spots with images, descriptions, and details.
  - View detailed information for each spot (location, cost, seasonality, travel time, visitors, etc.).
  - Add new tourist spots (requires login).
  - Filter and view only the spots added by the logged-in user ("My List").
- **Authentication:**
  - Register with email, password, name, and photo.
  - Login with email/password or Google.
  - Secure routes for adding/viewing personal lists.
- **Responsive Design:**
  - Fully responsive layout using Tailwind CSS and DaisyUI.
  - Modern, accessible, and mobile-friendly UI.

---

## 🛠️ Technologies Used

- React 19
- Vite
- React Router v7
- Context API (for authentication state)
- Firebase Authentication
- Tailwind CSS & DaisyUI
- Swiper (carousel)

---

## 📁 Folder Structure

```
src/
	api/                # API functions for fetching data
	assets/             # Images and icons
	components/         # Reusable UI components
		carousel/         # Carousel banner
		countries/        # Country list and cards
		footer/           # Footer component
		navbar/           # Navbar and menu
		touristsSpots/    # Tourist spots list and cards
		whyChooseTour/    # Why choose us section
	context/            # Auth context provider
	firebase/           # Firebase config
	layouts/            # Root layout
	pages/              # Main pages (Home, Login, Register, Add, My List, Details)
	routes/             # App routes and private route logic
	index.css           # Global styles
	main.jsx            # App entry point
```

---

## 🔑 Authentication

- User registration and login via Firebase Auth.
- Google sign-in supported.
- Auth state managed globally with Context API.
- Private routes for adding tourist spots and viewing "My List".

---

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd web-project-18-client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Firebase:**
   - Add your Firebase config to `src/firebase/firebaseConfig.js`.
4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📝 Usage

- Register or login to access all features.
- Browse tourist spots, view details, and add your own.
- Manage your personal list of added spots.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
