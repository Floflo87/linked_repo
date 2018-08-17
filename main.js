$(document).ready(function() {
    var score = 0;
    var seconds = 0;
    var speed = 150;
    var tiFighterInterval;
    var chewiInterval;
    var yodaInterval;
    var deathStarInterval;

    setInterval(function() {
        seconds += 1;
        $('#counter').html('Timer: ' + seconds);
        if (seconds === 15) {
            setSpeed(250);
            setChewiInterval();
            $('#display')
                .fadeToggle(2000)
                .html('Level 1');
        }
        if (seconds === 30) {
            setSpeed(300);
            setDeathStarInterval();
            $('#display')
                .fadeToggle(2000)
                .html('Level 2');
        }
        // if (seconds === 45) {
        //     setSpeed(300);
        //     setDeathStarInterval();
        //     $('#display')
        //         .fadeToggle(2000)
        //         .html('Level 3');
        // }
        if (seconds === 45) {
            setSpeed(400);
            setYodaInterval();
            $('#display')
                .fadeToggle(2000)
                .html('Level 4');
        }
        // if (seconds === 60) {
        //     setSpeed(500);
        //     setYodaInterval();
        //     $('#display')
        //         .fadeToggle(2000)
        //         .html('Level 5');
        // }
        if (seconds === 60) {
            clearInterval(tiFighterInterval);
            $('.scoreboard').css('display', 'none');
            $('#playboard')
                .css('color', 'black')
                .html('Game 0ver: You have ' + score + 'points.')
                .append(
                    '<button id="buttonEnd"><a href="http://127.0.0.1:5500/index.html">Play again i want to. </a></button>'
                );
        }
    }, 1000);

    setTiFighterInterval();

    $('.tiles').click(function() {
        if ($(this).hasClass('tiFighter')) {
            $(this).removeClass('tiFighter');
            score += 10;
            $('#score').html('Score: ' + score);
            var audio = $('#sound')[0];
            audio.currentTime = 0;
            audio.play();
        }
        if ($(this).hasClass('chewi')) {
            $(this).removeClass('chewi');
            score -= 10;
            $('#score').html('Score: ' + score);
            var audio = $('#soundFail')[0];
            audio.currentTime = 0;
            audio.play();
        }
        if ($(this).hasClass('yoda')) {
            $(this).removeClass('yoda');
            score -= 50;
            $('#score').html('Score: ' + score);
            var audio = $('#yodaSound')[0];
            audio.currentTime = 0;
            audio.play();
        }
        if ($(this).hasClass('deathStar')) {
            $(this).removeClass('deathStar');
            score += 50;
            $('#score').html('Score: ' + score);
            var audio = $('#sound')[0];
            audio.currentTime = 0;
            audio.play();
        }
    });

    function setSpeed(speed) {
        speed = speed;
        setTiFighterInterval();
    }
    function setTiFighterInterval() {
        if (tiFighterInterval) clearInterval(tiFighterInterval);
        tiFighterInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.2;
            if (shouldPick) {
                var tiFighter = getRandomInt(25);
                // if ($('.tiles:nth-Child(' + tiFighter + ')').is('.chewi, .yoda, .deathStar')) {
                // } else {
                $('.tiles:nth-Child(' + tiFighter + ')')
                    .toggleClass('tiFighter')
                    .removeClass('chewi yoda deathStar');
                // }
            }
        }, 60000 / speed);
    }

    function setChewiInterval() {
        if (chewiInterval) clearInterval(chewiInterval);
        chewiInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.7;
            if (shouldPick) {
                var chewi = getRandomInt(25);
                if ($('.tiles:nth-Child(' + chewi + ')').is('.tiFighter, .yoda, .deathStar')) {
                } else {
                    $('.tiles:nth-Child(' + chewi + ')').toggleClass('chewi');
                }
            }
        }, 60000 / speed);
    }
    function setYodaInterval() {
        if (yodaInterval) clearInterval(yodaInterval);
        yodaInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.7;
            if (shouldPick) {
                var yoda = getRandomInt(25);
                if ($('.tiles:nth-Child(' + yoda + ')').is('.tiFighter, .chewi, .deathStar')) {
                } else {
                    $('.tiles:nth-Child(' + yoda + ')').toggleClass('yoda');
                }
            }
        }, 60000 / speed);
    }
    function setDeathStarInterval() {
        if (deathStarInterval) clearInterval(deathStarInterval);
        deathStarInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.5;
            if (shouldPick) {
                var deathStar = getRandomInt(25);
                if ($('.tiles:nth-Child(' + deathStar + ')').is('.tiFighter, .chewi, .yoda')) {
                } else {
                    $('.tiles:nth-Child(' + deathStar + ')').toggleClass('deathStar');
                }
            }
        }, 60000 / speed);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});
