$(document).ready(function(){
 var city = new Array(); //declare an empty array which will be used by our code later

 var inputs = ["NYC", "SF", "LA", "ATX", "SYD"] //inputs array
 var textDom = "";

 for (i = 0; i < 5; i++){
    textDom += "<option>" + inputs[i] + "</option>";
 }
  $("#city-type").append(textDom); //append options

	populateoptionAndImagePaths(); //Populate data on page load
  var optionName = "";


  $('#city-type').change(function()
    {
      /* setting currently changed option value to option variable */
      var optionName = $(this).find('option:selected').val();
      $('#image').css('backgroundImage','url(' + city[optionName] +')'); //Change the Background of Web Page
			$('p').text(optionName + ', Your Pix');
			$('form').css('opacity', "1");

      if (optionName == "Select a City") { //easter egg yum yum
        $("header").css("background","rgba(0,0,0, .0");
        $('h1').text('Darth Vader in Star Wars VII confirmed!');
        $('p').text('');
        $('form').css('opacity', ".0");
        window.onbeforeunload = function() {
        return "Are you sure you want to leave? Stay a bit for the music!";
        }
          setTimeout(function () { //delay then change img
            $('video').trigger('play').css("display", "block");//trailer
            $('h1').text('');
          }, 2500);
      }
    });



function populateoptionAndImagePaths(){ //This function prepopulates the data

	//Populate data for NYC
	city['NYC'] = 'images/nyc.jpg';

	//Populate Data for SF
	city['SF'] = 'images/sf.jpg';

	//Populate Data for LA
	city['LA'] = 'images/la.jpg';

	//Populate Data for Austin
	city['ATX'] = 'images/austin.jpg';

	//Populate Data for Sydney
	city['SYD'] = 'images/sydney.jpg';

  //Populate Data for Select
  city['Select a City'] = 'images/star-wars-wallpaper-4.jpg';

};
});
