import CancellationPolicy from "./CancellationPolicy";
import { FaAngleDown } from "react-icons/fa6";
import { IoLockClosedSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";




const BookingForm = () => {
  return (
    <div className="bg-white w-full max-w-none">
      <h2 className="text-2xl font-semibold mb-6">Contact Detail</h2>
      
      <div className="space-y-6">
        {/* Contact Details */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
            />
          </div>
          <div>
            <label className=" text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className=" text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              
            />
          </div>
          <div>
            <label className=" text-sm font-medium text-gray-700 mb-2">Phone number</label>
            <input 
              type="tel" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              
            />
          </div>
        </div>

        {/* SMS Updates Checkbox */}
        <div className="flex items-start space-x-3">
          <input 
            type="checkbox" 
            className="mt-0.5 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          />
          <label className="text-sm text-gray-700">
            Receive text message update about your booking. Messages rates may apply.
          </label>
        </div>

        {/* Payment Section */}
        <div className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Pay with</h3>
          
          {/* Payment Method Dropdown */}
          <div className="mb-4">
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white pr-10">
                <option><FaCreditCard /> Credit or debit card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <FaAngleDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div className="space-y-4">
            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2">Card number</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Card Number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <IoLockClosedSharp />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-2">Expiration date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input 
                  type="text" 
                  placeholder="•••"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
          
          <div className="space-y-4">
            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2">Street Address</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                
              />
            </div>

            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2">Apt or suite number</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                
              />
            </div>

            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2">City</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-2">State</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  
                />
              </div>
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                  
                />
              </div>
            </div>

            <div>
              <label className=" text-sm font-medium text-gray-700 mb-2">Country</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white pr-10">
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>Kenya</option>
                  <option>South Africa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <FaAngleDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CancellationPolicy />

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-8"
        >
          Confirm & pay
        </button>
      </div>
    </div>
  );
};

export default BookingForm;