$(document).ready(function() {
    console.log('start');
    $('#soundBegin')[0].play();
    console.log('exit');

    $('#startButton').click(function() {
        $('#soundBegin')[0].load();
    });
});
