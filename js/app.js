// Data
var frontend_data = [
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
    label: 'Javascript',
  },
  {
    value: 60,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'React',
  },
  {
    value: 20,
    color: '#4D5360',
    highlight: '#616774',
    label: 'Laravel',
  },
  {
    value: 20,
    color: '#1cda3b',
    highlight: '#0ae02e',
    label: 'C#',
  },
  {
    value: 30,
    color: '#1c68da',
    highlight: '#2e80fa',
    label: 'Vue',
  },
];

var backend_data = [
  {
    value: 80,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'MySQL',
  },
  {
    value: 80,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'MongoDB',
  },
  {
    value: 50,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'PostgresSQL',
  },
  {
    value: 80,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'SQL',
  },
  {
    value: 60,
    color: '#4D5360',
    highlight: '#616774',
    label: 'PHP',
  },
];

var digital_data = [
  {
    value: 90,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Google Tag Manager',
  },
  {
    value: 70,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Campaign Manager',
  },
  {
    value: 50,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Microsoft Azure',
  },
  {
    value: 80,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'Automation',
  }
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
var ctx_front = document.getElementById('frontend').getContext('2d');
var ctx_back = document.getElementById('backend').getContext('2d');
var ctx_digital = document.getElementById('digital').getContext('2d');

var frontendChart = new Chart(ctx_front).Doughnut(frontend_data, options);
var backendChart = new Chart(ctx_back).Doughnut(backend_data, options);
var digitalChart = new Chart(ctx_digital).Doughnut(digital_data, options);
