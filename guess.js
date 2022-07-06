var systemguess = Math.floor(Math.random()*100) + 1

var guess = 0

console.log(systemguess);

function guessnumber() {
    guess++
    var num = parseInt(document.getElementById('in').value)
    if (num === ' ' || num > 100 || num < 1) {
        console.log('Input is invalid!');
    }
    console.log(typeof(num));

    if(num === systemguess) {
        console.log('Got the correct answer!');
        console.log('No. of guesses required::' + guess)
        document.getElementById('out').innerHTML = '<i>Got the correct answer!</i><br>It took you ' + guess + ' tries.'
    }

    else if(num > systemguess) {
        console.log('Guess a smaller number.');
        document.getElementById('out').innerText = 'Guess a smaller number.';
    }

    else if(num < systemguess) {
        console.log('Guess a greater number.');
        document.getElementById('out').innerText = 'Guess a greater number.';
    }
}

/* var data = document.getElementById('out')
console.log(data.innerText);
console.log(data.innerHTML); */