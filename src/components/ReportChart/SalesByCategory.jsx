import Chart from 'react-apexcharts';
const SalesByCategory = () => {
    const stackedBarChartOptions = {
        series: [
            {
                name: 'Mini Micro',
                data: [91, 58, 90, 79, 83, 119, 78, 88, 129, 71, 90, 116, 94, 110, 103, 111, 119, 79, 94, 124, 81, 85, 82, 79, 94, 124, 119, 79, 94, 124, 81, 90, 116],
            },
            {
                name: 'Micro Bus',
                data: [31, 37, 39, 62, 51, 35, 14, 35, 27, 27, 21, 61, 27, 54, 43, 120, 46, 50, 62, 121, 90, 70, 82, 61, 27, 54, 39, 62, 51, 35, 14, 27, 21, 61],
            },
            {
                name: 'Premium Micro',
                data: [31, 37, 39, 62, 51, 35, 41, 35, 27, 27, 53, 61, 27, 54, 43, 120, 46, 50, 62, 51, 90, 70, 82, 90, 70, 82, 35, 27, 27, 53, 61, 53, 61, 27],
            },
        ],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04',
                '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11',
                '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18',
                '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25',
                '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29', '2020-07-30',
            ],
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: 'bottom',
        },
        colors: ['#48bb78', '#4299e1', '#fbd38d'],
    };
    return (
        <div className="md:w-2/3 w-full">
            <div className="bg-white my-2 mx-2 border rounded-md px-2 py-4">
                <div className="flex justify-between px-2">
                    <div>
                        <h1 className="text-2xl font-medium inline">1875</h1>
                        <span className="text-sm text-green-500"
                        >2.75% <i className="bx bx-up-arrow-alt"></i
                        ></span>
                        <div className="text-gray-700">Rental Cars Categories</div>
                    </div>
                    {/*   <!--  --> */}
                    <div className="relative inline-block text-left text-base">
                        <a
                            href=""
                            className="inline-flex items-center text-gray-600 dropdown-toggle"
                            data-dropdown="SalesCategoryDropdown"
                        >
                            <span>Last 60 days </span>
                            <i
                                className="inline-flex items-center bx bx-chevron-down ml-1"
                            ></i>
                        </a>

                        <div
                            className="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden"
                            id="SalesCategoryDropdown"
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
                                        className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                    >Last 30 days</a
                                    >

                                    <a
                                        href="#"
                                        className="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
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
                <div id="chart-bar">
                    <Chart options={stackedBarChartOptions} series={stackedBarChartOptions.series} type="bar" height={350} className="flex-auto" />
                </div>

            </div>
        </div>
    );
};

export default SalesByCategory;