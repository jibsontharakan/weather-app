import React from 'react'
import { FaCloudSun } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-success text-light py-3">
  <div className="container text-center">
    <h3 className="mb-0 fw-bold p-4 fs-1">
      <FaCloudSun  className='text-warning '/> Weather App
    </h3>
  </div>
</header>

  )
}

export default Header
