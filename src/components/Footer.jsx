import React from "react";
import { GiWhirlwind } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { BsCCircleFill } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">

      <div className="container">

        <div className="row align-items-center">

   
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 fs-5"> Stay updated with the latest weather conditions </p>
            <br />
            <p className='fs-5'><FaCloudSun className="text-warning" /> Your simple weather companion — stay informed, wherever you go.</p>
          </div>

          <div className="col-md-6 text-center text-md-end fs-4">
            <h5 className="mb-4">Weather Info</h5>

            <div className=" justify-content-center justify-content-md-end fs-5">

              <p><FaTemperatureHigh  className="text-danger"/> Temperature</p>

              <p><IoIosWater  className="text-primary"/> Humidity</p>

              <p><GiWhirlwind className="text-light"/> Wind Speed</p>

            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />
<p className="mb-0 text-center">
              <BsCCircleFill /> 2026 Weather App | All rights reserved.
            </p>
       
      </div>

    </footer>
  );
}


export default Footer
