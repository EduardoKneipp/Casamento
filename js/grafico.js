var xValues = ["Edu", "Bia"];
var yValues = [50, 20, 0];
var barColors = ["green","red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    tooltips: {enabled: false},
    hover: {mode: null},
    legend: {display: false},
    scales: {
        yAxes: [{
          beginAtZero: true,
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            display: false,
          }
        }],
        xAxes: [{
            gridLines: {
              display: false,
            },
          }],
    },
  }
});