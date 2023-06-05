// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
// import "./style.css"
// import { useMediaQuery } from 'react-responsive';
// const Graphs = () => {
//     const data = [
//         { name: 'Feb3', sales: 30 },
//         { name: 'Feb9', sales: 79 },
//         { name: 'Feb14', sales: 45 },
//         { name: 'Feb21', sales: 188 },
//         { name: 'Feb28', sales: 65 },
//     ];
//     const isDesktop = useMediaQuery({ minWidth: 768 });
//     return (
//         <section>
//             {isDesktop ? (
//                 <ResponsiveContainer width="100%" aspect={3.5}>
//                     <BarChart data={data}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis/>
//                         <Tooltip />
//                         {/* <Legend /> */}
//                         <Bar dataKey="sales" fill="#06A2F0">
//                             {/* <LabelList dataKey="sales" position="top" /> */}
//                             {/* <LabelList dataKey="name" position="insideTop" /> */}
//                         </Bar>
//                     </BarChart>
//                 </ResponsiveContainer>
//             ) : (
//                 <ResponsiveContainer width="100%" aspect={2.8}>
//                     <BarChart data={data}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         {/* <Legend /> */}
//                         <Bar dataKey="sales" fill="#06A2F0">
//                             <LabelList dataKey="sales" position="top" />
//                         </Bar>
//                     </BarChart>
//                 </ResponsiveContainer>
//             )
//             }
//         </section>
//     );
// };
// export default Graphs

// import React, { useState, useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// function BarChart() {
//     const chartContainer = useRef(null);
//     const [chart, setChart] = useState(null);

//     useEffect(() => {
//         if (chart) {
//             chart.destroy();
//         }

//         const ctx = chartContainer.current.getContext('2d');

//         const data = {
//             labels: ['Feb3', 'Feb9', 'Feb14', 'Feb21', 'Feb28'],
//             datasets: [
//                 {
//                     label: 'Sales',
//                     data: [3000, 7000, 4000, 3000, 8000],
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1,
//                 },
//             ],
//         };

//         const options = {
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                 },
//             },
//             plugins: {
//                 legend: {
//                     display: false,
//                 },
//             },
//         };

//         const newChart = new Chart(ctx, {
//             type: 'bar',
//             data,
//             options,
//         });

//         setChart(newChart);

//         return () => newChart.destroy(); // Cleanup the chart instance on unmount
//     }, []);

//     return (
//         <div>
//             <canvas ref={chartContainer} />
//         </div>
//     );
// }

// export default BarChart;


// import React, { useState, useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// function Graphs() {
//     const chartContainer = useRef(null);
//     const [chart, setChart] = useState(null);

//     useEffect(() => {
//         if (chart) {
//             chart.destroy();
//         }

//         const ctx = chartContainer.current.getContext('2d');

//         const data = {
//             labels: ['Feb3', 'Feb9', 'Feb14', 'Feb21', 'Feb28'],
//             datasets: [
//                 {
//                     label: 'Sales',
//                     data: [3000, 7000, 4000, 3000, 8000],
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1,
//                 },
//             ],
//         };

//         const options = {
//             plugins: {
//                 datalabels: {
//                     anchor: 'end',
//                     align: 'top',
//                     formatter: function (value, context) {
//                         return value;
//                     }
//                 },
//                 legend: {
//                     display: false,
//                 },
//             },
//             scales: {
//                 x: {
//                     grid: {
//                         display: false,
//                     },
//                 },
//                 y: {
//                     display: false,
//                 },
//             },
//         };

//         Chart.register(ChartDataLabels);

//         const newChart = new Chart(ctx, {
//             type: 'bar',
//             data,
//             options,
//         });

//         setChart(newChart);

//         return () => newChart.destroy(); // Cleanup the chart instance on unmount
//     }, []);

//     return (
//             <canvas ref={chartContainer} width="100%" height="100%" />
//     );
// }

// export default Graphs;

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart } from 'chart.js/auto';
// import "./style.css"
// const Graphs = () => {
//     const data = {
//         labels: ['Feb3', 'Feb9', 'Feb14','Feb16','Feb20', 'Feb21', 'Feb28'],
//         datasets: [
//             {
//               data: [30, 80, 150, 180, 185, 75, 40],
//               backgroundColor: ["#06A2F0", "#06A2F0", "#06A2F0", "#06A2F0"],
//               borderColor: ["#06A2F0", "#06A2F0", "#06A2F0", "#06A2F0"],
//               borderWidth: 0.5,
//             },
//           ],

//     };

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//     xAxes: [
//       {
//         ticks: {
//           display: false,
//         },
//       },
//     ],
//   },
//   legend: {
//     labels: {
//       fontSize: 15,
//       display: false
//     },
//   },
// };



//     return (
//         <div
//             className="graph-divs"
//         >
//             <Bar data={data} options={options} />
//         </div>
//     );
// };

// export default Graphs;

// import React,{useState,useEffect,useRef} from 'react';
// import { CanvasJSChart } from 'canvasjs-react-charts';
// import CanvasJSReact from 'canvasjs-react-charts';
// import "./style.css"
// function Graphs() {
//   const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });
//   const chartRef = useRef(null);
//   const options = {
//     title: {
//       text: "Sales Data"
//     },
//     axisY: {
//       title: "Sales"
//     },
//     axisX: {
//       title: "Month"
//     },
//     data: [{
//       type: "line",
//       dataPoints: [
//         { x: 1, y: 1000 },
//         { x: 2, y: 1500 },
//         { x: 3, y: 1200 },
//         { x: 4, y: 1700 },
//         { x: 5, y: 1300 },
//         { x: 6, y: 2000 }
//       ]
//     }]
//   };
//   useEffect(() => {
//     const chartContainer = chartRef.current.parentNode;
//     const chartWidth = chartContainer.offsetWidth;
//     const chartHeight = chartWidth * 0.5; // set the aspect ratio you want
//     setChartDimensions({ width: chartWidth, height: chartHeight });
//   }, []);

//   return (
//     <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
//       <CanvasJSChart options={options} style={chartDimensions} />
//     </div>
//   );
// }

// export default Graphs;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import "./style.css";

const Graphs = () => {
  const data = {
    labels: ["Feb3", "Feb9", "Feb14", "Feb16", "Feb20", "Feb21", "Feb28"],
    datasets: [
      {
        data: [30, 80, 40, 60,85 , 75, 40],
        borderColor: "#06A2F0",
        pointBackgroundColor: "#06A2F0",
        pointRadius: 4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 15,
        display: false,
      },
    },
  };

  return (
    <div className="graph-divs">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphs;















