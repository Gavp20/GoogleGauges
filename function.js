// https://canvasjs.com/html5-javascript-spline-area-chart/
window.function = function (labelList, label1Val, label2Val, label3Val) {

// data
 
labelList = labelList.value ?? "";
label1Val = label1Val.value ?? 0;		
label2Val = label2Val.value ?? 0;		
label3Val = label3Val.value ?? 0;		
 	
// Retrieve the Threshold values for Chart
let labelList = labelList.split("-");	 
let label1Val =	+label1Val.split("-")[0];
let label1Val =	+label1Val.split("-")[0];	
	
//   let limBottom = +limits.split("-")[0];	// The plus operator (+) converts a string into a number directly. 
//  let limTop = +limits.split("-")[1];	
	
let ht = `<!DOCTYPE html>
<html>
  <head>
   <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
   <script type="text/javascript">
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', {Val1}*0.7],
          ['CPU', {Val2}*0.7],
          ['Network', {Val3}*0.7]
        ]);

        var options = {
          width: 180, height: 350,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5,
          animation:{
             duration: 4000,
       	     easing: 'out'},      
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

 
          data.setValue(0, 1,{Val1});
          chart.draw(data, options);
 
 
          data.setValue(1, 1, {Val2}*0.7);
          chart.draw(data, options);
 
 
          data.setValue(2, 1, 60 + {Val3}*0.7);
          chart.draw(data, options);
 
      }
    </script>
  </head>
  <body>
     <div id="chart_div" align='center' style="width: 300px; height: 400px; padding: 30px 00; background-color:blackX;"></div>
  </body>
</html>`

let enc = encodeURIComponent(ht);
let uri = `data:text/html;charset=utf-8,${enc}` ;
return uri; 
}
