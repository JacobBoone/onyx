
// I want to post images within the proper place on the webpage (not having success with a simple file path)


// constructor
var ServiceItem = function(name, description, image){
	this.name = name;
	this.description = description;
	this.image = image;


}

//Headings
//with spans
// var hdBirth = $('<a id="bradleybirth-title" class="service-heading col-xs-2"</a>').text('Natural Birth');
// var hdPsychk = $('<span id="psychk-title" class="service-heading col-xs-2"></span>').text('Psych K');
// var hdOils = $('<span id="essentialoils-title" class="service-heading col-xs-2"></span>').text('Essential Oils');
// var hdAbout = $('<span id="about-title" class="service-heading col-xs-2"></span>').text('About Onyx');

// var hdBirth = $('<p id="bradleybirth-title" class="service-heading col-xs-2"></p>').text('Natural Birth').append(imgBirth);
// var hdPsychk = $('<p id="psychk-title" class="service-heading col-xs-2"></p>').text('Psych K').append(imgPsychk);
// var hdOils = $('<p id="essentialoils-title" class="service-heading col-xs-2"></p>').text('Essential Oils').append(imgOils);
// var hdAbout = $('<p id="about-title" class="service-heading col-xs-2"></p>').text('About Onyx').append(imgAbout);


// Declaring the images as objects
var imgBirth = $('<img id="bradleybirth" class="service-icon col-xs-2 img-responsive img-circle">').attr('src', '../stylesheets/images/earthmom.jpg');
var imgPsychk = $('<img id="psychk" class="service-icon col-xs-1 img-responsive img-circle">').attr('src', '../stylesheets/images/psychk.jpg');
var imgOils = $('<img id="essentialoils" class="service-icon col-xs-2 img-responsive img-circle">').attr('src', '../stylesheets/images/essentialoils.jpg');
var imgAbout = $('<img id="about" class="service-icon col-xs-1 img-responsive img-circle">').attr('src', '../stylesheets/images/aboutme.jpg');






// the written content for these images when clicked, to be run thru the constrcutor with the declared images above
var birth = new ServiceItem('bradleybirth','this is my description for birth', imgBirth);
var psych = new ServiceItem('psychk','this is my description psych k', imgPsychk);
var oils = new ServiceItem('essentialoils','this is my description for oils', imgOils);
var aboutme = new ServiceItem('about','this is my description about me', imgAbout);

// Declare array of the services.
var system = [birth, psych, oils, aboutme];



// // loop thru the array of system to display the image on the page
var putimagesonpage = function(arr){
	for (var i = 0; i < arr.length; i++) {
		$('#services').append(arr[i].image)
		if(i !== arr.length-1){
			$('#services').append('<i class="icon-right-big col-xs-1"></i>')		
		}	
	}
}




$(document).on('ready', function() {



		// putimagesonpage(system);


		// //this will show the var in the console with its attributes
		// $('.service-icon').click(function(){
		// 	var self =this;
		// 	$('#information').queue(function(){

		// 		console.log('work')				
		// 		var idVal= $(self).attr('id')
		// 		var output = _.findWhere(system,{name: idVal})
		// 			console.log(output)

		// 	})
			
		// });


//BELOW will put the pictures and descriptions on the page, Want to try and do separate pgaes instead

		putimagesonpage(system);


		$('#information').slideUp(800)
		
		$('.service-icon').click(function(){
			var self =this;
			$('#information').slideUp(800)
			$('#information').queue(function(){
				$('#information').empty()
				console.log('work')
				var info = $('<div class="container information"><div class="jumbotron desc-slide"><i class="icon-target-2 desc-close"></i><div class="row"><p class="col-xs-12 description"></p></div></div></div>')
				$('#information').append(info);

				
				var idVal= $(self).attr('id')
				var output = _.findWhere(system,{name: idVal})
					console.log(output)
				$('.description').append(output.description)
				$(this).dequeue()
// closes any info
				$('.desc-close').click(function(){
					$('#information').slideUp(800).empty()
				})

			})
			
			
			$('#information').slideDown(800)
		
			console.log("clicked")



		});





});

