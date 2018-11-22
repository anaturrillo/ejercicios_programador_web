$(document).ready(function(){



	var searchStudent = function(name, list) {
		var resultado;
		for (var i = 0; i < list.length ; i++) {
			if( studentsList[i].firstName == name ){
				resultado = i
			}
		}
		return resultado;
	};

	var studentsList = [
	  {
	    firstName: 'Juan',
	    lastName: 'Pérez',
	    dni: 45678987
	  },
	  {
	    firstName: 'Ana',
	    lastName: 'Fernandez',
	    dni: 45678989
	  },
	  {
	    firstName: 'Pedro',
	    lastName: 'Mármol',
	    dni: 45678956
	  },
	  {
	    firstName: 'Pablo',
	    lastName: 'Picapiedras',
	    dni: 45678983
	  }
	];

	var button = $('#enviar');

	button.click(function(){
		var name = $('#nombre').val();
		$('#resultado').html(searchStudent(name, studentsList))
		
	})

});