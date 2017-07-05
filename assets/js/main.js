$(document).ready(function(){
	var imageItem = $('.slider li').length; //Números de slides
	var imagePos = 1;

	//Agregando paginación (círculos debajo de la imagen)
	for(var i = 1; i <= imageItem; i++){
		$('.pagination').append('<li><i class="fa fa-circle"></i></li>');
	}

	$('.slider li').hide();//Ocultar slides
	$('.slider li:first').show(); //Mostramos el primer slide

	//Funcion next
	$('.right span').click(nextSlider);

	setInterval(function(){
		nextSlider();
	},5000);

	//Función slide circulos inferiores
	$('.pagination li').click(function(){
		var position = $(this).index() + 1; //Posición de la paginación seleccionada
		$('.slider li').hide(); //ocultar slide
		$('.slider li:nth-child('+ position +')').fadeIn(); //mostrar slide seleccionado

		//estilos 
		$('.pagination li').css({'color':'#858585'});
		$(this).css({'color':'#2A68A4'});

		imagePos = position;
	});

	// Función next para cambiar el slide la que siguiente
	function nextSlider(){
		if(imagePos >= imageItem){
			imagePos = 1;
		}else{
			imagePos++;
		}

		//estilos 
		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imagePos +')').css({'color':'#2A68A4'});

		$('.slider li').hide(); //ocultar slide
		$('.slider li:nth-child('+ imagePos +')').fadeIn(); //mostrar slide seleccionado
	};

	$('.left span').click(function(){
		if(imagePos <= 1){
			imagePos = imageItem;
		}else{
			imagePos--;
		}

		//estilos 
		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imagePos +')').css({'color':'#2A68A4'});

		$('.slider li').hide(); //ocultar slide
		$('.slider li:nth-child('+ imagePos +')').fadeIn(); //mostrar slide seleccionado
	});
});