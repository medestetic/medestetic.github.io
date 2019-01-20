/**
* app Module
*
* Description
*/
var app = angular.module('app', ["firebase"]);
app.controller('view', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
	var ref = new Firebase("https://gorda.firebaseio.com/mail");
	
	$scope.nombre = "";
	$scope.contacto = "";
	$scope.mensaje = "";

	var syncObject = $firebaseObject(ref);
	syncObject.$bindTo($scope, "data");

	$scope.save = function(nombre,correo,mensaje){
		$scope.data.contacto = {nombre: nombre, correo: correo, mensaje:mensaje};
		$('.uno').fadeOut();
		$('.dos').fadeIn();
	}


}])