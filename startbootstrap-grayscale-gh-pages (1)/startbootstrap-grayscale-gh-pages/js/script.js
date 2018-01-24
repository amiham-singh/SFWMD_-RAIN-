var getData = function(i) {
    var dataset = [
        [4, -22, 40, 107],
        [12,29,2,-11],
        [-5, -14, 49, 74],
        [-7,19,23,-6]
      
    ];
    if (!dataset[i]) {
        return dataset[0];
    }
    return dataset[i];
};

// Create dynamic desktop chart
var chart = $('.chart').highcharts({
      chart:{
                   backgroundColor: '#2a2a2a'                           
                         },
                   title:{
                            text: ''
                         },
                          credits: {
        enabled: false
    },
                   xAxis:{
                            plotLines:[{
                                         value:2011,
                                         color: '#000000',
                                         width:2,
                                         zIndex:4,
                                         label:{text:'2011'},
                                         dashStyle: 'Dash',
                                         gridLineWidth: 0
                                        }]
                          },
                            
                    yAxis: {
                            gridLineWidth: 0,
                            max: 110,
                            min:-25
                            },  
                   
                    legend: {
                                                
                            itemStyle: {
                                        color: '#ffffff',
                                        font: '12pt Trebuchet MS,sans-serif'
                                        }
                            },
                    

                    plotOptions: {
                        series: {
                            label: {
                                enabled: false
                            },
                            pointStart: 2009,
                             lineWidth: 3,
                              marker: {
                                radius: 5
                            }
                        }
                    },

                    series: [{
                        name: 'Heroin',
                        data: [-5, -14, 49, 74],
                        color: '#FF0000'
                              }, 
                              {
                        name: 'Oxycodone and similar Opioids ',
                        data: [-7,19,23,-6],
                        color: "#ffffff"
                               }],

                    tooltip: {
                                headerFormat: '<span style="font-size:14px;color: white">{point.key}</span><br>',
                                pointFormat: '<br><span style="color:{series.color};padding:0">{series.name}:</span> </br>' +
                                            '<span style="padding:0 ;color:{series.color}"><b>{point.y} %</b></span>',
                                        
                                useHTML: true,
                                backgroundColor: '#000000'
                              },
                    responsive: {
                                    rules: [{
                                              condition: {
                                                        maxWidth: 500
                                                         },
                                              chartOptions:{
                                                    legend: {
                                                                layout: 'horizontal',
                                                                align: 'center',    
                                                                verticalAlign: 'bottom'
                                                            }
                                                            }
                                            }]
                                },
                    
                    navigation: {
                                    buttonOptions: {
                                        enabled: false
                                                    }
                                }



}).highcharts();

// Create carousel for mobile
var carousel = $(".owl-carousel").owlCarousel({
    items: 1,
    onChanged: function(event) {
        console.log('Slide '+event.item.index+' triggered')
        var dex =  event.item.index+1;
        console.log('event index '+event.item.index+'other' + dex)
        var Hdata = getData(event.item.index);
        var Odata = getData(dex);
        chart.series[0].setData(Hdata);
        chart.series[1].setData(Odata);
    }
});

// Create new TwoStep instance
var ts = new TwoStep({
    elements: document.querySelectorAll('.desktop-narrative .narrative-item'),
    onChange: function(event) {
        console.log('Waypoint '+event.index+' triggered')
        var dex =  event.index+1;
        var Hdata = getData(event.index);
        var Odata = getData(dex);
        chart.series[0].setData(Hdata);
        chart.series[1].setData(Odata);
    },
    stick: document.querySelector('.rightcol'),
});

function checkSize() {
    // if desktop...
    if ($(window).width() > 700) {
        ts.enable();
        $('.narrative-item').css('padding-top', '');
    // if mobile...
    } else {
        ts.disable();
        $('.narrative-item').css('padding-top', chart.chartHeight);
    }
}

// Check current screen size
// and set up event listener for future changes
checkSize();
$(window).resize(checkSize);