import React from "react"; // Core React library for building UI components
import { useAppContext } from "../context/AppContext"; // Custom hook to access global state (products)
import { useParams } from "react-router-dom"; // Hook to get URL parameters (like the category name)
import { categories } from "../assets/assets"; // Data file containing predefined product categories
import ProductCard from "../components/ProductCard"; // Component to display individual product details

const ProductCategory = () => {
  // 1. Getting Data and Parameters
  const { products } = useAppContext(); // Gets the 'products' array from a global context.
  // 'products' will typically be an array of objects, like:
  // [{ _id: '1', name: 'Laptop', category: 'Electronics', price: 1200 }, ...]

  const { category } = useParams(); // Extracts the 'category' part from the URL.
  // If the URL is '/category/electronics', then 'category' will be "electronics".

  // 2. Finding the Category Details
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );
  // This line looks for a matching category in the 'categories' data.
  // - `categories` is an array of category objects (e.g., [{ path: 'electronics', text: 'Electronics' }]).
  // - `find()` returns the first item that matches the condition.
  // - `item.path.toLowerCase() === category.toLowerCase()`: It compares the `path` of each category item
  //   (converted to lowercase) with the `category` from the URL (also converted to lowercase)
  //   to ensure the comparison is case-insensitive (e.g., 'Electronics' matches 'electronics').
  // - `searchCategory` will either be the found category object or `undefined` if not found.

  // 3. Filtering products
  const filteredproducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  // This is the core logic for displaying specific products.
  // - `products.filter()` creates a new array containing only the products that pass the test.
  // - `(product) => ...`: For each `product` in the `products` array, this function is executed.
  // - `product.category.toLowerCase() === category.toLowerCase()`: It checks if the `category` property
  //   of the current `product` (e.g., "Electronics") matches the `category` obtained from the URL
  //   (e.g., "electronics"), again, after converting both to lowercase for a case-insensitive match.
  // - `filteredproducts` will be an array of products belonging to the matched category.

  // 4. Rendering the UI
  return (
    <div className="mt-16 ">
      {/* 4.1. Displaying Category Title (if found) */}
      {searchCategory && ( // This is a conditional rendering. It only renders the div if `searchCategory` is not `undefined` (i.e., a category was found).
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}{" "}
            {/* Displays the full text of the category (e.g., "ELECTRONICS") in uppercase. */}
          </p>
          <div className="w-16 h-0.5 bg-green-500 rounded-full"></div>{" "}
          {/* A small green underline for styling. */}
        </div>
      )}

      {/* 4.2. Displaying products or "No products found" message */}
      {filteredproducts.length > 0 ? ( // Another conditional rendering: Check if there are any products in the filtered list.
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
          {/* This div sets up a responsive grid layout using Tailwind CSS classes. */}
          {filteredproducts.map(
            (
              product // If products exist, loop through each `filteredProduct`.
            ) => (
              <ProductCard key={product._id} product={product} /> // For each product, render a `ProductCard` component.
              // - `key={product._id}`: This is crucial for React's efficiency when rendering lists. It helps React
              //   identify which items have changed, been added, or removed. `_id` is a unique identifier for each product.
              // - `product={product}`: Passes the entire `product` object as a prop to the `ProductCard` component,
              //   so `ProductCard` can display its details (name, image, price, etc.).
            )
          )}
        </div>
      ) : (
        // If `filteredproducts` is empty (no products found in this category)
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl font-medium text-green-500">
            No products found in this category
          </p>{" "}
          {/* Displays a message indicating no products. */}
        </div>
      )}
    </div>
  );
};

export default ProductCategory; // Exports the component so it can be imported and used in other parts of the application.
