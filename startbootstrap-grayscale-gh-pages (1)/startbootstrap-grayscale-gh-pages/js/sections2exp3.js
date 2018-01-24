var container = d3.select('#scroll');
		var graphic = container.select('.scroll__graphic');
		var text = container.select('.scroll__text');
		var step = text.selectAll('.step');

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
			var graphicHeight = Math.floor(window.innerHeight / 2)
			var graphicMarginTop = Math.floor(graphicHeight / 2)

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

            // var stepname = d3.select('.is-active').attr("data-step");
            var stepname = response.element.getAttribute("data-step")


switch(stepname){
// insert JS-y section below




        case '10': 
            graphic.select('div.graphictarget').html('<img src="http://apps.mypalmbeachpost.com/eats/static/imghero/1.jpg">');
        break
        case '20': 
            graphic.select('div.graphictarget').html('<img src="http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg">');
        break
        case '321.5': 
            graphic.select('div.graphictarget').html('<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>');Highcharts.chart('container', {
                data: {
                    table: 'datatable'
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Data extracted from a HTML table in the page'
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: 'Units'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.point.y + ' ' + this.point.name.toLowerCase();
                    }
                }
            });            

        break
        case '50': 
            graphic.select('div.graphictarget').html('<h1><font size="300%">HEY!</font></h1>');
        break

        


        
        /*
        case 'something':
            graphic.select('div.graphictarget').html('some cool tags n stuff');
            some cool Javascripty stuff here
        break
        
        */


// Insert JS-y section above
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