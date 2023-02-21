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
     <div id="chartContainer" style="height: ${height}px; width: 100%;"></div>
     <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
	
<script>
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
        	lineThickness: 2,
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
