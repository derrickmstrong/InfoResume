// Data
var data = [
  {
    value: 100,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'HTML',
  },
  {
    value: 100,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'CSS',
  },
  {
    value: 100,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'JS',
  },
  {
    value: 60,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'React',
  },
  {
    value: 40,
    color: '#4D5360',
    highlight: '#616774',
    label: 'Laravel',
  },
];

// Global + Custom Chart Config Options
var options = {
  bezierCurve: false,
  animation: true,
  animationEasing: 'easeOutQuart',
  showScale: false,
  tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
  tooltipCornerRadius: 3,
  pointDot: true,
  pointDotRadius: 4,
  datasetFill: true,
  scaleShowLine: true,
  animationEasing: 'easeOutBounce',
  animateRotate: true,
  animateScale: true,
};

// Load Chart
var ctx = document.getElementById('myDonutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx).Doughnut(data, options);
