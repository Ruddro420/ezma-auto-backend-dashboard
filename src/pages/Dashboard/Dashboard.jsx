/* eslint-disable react/prop-types */
import FeedBack from "../../components/ReportChart/FeedBack";
import OrderProcession from "../../components/ReportChart/OrderProcession";
import OrderReport from "../../components/ReportChart/OrderReport";
import SalesByCategory from "../../components/ReportChart/SalesByCategory";
import SalesByCountry from "../../components/ReportChart/SalesByCountry";
import TotalRevenue from "../../components/ReportChart/TotalRevenue";
import Title from "../../components/Title/Title";

const Dashboard = ({ title }) => {
    return (
        <div>
            <Title title={title} />
            <div className="max-w-screen-xl mx-auto">
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
        </div>
    );
};

export default Dashboard;