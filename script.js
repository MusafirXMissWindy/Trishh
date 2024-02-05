function unlock() {
    var codeInput = document.getElementById('codeInput').value;
    if (codeInput === '1431') {
        window.location.href = 'page2.html';
        document.getElementById('mainContainer').style.display = 'none'; // Hide the main container
        document.getElementById('successContainer').style.display = 'block'; // Show the success container
    } else {
        alert('I thought you will guess it at once!Sehh, Anyway Think again its a 4 digit number');
    }
}



