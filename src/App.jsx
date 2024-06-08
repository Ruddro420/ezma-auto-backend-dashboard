
import Chart from 'react-apexcharts';
import NavBar from './components/NavBar/NavBar';
import TotalRevenue from './components/ReportChart/TotalRevenue';
import OrderProcession from './components/ReportChart/OrderProcession';
import OrderReport from './components/ReportChart/OrderReport';
import FeedBack from './components/ReportChart/FeedBack';
import SalesByCategory from './components/ReportChart/SalesByCategory';
import SalesByCountry from './components/ReportChart/SalesByCountry';

function App() {
  return (
    <>
      <div>
        <body className="bg-gray-100">
          {/* #################### NavBar Start #################### */}
          <NavBar />
          {/* #################### NavBar End #################### */}
          <div className="max-w-screen-xl mx-auto">
            {/* Title Start */}
            <div className="mt-4 mx-2 md:flex justify-between items-center">
              <div>
                <h1 className="text-2xl mt-1 font-medium">Performance Dashboard</h1>
              </div>
              <div className="md:pt-0 pt-4">
                <button
                  className="px-4 py-2 border text-sm mx-1 border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-500 transition duration-150 ease-in-out inline-flex items-center"
                >
                  <i className="bx bx-world text-white mr-2 text-base"></i>
                  Publish Car
                </button>
                <button
                  className="px-4 py-2 border text-sm mx-1 rounded bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline-white active:bg-white transition duration-150 ease-in-out inline-flex items-center"
                >
                  <i className="bx bx-plus text-gray-700 mr-2 text-base"></i>
                  Create Car
                </button>
              </div>
            </div>
            {/*  Title End */}
            <div className="mt-3 w-full">
              <div className="flex flex-wrap mb-2">
                {/* Total Revenew */}
                <TotalRevenue />
                {/* Order Procession */}
                <OrderProcession />
                {/* Order Report */}
                <OrderReport />
                {/* Feed Back */}
                <FeedBack />
              </div>
              {/* ######### Report End ############## */}
              <div className="flex flex-wrap mb-2">
                {/* Sales By Car Category */}
                <SalesByCategory />
                {/* Sales By Country */}
                <SalesByCountry />
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
