$(document).ready(function() {
    var score = 0;
    var a = 0;
    setInterval(function() {
        a += 1;
        $('#counter').html('Timer ' + a);
        // if ((a = 60)) {
        // }
    }, 1000);

    setInterval(function() {
        var b = $.now();
        if (b % 2 === 0) {
            var a = getRandomInt(25);
            $('.tiles:nth-Child(' + a + ')').toggleClass('candidates');
        }
    }, 1000);

    $('.tiles').click(function() {
        if ($(this).hasClass('candidates')) {
            $(this).removeClass('candidates');
            score += 10;
            $('#score').html('Score: ' + score);
            var audio = $('#sound')[0];
            //  console.log(audio);
            audio.play();
        }
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});
