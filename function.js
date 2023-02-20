// https://canvasjs.com/html5-javascript-spline-area-chart/

window.function = function (data, width, height, lim_values) {

  data = data.value ?? "";
  width = width.value ?? 100;
  height = height.value ?? 500;
  limits = lim_values ?? "";
 
  let ht = `<!DOCTYPE html>
<html>
<head>  
<script>
//window.onload = function () {

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
		    	startValue:645,        // Limits
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
     
     		//   *** The data sent from Glide ***
		//   var data = [ ${data} ];
	 	// dataPoints: [ ${data} ]
		
		dataPoints: [
			{ x: new Date("October 12, 2016 16:13:20"), y: 950 },
			{ x: new Date("October 12, 2016 16:13:43"), y: 700 },
			{ x: new Date("October 12, 2016 16:14:05"), y: 710 },
			{ x: new Date("October 12, 2016 16:14:21"), y: 658 }      
		]
	}]
	});
chart.render();

//}

</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html>`

 let enc = encodeURIComponent(ht);
 let uri = `data:text/html;charset=utf-8,${enc}`
 return uri; 
}   
