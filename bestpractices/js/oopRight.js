function asdoiuadha(){

}
function asdoiuadha(){
    
}
var asdasda = function(){
    
}
function asdoiuadha(){
    
}
function asdoiuadha(){
    
}
function asdoiuadha(){
    
}
function asdoiuadha(){
    
}

app = {
    data : 123,
    method : function() {
        console.log(scode.data);
    }
},
scode = app,


// Create user "class" and users vector
var users = [],
	User  = function ( _name, _email ) {
	    this.name 		  = _name;
	    this.email 		  = _email;
	    this.scores       = [];
	    Users.push(this);
	}

// Extend user
User.prototype = {
    setScore : function ( _score ) {
        this.scores.push( _score );
    },
    show : function ()  {
        var scores = this.scores.length > 0 ? this.scores.join( "," ) : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    setEmail : function ( _email ) {
        this.email = _email;
        return "New Email Saved: " + this.email;
    }
}

// A user 
firstUser = new User( "Evandro", "evandro@evandroeisinger.com" ); 
firstUser.setEmail( "evandro@eisinger.com" );
firstUser.setScore( 15 );
firstUser.setScore( 10 ); 
firstUser.show();

// Another user
secondUser = new User( "Paulo", "pau@li.nho" );
secondUser.setScore( 18 );
secondUser.setScore( 18 );
secondUser.show();

console.log(Users);