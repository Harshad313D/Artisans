Virasat Jewels 👑

A stunning, highly responsive frontend e-commerce web application dedicated to showcasing and selling authentic Indian artisan jewelry. Built with React, Vite, and Tailwind CSS, this project features a luxury "frosted glass" navigation, rich heritage styling, and dynamic product routing.

Project Status: Actively in development. Targeted launch: February 22, 2026.

🚀 Getting Started

Follow these step-by-step instructions to get a copy of the project up and running on your local machine for development and testing.

Prerequisites
Before you begin, ensure you have Node.js (https://nodejs.org/) installed on your computer.

Step 1: Get the Code

You can download the code using one of two methods:

Method A: Using Git (Recommended)
Open your terminal and run the following command to clone the repository:

git clone https://github.com/Harshad313D/Artisans.git

## 📂 Folder Structure

Here is a visual map of how the codebase is organized so you know exactly where to find things:

```text
virasat-jewels/
├── node_modules/         # Automatically generated folder containing project dependencies
├── public/               # Static assets that don't need processing (e.g., favicon)
├── src/                  # 🌟 Main source code folder
│   ├── pages/            # Contains all the distinct page views
│   │   ├── About.jsx         # Artisan stories and regional craft details
│   │   ├── Contact.jsx       # Inquiry form and headquarters locations
│   │   ├── Home.jsx          # Landing page with hero, culture section, and top picks
│   │   ├── ProductDetail.jsx # Dynamic view for a single piece of jewelry
│   │   └── Products.jsx      # The full catalog grid of all items
│   ├── App.jsx           # Root component: handles routing, Navbar, and Footer layouts
│   ├── data.js           # Mock database containing the 25 jewelry items
│   ├── index.css         # Global stylesheet importing Tailwind CSS
│   └── main.jsx          # The entry point that injects React into the HTML file
├── .gitignore            # Tells Git which files to ignore (like node_modules)
├── index.html            # The single HTML file that hosts the React app
├── package.json          # Lists dependencies, scripts, and project metadata
├── tailwind.config.js    # Custom Tailwind settings (colors, fonts, border-radii)
└── vite.config.js        # Vite bundler configuration

```

---

## 🗺️ Pages Explained

This application uses `react-router-dom` to navigate seamlessly between different views without reloading the browser.

* **`Home.jsx` (`/`)**: The storefront window. It features an immersive hero background with a liquid-blur navigation bar that turns solid on scroll. It highlights the heritage of Indian jewelry and previews curated masterpieces.
* **`Products.jsx` (`/products`)**: The royal treasury. A responsive grid displaying all 25 artisan products with strict aspect ratios to ensure uniformity across all screen sizes.
* **`ProductDetail.jsx` (`/product/:id`)**: A dynamic page that reads the URL ID, searches `data.js`, and renders specific details (price, artisan name, description) for the selected item.
* **`About.jsx` (`/about`)**: A storytelling page focusing on the "Karigars" (artisans). It explores the regional crafting styles like Rajasthani Kundan and Tamil Nadu Temple jewelry.
* **`Contact.jsx` (`/contact`)**: Features a clean, professional inquiry form alongside the physical addresses and contact details for the Mumbai and Jaipur ateliers.

---

## 👨‍💻 Maintainer

Built and maintained by **Harshad**.

```

```