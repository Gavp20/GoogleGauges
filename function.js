// https://canvasjs.com/html5-javascript-spline-area-chart/
window.function = function (data, limits, unit, height) {

// data
data = data.value ?? "";
limits = limits.value ?? "0-0";		
unit = unit.value ?? "";
height = height.value ?? 300;
	
// Retrieve the Threshold values for Chart
let limBottom = +limits.split("-")[0];	// The plus operator (+) converts a string into a number directly. 
let limTop = +limits.split("-")[1];	
	
let ht = `<!DOCTYPE html>
<html>
<head>  
<body>
     <div id="chartContainer" style="height: 300px; width: 100%;"></div>
     <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
	
<script>
/*	var data= [
		{ x: new Date("October 12, 2016 16:11:41"), y: 950 },
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
 */ 
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,  
 		animationDuration: 3000,   
  		zoomEnabled: true,
		zoomType: "xy",
		theme: "light2",
		title:{
	   	 // text: "Temp/Pressure Values"
	},
  	axisX:{
		reversed: true,
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
		    	startValue: ${limBottom},        // limits -> Threshold values
	 		endValue: ${limTop},
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
		yValueFormatString: "#,##0.## ${unit}",
  
		dataPoints: [ ${data} ]  
	}]
	});
	chart.render();

</script>
</head>
</html>`

let enc = encodeURIComponent(ht);
let uri = `data:text/html;charset=utf-8,${enc}` ;
return uri; 
}
