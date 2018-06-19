$(function() {

//   button handler
$('#chart-render').on('click', function() {
    // var label = ($("#chart-name").val())
    // console.log(label);
    // $("#export_chart_wrapper")[0].innerHTML = '<div id='+label+' class="chart"></div>'
    var export_options= `$(function() {
        Highcharts.setOptions({
          exporting:{
               filename: 'chart_output',
               type: 'image/png',
               width: 600,
               height: 600,
                     scale:1,
               chartOptions: {
                 chart: {
                   width:560,
                   height:560,
                   marginLeft: 20,
                   marginRight: 20,
                   marginTop: 20,
                   marginBottom: 20,
                 },
                         yAxis:[{
                   gridLineWidth: 1,
                   lineWidth: 0,
                   tickLength: 0,
                   title: {
                     enabled: false,
                     margin: null
                           },
    
                   min: 0,
                   tickInterval: 140,
                           labels: {
                     enabled: false
                           }
                 },{
                           opposite: true,
                   gridLineWidth: 1,
                   lineWidth: 0,
                   tickLength: 0,
                           title: {
                     enabled: false,
                     margin: null
                           },
    
                   min: 0,
                   tickInterval: 50,
                           labels: {
                     enabled: false
                           }
                         }],
                         xAxis: {
    
                   tickWidth: 0,
                             title: {
                                 enabled: false
                               },
                             labels: {
                                 enabled: false
                             },
                             labels: {
                                 enabled: false
                             },
                         },
                 dataLabels: {
                   enabled: false
                 },
                 legend:{
                   enabled: false
                 },
                 title:{
                   text: ''
                 },
                 plotOptions: {
                   series: {
                     dataLabels: {
                       enabled: false
                     },
                     lineWidth: 2,
                     marker: {
                       radius: 4,
                       lineWidth: 2
                     },
                   }
                 },
                 fallbackToExportServer: false
               }
             }});
        });`
    var chart_code = export_options+($("#code").val());
    eval(chart_code);

});

  $('#chart-export').on('click', function() {

    $("#export_chart").highcharts().exportChart();
    });
});
