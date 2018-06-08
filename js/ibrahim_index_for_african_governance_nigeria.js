$(function() {
Highcharts.setOptions({
    lang: {
      numericSymbols: null,
      thousandsSep: ','
    },
  });
  var setFontsize = '20px';
  var setFontsizeLegend = '16px';
  var topMargin = 20;
  var axisMargin = 20;
  var rightMargin = 40;
  var rightMarginExtra = 200;
  var bgColor = '#252830';

//Chart Data
var ibrahim_index_for_african_governance_nigeria = [{
    name: 'Africa',
    data: [35.4, 35.5, 35.5, 35.6, 35.9, 36.2, 36.4, 37, 37.9, 37.2, 36.3, 36.4, 37.1, 36.2, 35.5],
    visible: true
}, {
    name: 'Nigeria',
    data: [24.4, 22.8, 21.2, 22.8, 24.6, 25.8, 26.6, 29.3, 33.9, 31.8, 31.3, 30.8, 32.4, 32, 32.2],
    visible: true
}];
//Make Chart
chart = new Highcharts.Chart({

    chart: {
        renderTo: 'ibrahim_index_for_african_governance_nigeria',
        marginRight: rightMarginExtra,
        marginTop: topMargin,
        backgroundColor: bgColor,
        zoomType: 'xy',


          type: 'line',


      alignTicks: false
    },
    legend: {
        layout: 'horizontal',
        itemStyle: {
            fontSize: setFontsizeLegend
        }
    },
    credits: false,
    title: false,
    xAxis: [{
        title: {
            style: {
                fontSize: setFontsizeLegend
            },
            margin: axisMargin
        },
        categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
        tickmarkPlacement: 'off',
        labels: {
            style: {
                fontSize: setFontsize
            }
        }
    }],
    yAxis: [{
        title: {
            text: 'Score/100',
            style: {
                fontSize: setFontsize
            },
            margin: axisMargin
        },
        max: 100,
        min: 0,
        tickInterval: 10,
        labels: {
            formatter: function() {
                return Highcharts.numberFormat(this.value, 0);
            },
            style: {
                fontSize: setFontsize
            }
        }
    }],
    tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<h5>{point.key}</h5>',
        pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br>',
        style: {
            fontSize: setFontsize
        }
    },
    plotOptions: {
        column: {
            dataLabels: {
                style: {
                    fontSize: setFontsize
                }
            },
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                fontSize: setFontsize
            }
        },
        series: {
            lineWidth: 4,
            marker: {
                fillColor: bgColor,
                radius: 6,
                lineWidth: 4,
                lineColor: null,
                states: {
                    hover: {
                        enabled: true,
                        radiusPlus: 4
                    }
                }
            },
            states: {
                hover: {
                    enabled: true,
                    lineWidthPlus: 2
                }
            }
        }
    },
    series: ibrahim_index_for_african_governance_nigeria,

		exporting: {
      filename: 'ibrahim_index_for_african_governance_nigeria',
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
    },
    navigation: {
     buttonOptions: {
       enabled: false
     }
   }
  });
  // button handler
  $('#chart-export').on('click', function() {chart.exportChart();});
});
