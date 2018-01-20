var container2 = d3.select('#scroll2');
		var graphic2 = container2.select('.scroll__graphic2');
		var text2 = container2.select('.scroll__text2');
		var step2 = text2.selectAll('.step2');
        // var fade = text.selectAll('.fade');
		// initialize the scrollama
		var scroller2 = scrollama();

		// generic window resize listener event
		function handleResize() {
			// 1. update height of step elements
			var stepHeight2 = Math.floor(window.innerHeight * 0.75);
			// step.style('height', stepHeight + 'px');

			// 2. update width/height of graphic element
			var bodyWidth2 = d3.select('body').node().offsetWidth;

			var graphicMargin2 = 16 * 4;
			var textWidth2 = text2.node().offsetWidth;
			var graphicWidth2 = container2.node().offsetWidth - textWidth2- graphicMargin2;
			var graphicHeight2 = Math.floor(window.innerHeight/2)
			var graphicMarginTop2 = Math.floor(graphicHeight2/2)

			graphic2
				.style('width', '100%')
				 .style('height', '100%')
				.style('top', graphicMarginTop2 + 'px');


			// 3. tell scrollama to update new element dimensions
			scroller2.resize();
		}

		// scrollama event handlers
		function handleStepEnter2(response) {
			// response = { element, direction, index }

			// add color to current step only
			step2.classed('is-active', function (d, i) {
				return i === response.index;
			})
   //          graphic.classed('is-active', function (d, i) {
			// 	return i === response.index;
			// })


			// update graphic based on step
			//graphic.select('img').attr("src",+ response.index +".jpg");

  
		 // FROM MIKE ↓
			 var stepname2 = response.element.getAttribute("data-step")


switch(stepname2){

        

        case '200':

            step2.select('img').attr('src','img/fb2.png');
            graphic2.select('div.graphictarget2').html('hey1');
            Highcharts.chart('container2', {
				   chart:{
				   backgroundColor: '#2a2a2a'					        
				  		 },
				   title:{
						    text: ''
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
				       		gridLineWidth: 0
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
				        data: [4, -22, 40, 107],
				        color: '#FF0000'
				    		  }, 
				    		  {
				        name: 'Oxycodone and similar Opioids ',
				        data: [12,29,2,-11],
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

				});


        break
       
        case '210':

            step2.select('img').attr('src','img/fb3.png');
            graphic2.select('div.graphictarget2').html('hey3');
            Highcharts.chart('container3', {
				   chart:{
				   backgroundColor: '#2a2a2a'					        
				  		 },
				   title:{
						    text: ''
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
				       		gridLineWidth: 0
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

				});


        break

         
        /*
        case 'something':
            graphic.select('div.graphictarget').html('some cool tags n stuff');
            some cool Javascripty stuff here
        break
        
        */		



          // FROM MIKE ↑
		         } 	
		}

		function handleContainerEnter2(response) {
			// response = { direction }
		}

		function handleContainerExit2(response) {
			// response = { direction }
		}

		function setupStickyfill2() {
			d3.selectAll('.sticky').each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill2();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller2.setup({
				container: '#scroll2',
				graphic: '.scroll__graphic2',
				text: '.scroll__text2',
				step: '.scroll__text2 .step',
				debug: true,
				offset: 0.33,
			})
				.onStepEnter(handleStepEnter2)
				.onContainerEnter(handleContainerEnter2)
				.onContainerExit(handleContainerExit2);

			// setup resize event
			window.addEventListener('resize', handleResize);
		}

		// kick things off
		init();