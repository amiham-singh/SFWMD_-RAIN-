var container = d3.selectAll('#scroll');
		var graphic = container.selectAll('.scroll__graphic');
		var text = container.select('.scroll__text');
		var step = text.selectAll('.step');
        // var fade = text.selectAll('.fade');
		// initialize the scrollama
		var scroller = scrollama();

		// generic window resize listener event
		function handleResize() {
			// 1. update height of step elements
			var stepHeight = Math.floor(window.innerHeight * 0.75);
			step.style('height', stepHeight + 'px');

			// 2. update width/height of graphic element
			var bodyWidth = d3.select('body').node().offsetWidth;

			var graphicMargin = 16 * 4;
			var textWidth = text.node().offsetWidth;
			var graphicWidth = container.node().offsetWidth - textWidth - graphicMargin;
			var graphicHeight = Math.floor(window.innerHeight/2)
			var graphicMarginTop = Math.floor(graphicHeight/2)

			graphic
				.style('width', graphicWidth + 'px')
				.style('height', graphicHeight + 'px')
				.style('top', graphicMarginTop + 'px');


			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnter(response) {
			// response = { element, direction, index }

			// add color to current step only
			step.classed('is-active', function (d, i) {
				return i === response.index;
			})
   //          fade.classed('is-active', function (d, i) {
			// 	return i === response.index;
			// })


			// update graphic based on step
			//graphic.select('img').attr("src",+ response.index +".jpg");

  
		 // FROM MIKE ↓
			 var stepname = response.element.getAttribute("data-step")


switch(stepname){

        case '10': 
            graphic.select('div.graphictarget').html('<img src="https://www.ancestry.com/wiki/images/1/1a/Flordia_sil.png">');
            // text.style('width','40%');
        break
        case '321.5': 
            graphic.select('div.graphictarget').html('<img src="http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg">');
        break
        case '20': 
            graphic.select('div.graphictarget').html('<div id="container1" style="min-width: 100%; height: 100%; margin: 0 auto"></div>');
            Highcharts.chart('container1', {
				    chart: {
				       type: 'column',
				       backgroundColor: '#2a2a2a'
				        
				    },

					    legend: {
					        enabled: false
					    },

				    title: {
				        text: ''
				    },
				    subtitle: {
				        text: ''
				    },
				    xAxis: {
				        categories: [
				            'Florida',
				            "Rest of the us"
				        ],
				        
				    },
				    yAxis: {
				        min: 0,
				        title: {
				            text: 'No. Of Pills (Millions)'
				        },
				         gridLineWidth: 0
				    },
				    tooltip: {
				        headerFormat: '<span style="font-size:14px">{point.key}</span><br>',
				        pointFormat: '<span style="color:{series.color};padding:0">{series.name}:</span> </br>' +
				            '<span style="padding:0"><b>{point.y:.1f} million</b></span>',
				        shared: true,
				        useHTML: true
				    },
				    plotOptions: {
				    
				  series: {
				  borderWidth: 0,  
				  pointPadding: 0.25,
				  animation: {
                duration: 3000
                               }
				  },
				        
				  column: {
				  colorByPoint: true,
				   pointpadding: 0,
				   borderWidth: 0
				   }   
				  
				  
				       
				    },
				            
				    colors: [
				                '#9370db',
				                '#70b8db',
				                
				            ],
				    series: [{
				        name: 'Pills',
				        data: [40.8, 4.5]

				    }],


									 navigation: {
			        buttonOptions: {
			            enabled: false
			        }
			    }


				});


        break
       

 case '40': 

            graphic.select('div.graphictarget').html('');
step.select('img').attr('src','../sticky-js/finals maps/map/black-base.png');
   //          var bodyWidth = d3.select('body').node().offsetWidth;

			// var graphicMargin = 16 * 4;
			// var textWidth = text.node().offsetWidth;
			// var graphicWidth = container.node().offsetWidth - textWidth - graphicMargin;
			// var graphicHeight = Math.floor(window.innerHeight/2);
			// var graphicMarginTop = Math.floor(graphicHeight/2);
			// graphic.attr('style', 'width:' + graphicWidth + 'px !important; top:' + graphicMarginTop + 'px;');
	
        break
         case '50': 


             graphic.select('div.graphictarget').html('');
            // graphic.attr('style','width:100%; top:22rem;');
            step.select('img').attr('src','../sticky-js/finals maps/map/gif2.gif');
            // step.select('#region1').attr('style','opacity: 1');
            // step.select('#region2').attr('style','opacity: 1');
            // step.select('#region3').attr('style','opacity: 1');
            // step.select('#region4').attr('style','opacity: 1');
            // step.select('#region5').attr('style','opacity: 1');
        break

        case '60': 
             graphic.select('div.graphictarget').html('');
            // graphic.attr('style','width:100%; top:22rem;');
            step.select('img').attr('src','../sticky-js/finals maps/map/gif3.gif');
            // step.select('#region1').attr('style','opacity: 1');
            // step.select('#region2').attr('style','opacity: 1');
            // step.select('#region3').attr('style','opacity: 1');
            // step.select('#region4').attr('style','opacity: 1');
            // step.select('#region5').attr('style','opacity: 1');
        break


         case '30': 
                            step.select('img').attr('src','../sticky-js/finals maps/price.png');
        break

        case '70': 
                            step.select('img').attr('src','../sticky-js/finals maps/Heroin.png');
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

		function handleContainerEnter(response) {
			// response = { direction }
		}

		function handleContainerExit(response) {
			// response = { direction }
		}

		function setupStickyfill() {
			d3.selectAll('.sticky').each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller.setup({
				container: '#scroll',
				graphic: '.scroll__graphic',
				text: '.scroll__text',
				step: '.scroll__text .step',
				debug: true,
				offset: 0.33,
			})
				.onStepEnter(handleStepEnter)
				.onContainerEnter(handleContainerEnter)
				.onContainerExit(handleContainerExit);

			// setup resize event
			window.addEventListener('resize', handleResize);
		}

		// kick things off
		init();