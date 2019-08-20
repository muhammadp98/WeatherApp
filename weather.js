$(document).ready(function(){


	
	$('#submitWeather').click(function(){
		// var made to get user input
		var city = $("#city").val();
		
		if (city != ''){
			// ajax allows to update page and not reload whole page
			$.ajax({
				// + used to allow user input
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=7464c720e17e4f53b6e48c0ab9ae2ae8",
				type:"GET",
				dataType:"jsonp",
				success: function(data){
					var widget = show(data);
					
					$("#show").html(widget);
					
					$("#city").val('');
				}
				
			});
			
		}else{
			$("error").html('Field cannot be empty');
		}

	});
	
});
// shows the data and name of city
function show(data){
	var city = $("#city").val();
	
    if(data.weather[0].main == "Clouds") {
        document.getElementById("page-content").style.background = "url('https://images.wallpaperscraft.com/image/clouds_porous_sky_116078_1920x1080.jpg')";
    }else if(data.weather[0].main == "Mist") {
        document.getElementById("page-content").style.background = "url('https://i.redd.it/b4b10om1u6l01.jpg')";   
    }else if(data.weather[0].main == "Clear") {
        document.getElementById("page-content").style.background = "url('https://pbs.twimg.com/media/DS0PaGnV4AA-AZx.jpg')"; 
    }else if(data.weather[0].main == "Rain") {
        document.getElementById("page-content").style.background = "url('https://media.giphy.com/media/s7jtrnTOENxv2/giphy.gif')"; 
        document.getElementById("show").style.color = "white";
        document.getElementById("head").style.color = "white";
        document.getElementById("SubHead").style.color = "white";
    }else if(data.weather[0].main == "Thunderstorm") {
        document.getElementById("page-content").style.background = "url('http://cdn115.picsart.com/211719737000202.gif')"; 
    }else if(data.weather[0].main == "Haze") {
        document.getElementById("page-content").style.background = "url('https://img.etimg.com/thumb/msid-67322371,width-1200,height-900,resizemode-4,imgsize-583273/delhis-air-quality-remains-severe-on-new-year-eve.jpg')"; 
    }
	return "<br> <u><h1><strong>In " + city + " the weather is:</h1></strong></u>" +
	       "<h2><strong>Weather</strong>: "+ data.weather[0].main +"</h2>" +
	       "<h2><strong>Description</strong>: "+ data.weather[0].description +"</h2>" +
		   "<h2><strong>Temperature</strong>: " + data.main.temp +"</h2>" +
		   "<h2><strong>Pressure</strong>: " + data.main.pressure +"</h2>" +
		   "<h2><strong>Humidity</strong>: " + data.main.humidity +"</h2>" +
		   "<h2><strong>Minimum Temperature</strong>: " + data.main.temp_min +"</h2>" +
		   "<h2><strong>Maximum Temperature</strong>: " + data.main.temp_max +"</h2>" +
		   "<h2><strong>Wind Speed</strong>: " + data.wind.speed +"</h2>" +
		   "<h2><strong>Wind Degree</strong>: " + data.wind.deg + "</h2>";
        
    
}



	