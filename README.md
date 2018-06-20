#### A HighChartJS export thumbnail tool to generate custom 600x600 png files
https://risatino.github.io/png-tool/

This is as a stand alone tool. 

1. Insert the following between your __Chart Data__ and __Make Chart__

HighCharts setOptions

`Highcharts.setOptions({lang: {numericSymbols: null,thousandsSep: ','},});var setFontsize = '20px';var setFontsizeLegend = '22px';var       topMargin = 20;var axisMargin = 20;var rightMargin = 200;var bgColor = '#252830';`

`series: __minorities_jail_ada__`

2. Change your series variable to match the HighCharts setOptions

3. Change your ```#chart-id-name``` to ```#export_chart``` to download a chart_output.png

4. Rename your chart_output.png so you can make a new chart again.
