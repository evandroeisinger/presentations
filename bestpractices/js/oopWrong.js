// Create users list
var users = new Array();

// Create users add method
function addUser(theName,theEmail){
    users.push({
        name : theName,
        email : theEmail,
        quizScores : []
    })
    var index = users.length
    if(index>0){
        index = users.length - 1    }
    return users[index]
}

// Add score to a user
function saveScore(user,theScoreToAdd){
    user.quizScores.push(theScoreToAdd)
}

// Show user scores
function showNameAndScores(user){
    var scores = "No Scores Yet"
    if(user.quizScores.length > 0){
        scores = user.name+" Scores: " + user.quizScores.join(",")
    }
    return scores
}

// Change user email
changeEmail = function(user,newEmail){
    user.email = newEmail
    return "New Email Saved: " + user.email
}

// Create a user
var novoUser = addUser("evandro","asdada@dsada.com")

console.log("Usuário: " + novoUser.name + " - " + novoUser.email)
console.log(showNameAndScores(novoUser))
saveScore(novoUser, 20)
saveScore(novoUser, 22)
console.log("results included")
console.log(showNameAndScores(novoUser))
console.log("Email: "+novoUser.email)
console.log("Novo email: "+changeEmail(novoUser, "novo@email.com"))