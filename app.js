function check()
{
    var score = 0;

    var a = document.getElementById('Ram');

    if (a.checked==true)
    {
        alert("Q1 Correct");
        score += 10;
    }
    else {
        alert("Q1 Incorrect");
    }
    var b = document.getElementById("Rom");

    if (b.checked==true)
    {
        alert("Q2 Correct");
        score+=10;
    }
    else {
        alert("Q2 Incorrect");
    }
    alert("Your Final Score Is: " + score);
    
    window.location.reload();
}

