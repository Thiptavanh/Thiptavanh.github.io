var year = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5,6.9,3.4,8,12,9];
	var ifr = [10,8,12,9,13,7.9];
	var province = ["VTE","PSL","SLV","LPB"];
	var pop = [820000,580000,620000,720000];

	var province2 = ["VTE","PSL","LNT","BOK","ODX","XBL","XEK","HOP","VTP","BKX","KHM","SVK","SVN","XEK","CHP","ATP","XSB"];
	var b_2019 = [4,5,7,4,9,7,9,6,7,10,5,6,15,4,2,11,4,2];
	var b_2020 = [6,7,9,6,11,9,11,8,9,12,7,8,17,6,4,13,6,4];

	//console.log(province2)


	//start chart1
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx,{
		type: "line", //chart type
		
		data:{
			//datasets and option
			labels: year,
			datasets: [{
				label:"GDP growth rate",
				data: gdp,
				borderColor:"#1b4d3e",
				fill:false,
				lineTension:0,

			}]

		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			legend:{
				display:false,
			}
		}


	});//end of my chart1
		//start chart2
	var ctx = document.getElementById("barchart");
	var barchart = new Chart(ctx,{
		type: "bar",//chart type bar
		
		data:{
			//datasets option
			labels: year,
			datasets: [{
				label:"Inflation rate",
				data: ifr,
				backgroundColor:["#aaf0d1","#66ddaa","#44d7a8","#3ab09e","#2f847c","#49796b"],

			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			legend:{
				display:false
			}
		}

			
			

		

	});//end of my chart2
	//start chart3
	var ctx = document.getElementById("piechart");
	var piechart = new Chart(ctx,{
		type: "pie",//chart type pie
	
		data:{
			//data option
			labels: year,
			datasets: [{
				label:"Inflation rate",
				data: ifr,
				backgroundColor:["#aaf0d1","#66ddaa","#44d7a8","#3ab09e","#2f847c","#49796b"],
			}]
		},
		options:{
			legend:{
				position:"left",
			}
		}
		
	});//end of my chart3
	var ctx = document.getElementById("pChart");
	var pChart = new Chart(ctx,{
		type: "horizontalBar",//chart type horizontalBar
		
		data:{
			labels: province,
			datasets: [{
				label: "population",
				data: pop,
				backgroundColor:["#aaf0d1","#66ddaa","#44d7a8","#3ab09e"],
			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					}
				}]
			},
			legend:{
				display:false,
			}
		}
	});
	
	var ctx = document.getElementById("bChart");
	var bChart = new Chart(ctx,{
		type: "bar",
		data:{
			labels: province2,
			datasets: [{
				label: "Birth rate 2019",
				data: b_2019,
				backgroundColor: "#00a86b"
			},
			{label: "Birth rate 2020",
				data: b_2020,
				backgroundColor: "#2f847c"

			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true
					}
				}]
			},
			legend:{
				labels:{
					fontColor:"#87a96b"


				}
			},
			fontSize:22,
		}

	});
