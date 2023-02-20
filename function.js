// https://canvasjs.com/html5-javascript-spline-area-chart/

<!DOCTYPE HTML>
<html>
<head>  
	
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
	
<script>
window.onload = function () {
 
  var data= [
		{ x: new Date("October 12, 2016  16:11:41"), y: 950 },
		{ x: new Date("October 12, 2016 16:23:43"), y: 700 },
		{ x: new Date("October 12, 2016 16:34:05"), y: 710 },
		{ x: new Date("October 12, 2016 16:44:21"), y: 658 },
		{ x: new Date("October 12, 2016 16:54:46"), y: 734 },
		{ x: new Date("October 12, 2016 17:05:04"), y: 423 },
		{ x: new Date("October 12, 2016 17:15:26"), y: 847 },
          	{ x: new Date("October 12, 2016 17:25:42"), y: 950 },
		{ x: new Date("October 12, 2016 17:35:57"), y: 700 },
		{ x: new Date("October 12, 2016 17:46:22"), y: 750 } 
		];
  
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,  
 	animationDuration: 3000,   
  	zoomEnabled: true,
    zoomType: "xy",
	theme: "light2",
	title:{
		// text: "Site Traffic"
	},
  	axisX:{
		valueFormatString: "MMM DD, YYYY",
		crosshair: {
			enabled: true,
			snapToDataPoint: true,
            valueFormatString: "hh:mm:ss TT"
		}
	},
  
	axisY: {
        // title: "Revenue in USD",
		valueFormatString: "#0",
        gridDashType: "dash",
		stripLines:[     
		  {   
		    startValue:645,        // limits
			endValue:740,
            opacity: .4
		  },
			]
 	},
   
  	toolTip:{
	 // shared:true
	}, 
	data: [{
        // name: "Temp:",
		type: "splineArea",
		color: "#6492b7",
        lineThickness: 3,
		markerSize: 8,
		xValueFormatString: 'Value',
		yValueFormatString: "#,##0.## oC",
  
		dataPoints: data
      
	}]
	});
chart.render();

}
</script>
</head>
</html>

