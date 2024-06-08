import Chart from 'react-apexcharts';
const SalesByCountry = () => {
    const donutChartOptions = {
        series: [332, 185, 151, 87],
        chart: {
          type: 'donut',
          width: '100%',
          height: 400,
        },
        plotOptions: {
          pie: {
            customScale: 0.85,
            donut: {
              size: '67%',
            },
          },
          stroke: {
            colors: undefined,
          },
        },
        colors: ['#2f855a', '#38a169', '#48bb78', '#68d391'],
        labels: ['USA', 'India', 'Japan', 'Indonesia'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };
    return (
        <div className="md:w-1/3 w-full">
        <div className="bg-white border rounded-md my-2 mx-2">
          <div className="px-2 py-3">
            <div className="text-gray-700 px-2 text-xl">
              Top Sales by Country
            </div>
            <div id="chart-pie-1">
              <Chart options={donutChartOptions} series={donutChartOptions.series} type="donut" width="100%" height={400} className="flex-auto" />
            </div>

          </div>
          <table className="w-full text-md bg-white rounded">
            <tbody>
              <tr>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200"
                >
                  1
                </td>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200"
                >
                  USA
                </td>
                <td
                  className="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right"
                >
                  + 10% <i className="bx bx-up-arrow-alt ml-1"></i>
                </td>
              </tr>
              <tr>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200"
                >
                  2
                </td>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200"
                >
                  India
                </td>
                <td
                  className="px-4 py-1.5 border-t border-gray-200 text-red-500 text-right"
                >
                  - 12% <i className="bx bx-down-arrow-alt ml-1"></i>
                </td>
              </tr>
              <tr>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200"
                >
                  3
                </td>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200"
                >
                  Japan
                </td>
                <td
                  className="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right"
                >
                  + 17% <i className="bx bx-up-arrow-alt ml-1"></i>
                </td>
              </tr>
              <tr>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200"
                >
                  4
                </td>
                <td
                  className="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200"
                >
                  Indonesia
                </td>
                <td
                  className="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right"
                >
                  + 11% <i className="bx bx-up-arrow-alt ml-1"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default SalesByCountry;