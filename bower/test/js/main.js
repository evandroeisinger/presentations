
var source  = "<h1>{{app}}<span>.{{type}}</span></h1>";
    source += "<p style='text-align: center;'><img style='width: 60%;' src='{{img}}' border='0'></p>";
    source += "<p>{{desc}}</p>";

var template = Handlebars.compile(source);

var data = { 
		"app"  : "Bower",
		"type" : "js",
		"img"  : "http://bower.io/img/bower-logo.png",
        "desc" : "A package manager for the web."
    }

document.getElementById("main").innerHTML = template(data);