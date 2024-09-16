# React Shopping Cart with Bootstrap

This project is a simple shopping cart built with React that uses context to manage the cart's state. It allows users to select quantities of items, view product details, and update the cart dynamically. The project is styled using Bootstrap.

## Features

- Product listing with details such as name, price, description, and category.
- Quantity selection for products in the cart.
- Update product quantities dynamically using React Context.
- Remove products from the cart.
- Responsive UI styled with Bootstrap.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Context: Used for global state management.
- Bootstrap: For responsive and modern UI components.
- Vite: A frontend build tool that provides a fast development server and optimized production builds.

## Usage

 Quantity Selection: Select product quantities using the dropdown.
 Dynamic Price Calculation: The total price will automatically update based on the quantity selected.
 Cart Management: Add and remove items from the cart using the controls.
  
## Context API

The CartContext is responsible for managing the global state of the shopping cart. It provides the following methods:

 updateQuantity(productId, newQuantity): Updates the quantity of a product in the cart.
 removeProduct(productId): Removes a product from the cart.
 
## JSON Data Example
The product data is stored in the state as a list of objects. Here's an example of one product object:{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
