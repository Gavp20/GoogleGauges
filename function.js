// https://canvasjs.com/html5-javascript-spline-area-chart/
window.function = function (labelList, label1Val, label2Val, label3Val) {

// data
	
labelList = labelList.value ?? ",,";	
label1Val = label1Val.value ?? "0|";		
label2Val = label2Val.value ?? "0|";		
label3Val = label3Val.value ?? "0|";
		
	+limits.split("-")[0];
	
// Retrieve values for Chart
let labelLista = labelList.split(",");	
let labelVal1 =	label1Val.split("|")[0];    // The plus operator (+) converts a string into a number directly.
let labelVal2 =	label2Val.split("|")[0];	
let labelVal3 =	label3Val.split("|")[0];
	
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
          ['${labelLista[0]}', ${labelVal1}*0.7],
          ['${labelLista[1]}', ${labelVal2}*0.7],
          ['${labelLista[2]}', ${labelVal3}*0.7]
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
	
        data.setValue(0, 1, ${labelVal1});
        chart.draw(data, options);
        data.setValue(1, 1, ${labelVal2});
        chart.draw(data, options);
        data.setValue(2, 1, ${labelVal3});
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
     <div id="chart_div" align='center' style="width: 300px; height: 400px; padding: 30px 00;"></div>
  </body>
</html>`

let enc = encodeURIComponent(ht);
let uri = `data:text/html;charset=utf-8,${enc}` ;
return uri; 
}
