# Food Delivery App

A mobile-friendly React web application for browsing food, managing a cart, checking out, and viewing a friendly order confirmation. Built with React Router v7 (SSR support), TypeScript, Vite, and Tailwind CSS. The app entry and providers live under app/.

## Live Demo

https://food-delivery-app-pearl-three.vercel.app/

## Features

- Browse food items with images and details.
- Add, remove, decrease quantity, and clear cart via CartContext.
- Checkout flow and order confirmation screen.
- Responsive layout with Navbar, Footer, and animated page transitions.

## Installation

Follow these steps to run the project locally.

```bash
# clone the repo
git clone <repo-url>
cd Food_Delivery_App

# install dependencies
npm install

# start dev server (HMR)
npm run dev
Build & Production
bash
npm run build
npm run start
A Dockerfile for building a production image is present in the repository.

Project Structure
The app uses React Router v7 for routing with the entry point in app/root.tsx. The CartContext implements cart operations and fees. The Main layout handles loading and animated transitions.

Tech Stack
React (v19) and TypeScript

React Router v7 for routing and SSR

Tailwind CSS for styling

Vite for dev and building

Key Files
app/root.tsx - Root component, providers (CartProvider, LoginProvider), and ErrorBoundary

app/context/CartContext.tsx - Cart provider, addItem/removeItem/decreaseQuantity, fees, subTotalPrice

app/Layout/Main.tsx - Main layout with loading spinner and animated transitions

package.json - scripts and dependencies

Dockerfile - multi-stage Docker build

Usage
Browse menu items and add them using MenuCard components

Manage cart in My Orders

Proceed to Checkout to reach Payment and Order Confirmation pages

Access cart and auth state via useCart() and useLogin() hooks

Error handling & SSR
The app includes an ErrorBoundary that handles route errors. The project uses React Router's SSR/dev tooling by configuration.
