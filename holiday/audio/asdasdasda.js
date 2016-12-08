var imageArray = ["https://c.tadst.com/gfx/750w/thanksgiv-day.jpg?1",
"http://www.clipartkid.com/images/221/happy-holidays-and-happy-new-year-greeting-cards-d3PDgI-clipart.png",
"https://freshlocalturkey.com/wp-content/uploads/2016/09/Thanksgiving-2016-Table.jpg",
"https://www.bloomnation.com/blog/wp-content/uploads/21-happy-holidays.jpg",
"http://i2.wp.com/yomkippur2016.org/wp-content/uploads/2016/10/Happy-Thanksgiving-greetings-2016-1.jpg?resize=616%2C462",
"http://www.greetingsforchristmas.com/wp-content/uploads/2015/11/happy-christmas-holidays.jpg",
"http://www.universetoday.com/wp-content/uploads/2012/12/hubble-holiday.jpg",
"http://www.princessroyale.com/wp-content/uploads/2016/09/Thanksgiving2-300x256.png",
"https://static1.squarespace.com/static/53435725e4b056226a59e38e/t/54749f91e4b086b091a798f8/1416929170008/holiday_gifts.jpg",
"http://cdn.history.com/sites/2/2013/12/new-years-eve-hero-AB.jpeg",
"http://www.goabroad.com/blog/wp-content/uploads/2014/12/nye.jpg",
"http://cdn.playbuzz.com/cdn/2cb1a1e9-cfac-46d7-86e0-b5989fd38925/6d412f1d-b036-42f1-b7a1-544bcb1d7057.jpg", 
];

var audioArray = [
"audio/audio1.mp3",
"audio/audio3.mp3",
"audio/audio2.mp3",
"audio/audio4.mp3"
];



var currentIndex = 0;
var currentAudioIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);	
}
renderImage();

function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

function forwardAudio() {
  currentAudioIndex++;
  renderAudio();
}

function backAudio() {
  currentAudioIndex--;
  renderAudio();
}
function renderAudio() {
  if(currentAudioIndex <0){
      currentAudioIndex = audioArray.length-1;
  }else if (currentAudioIndex >= audioArray.length){
    currentAudioIndex = 0;
  }
  $('#theAudio').attr('src', audioArray[currentAudioIndex]);
  $("audio")[0].load();
  $("audio")[0].play();
}
$('#nextBtn').on('click', forwardAudio);
// $('#playBtn').on('click', backAudio);
$('#forwardBtn').on('click', forwardImage);
$('#backBtn').on('click', backImage);

 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name  + "!";
var outputString2 = "Dear " + name; 
$('h1').html(outputString);
$('p.centerMe').html(outputString2);


 var data = google.visualization.arrayToDataTable([
          ['Christmas Gifts', 'How much I want one'],
          ['A New Phone',     15],
          ['Car',      12],
          ['Camera rolls',  5],
          ['Clothes/Shoes', 2],
          ['Records of recent music or past',    10]
        ]);
 		//calculate 50% of page width 
 		var chartWidth = $('body').width()*0.5;
    var chartHeight = $('body').height()*0.2
        var options = {
          title: 'My Christmas List',
          backgroundColor: "#818FF2",
          width: chartWidth,
          colors: ['#400502']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }







