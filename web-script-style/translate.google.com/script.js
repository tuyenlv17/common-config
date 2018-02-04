$(document).ready(function() {
    $(document).on('keydown', function () {
        if(!$('#source').is(':focus')) {
            $('#source').val("");
            $('#source').focus();
        }
    });
});