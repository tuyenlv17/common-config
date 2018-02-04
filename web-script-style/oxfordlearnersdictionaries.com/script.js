$(document).ready(function() {
    $(document).on('keydown', function () {
        if(!$('#q').is(':focus')) {
            $('#q').focus();
        }
    });
});