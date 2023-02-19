// https://www.amcharts.com/demos/line-with-changing-color

window.function = function (data, width, height) {

  // data
  data = data.value ?? "";
  width = width.value ?? 100;
  height = height.value ?? 500;
 
  let ht = `<!DOCTYPE html>
<html>
<head>  
<script>
window.onload = function () {

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
		color: "rgba(54,158,183,.7)",
        	lineThickness: 2,
		markerSize: 8,
		xValueFormatString: 'Value',
		yValueFormatString: "#,##0.## oC",
      
		dataPoints: [
			{ x: new Date("October 12, 2016 16:13:20"), y: 950 },
			{ x: new Date("October 12, 2016 16:13:43"), y: 700 },
			{ x: new Date("October 12, 2016 16:14:05"), y: 710 },
			{ x: new Date("October 12, 2016 16:14:21"), y: 658 },
			{ x: new Date("October 12, 2016 16:14:46"), y: 734 },
			{ x: new Date("October 12, 2016 16:15:04"), y: 963 },
			{ x: new Date("October 12, 2016 16:15:26"), y: 847 },
            		{ x: new Date("October 12, 2016 16:15:42"), y: 950 },
			{ x: new Date("October 12, 2016 16:15:57"), y: 700 },
			{ x: new Date("October 12, 2016 16:16:22"), y: 710 },
			{ x: new Date("October 12, 2016 16:16:42"), y: 658 },
			{ x: new Date("October 12, 2016 16:16:57"), y: 734 },
			{ x: new Date("October 12, 2016 16:17:19"), y: 963 },
			{ x: new Date("October 12, 2016 16:17:32"), y: 847 },
 			{ x: new Date("October 12, 2016 16:17:56"), y: 847 },
            		{ x: new Date("October 12, 2016 16:18:12"), y: 650 },
			{ x: new Date("October 12, 2016 16:18:37"), y: 700 },
			{ x: new Date("October 12, 2016 16:18:52"), y: 710 },
			{ x: new Date("October 12, 2016 16:19:10"), y: 658 },
			{ x: new Date("October 12, 2016 16:19:27"), y: 734 },
			{ x: new Date("October 12, 2016 16:19:49"), y: 963 },
			{ x: new Date("October 12, 2016 16:20:02"), y: 847 },        
		]
	}]
	});
chart.render();

}
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
