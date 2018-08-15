$(document).ready(function() {
    var score = 0;
    var seconds = 0;
    var speed = 80;
    var candidatesInterval;
    var antiCandidatesInterval;
    // hello
    setInterval(function() {
        seconds += 1;
        $('#counter').html('Timer: ' + seconds);
        if (seconds === 15) {
            setSpeed(120);
            setAntiCandidatesInterval();
            $('#display')
                .fadeToggle(2000)
                .html('Level 1');
        }
        if (seconds === 30) {
            setSpeed(250);
            $('#display')
                .fadeToggle(2000)
                .html('Level 2');
        }
        if (seconds === 45) {
            setSpeed(200);
            $('#display')
                .fadeToggle(2000)
                .html('Level 3');
        }
        if (seconds === 60) {
            setSpeed(400);
            $('#display')
                .fadeToggle(2000)
                .html('Level 4');
        }
        if (seconds === 60) {
            setSpeed(400);
            $('#display')
                .fadeToggle(2000)
                .html('Level 5');
        }
        if (seconds === 75) {
            setSpeed(400);
            $('#display')
                .fadeToggle(2000)
                .html('Level 6');
        }
        if (seconds === 90) {
            setSpeed(400);
            $('#display')
                .fadeToggle(2000)
                .html('Level 7');
        }
        if (seconds === 100) {
            clearInterval(candidatesInterval);
            $('.scoreboard').css('display', 'none');
            $('#playboard')
                .css('color', 'black')
                .html('Game Over: Du hast ' + score + 'Punkte erreicht.')
                .append(
                    '<button id="buttonEnd"><a href="http://127.0.0.1:5500/index.html">Nochmal</a></button>'
                );
        }
    }, 1000);

    setCandidateInterval();

    $('.tiles').click(function() {
        if ($(this).hasClass('candidates')) {
            $(this).removeClass('candidates');
            score += 10;
            $('#score').html('Score: ' + score);
            var audio = $('#sound')[0];
            audio.currentTime = 0;
            audio.play();
        }
        if ($(this).hasClass('antiCandidates')) {
            $(this).removeClass('antiCandidates');
            score -= 10;
            $('#score').html('Score: ' + score);
            var audio = $('#soundFail')[0];
            audio.currentTime = 0;
            audio.play();
        }
    });

    function setSpeed(speed) {
        speed = speed;
        setCandidateInterval();
        setAntiCandidatesInterval();
    }
    function setCandidateInterval() {
        if (candidatesInterval) clearInterval(candidatesInterval);
        candidatesInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.3;
            if (shouldPick) {
                var candidate = getRandomInt(25);
                $('.tiles:nth-Child(' + candidate + ')').toggleClass('candidates');
            }
        }, 60000 / speed);
    }

    function setAntiCandidatesInterval() {
        if (antiCandidatesInterval) clearInterval(antiCandidatesInterval);
        antiCandidatesInterval = setInterval(function() {
            var shouldPick = Math.random() > 0.3;
            if (shouldPick) {
                var antiCandidate = getRandomInt(25);
                if ($('.tiles:nth-Child(' + antiCandidate + ')').hasClass('candidates')) {
                } else {
                    $('.tiles:nth-Child(' + antiCandidate + ')').toggleClass('antiCandidates');
                }
            }
        }, 60000 / speed);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
});
