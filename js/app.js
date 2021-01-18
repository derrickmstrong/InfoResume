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
    value: 30,
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
    value: 60,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Google Web Designer',
  },
  {
    value: 80,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'Automation',
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
var ctx_front = document.getElementById('frontend').getContext('2d');
var ctx_back = document.getElementById('backend').getContext('2d');
var ctx_digital = document.getElementById('digital').getContext('2d');

var frontendChart = new Chart(ctx_front).Doughnut(frontend_data, options);
var backendChart = new Chart(ctx_back).Doughnut(backend_data, options);
var digitalChart = new Chart(ctx_digital).Doughnut(digital_data, options);

// left-right brain
const leftBrain = document.querySelector('#left-brain');
const rightBrain = document.querySelector('#right-brain');
const leftBrainLogic = document.querySelector('.left-brain-logic');
const rightBrainLogic = document.querySelector('.right-brain-logic');

leftBrain.addEventListener('mouseover', function () {
  // hide leftbrain
  rightBrain.style.visibility = 'hidden';
  // show rightbrainlogic
  leftBrainLogic.style.visibility = 'visible';
  leftBrainLogic.style.transition = '.5s';
});

leftBrain.addEventListener('mouseout', function () {
  // show leftbrain
  rightBrain.style.visibility = 'visible';
  // hide rightbrainlogic
  leftBrainLogic.style.visibility = 'hidden';
});

rightBrain.addEventListener('mouseover', function () {
  // hide rightbrain
  leftBrain.style.visibility = 'hidden';
  // show leftbrainlogic
  rightBrainLogic.style.visibility = 'visible';
  rightBrainLogic.style.transition = '2s';
});

rightBrain.addEventListener('mouseout', function () {
  // show rightbrain
  leftBrain.style.visibility = 'visible';
  // hide leftbrainlogic
  rightBrainLogic.style.visibility = 'hidden';
});
