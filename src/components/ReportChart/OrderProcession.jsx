import Chart from 'react-apexcharts';
const OrderProcession = () => {
    const barChartOptions = {
        chart: {
            type: 'bar',
            fontFamily: 'inherit',
            height: 50,
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 0.7,
            type: 'solid',
        },
        stroke: {
            width: 1,
            lineCap: 'round',
            curve: 'smooth',
        },
        series: [
            {
                name: 'Sales',
                data: [38, 31, 89, 37, 39, 62, 51, 35, 41, 35, 27, 27, 53, 61, 27, 54, 43, 120, 46, 50, 62, 51, 90, 70, 82],
            },
        ],
        grid: {
            strokeDashArray: 4,
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            type: 'datetime',
        },
        yaxis: {
            labels: {
                padding: 4,
            },
        },
        labels: [
            '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04',
            '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11',
            '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18',
            '2020-07-19', '2020-07-20',
        ],
        colors: ['#48bb78'],
        legend: {
            show: false,
        },
    };
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full">
            <div
                className="bg-white my-2 mx-2 border rounded-md flex-col flex h-40"
            >
                <div className="px-4 py-3 pb-0 flex-auto">
                    <div className="pb-0 flex justify-between">
                        <div className="text-gray-600 text-sm">Order Complete</div>
                        <div className="relative inline-block text-left text-sm">
                            <a
                                href=""
                                className="inline-flex items-center text-gray-600 dropdown-toggle"
                                data-dropdown="salesProductDropdown"
                            >
                                <span>Last 30 days </span>
                                <i
                                    className="inline-flex items-center bx bx-chevron-down ml-1"
                                ></i>
                            </a>

                            <div
                                className="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden"
                                id="salesProductDropdown"
                            >
                                <div
                                    className="rounded-md bg-white shadow-xs"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                        >Today</a
                                        >

                                        <a
                                            href="#"
                                            className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                        >Last 7 days</a
                                        >

                                        <a
                                            href="#"
                                            className="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                        >Last 30 days</a
                                        >

                                        <a
                                            href="#"
                                            className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                        >Last 60 days</a
                                        >

                                        <a
                                            href="#"
                                            className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                        >Last 1 Year</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-3xl inline font-medium text-gray-700">760</div>
                    <span className="text-sm text-green-500"
                    >+5.66% <i className="bx bx-up-arrow-alt"></i
                    ></span>
                </div>
                <div id="chart-sparkline-2">
                    <Chart options={barChartOptions} series={barChartOptions.series} type="bar" height={50} className="my-2 ml-1 mr-2" />
                </div>

            </div>
        </div>
    );
};

export default OrderProcession;