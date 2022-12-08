import React from "react"

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <div>
        <span>logo</span>
        <address>
          <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
        </address>
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <h2>Customer</h2>
        <ul>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <h2>Pages</h2>
        <ul>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <span>©Webecy - All Rights Reserved</span>
      </div>
      <ul>
        <li>Fb</li>
        <li>insta</li>
        <li>twitter</li>
      </ul>
    </footer>
  )
}

export default Footer
