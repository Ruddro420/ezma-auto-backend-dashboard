import React from 'react';
import Chart from 'react-apexcharts';

const DashboardCharts = () => {
  const areaChartOptions = {
    chart: {
      type: 'area',
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
      opacity: 0.16,
      type: 'solid',
    },
    stroke: {
      width: 2,
      lineCap: 'round',
      curve: 'smooth',
    },
    series: [
      {
        name: 'Revenue',
        data: [31, 37, 39, 62, 51, 35, 41, 35, 27, 27, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 66, 70, 82],
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

  const lineChartOptions = {
    chart: {
      type: 'line',
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
      width: [2, 1],
      dashArray: [0, 3],
      lineCap: 'round',
      curve: 'smooth',
    },
    series: [
      {
        name: 'Last month',
        data: [31, 37, 39, 62, 51, 35, 14, 35, 27, 27, 21, 61, 27, 54, 43, 120, 46, 50, 62, 121, 90, 70, 82],
      },
      {
        name: 'This month',
        data: [91, 58, 90, 79, 83, 119, 78, 88, 129, 71, 90, 116, 94, 110, 103, 111, 119, 79, 94, 124, 81, 85, 82],
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

  const stackedBarChartOptions = {
    series: [
      {
        name: 'Admin Template',
        data: [91, 58, 90, 79, 83, 119, 78, 88, 129, 71, 90, 116, 94, 110, 103, 111, 119, 79, 94, 124, 81, 85, 82, 79, 94, 124, 119, 79, 94, 124, 81, 90, 116],
      },
      {
        name: 'Themes Tailwindcss',
        data: [31, 37, 39, 62, 51, 35, 14, 35, 27, 27, 21, 61, 27, 54, 43, 120, 46, 50, 62, 121, 90, 70, 82, 61, 27, 54, 39, 62, 51, 35, 14, 27, 21, 61],
      },
      {
        name: 'Wordpress Themes',
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
    <div>
      <div id="chart-sparkline-1">
        <Chart options={areaChartOptions} series={areaChartOptions.series} type="area" height={50} />
      </div>
      <div id="chart-sparkline-2">
        <Chart options={barChartOptions} series={barChartOptions.series} type="bar" height={50} />
      </div>
      <div id="chart-sparkline-3">
        <Chart options={lineChartOptions} series={lineChartOptions.series} type="line" height={50} />
      </div>
      <div id="chart-bar">
        <Chart options={stackedBarChartOptions} series={stackedBarChartOptions.series} type="bar" height={350} />
      </div>
      <div id="chart-pie-1">
        <Chart options={donutChartOptions} series={donutChartOptions.series} type="donut" width="100%" height={400} />
      </div>
    </div>
  );
};

export default DashboardCharts;
