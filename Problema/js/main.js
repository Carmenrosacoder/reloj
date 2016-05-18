/*$(document).ready(function(){
  $('#chicago').click(function(){
    $('h2').replaceWith("<h2>12:30</h2>");
    $('.left').append("Chicago");
    $('.right').append("12:30");
  });
*/
var array=[
	{
		pais:"Chicago",
		zonahoraria:-5,
	},{
		pais:"Sao Paulo",
		zonahoraria:-3,
	},{
		pais:"Santiago",
		zonahoraria:-4,
	}];
(function(){
	var actualizarHora = function(){
		var fecha = new Date();
			horas = fecha.getHours();
			minutos = fecha.getMinutes();
        var pHoras = document.getElementById('horas');
            pMinutos = document.getElementById('minutos');
            if (minutos < 10){ minutos = "0" + minutos; }
            pHoras.textContent = horas;
    		pMinutos.textContent = minutos;
	};
            actualizarHora();
	           var intervalo = setInterval(actualizarHora, 1000);
           }())

		   var gmt=horas+5;
		   $('#check').change(function(){
		    var i=$('#check').val();
		    if(i==1) {
		        $('#horas').html("hola")
			}

});
