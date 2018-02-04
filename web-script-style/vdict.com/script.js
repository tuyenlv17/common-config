// Here You can type your custom JavaScript...
$(document).ready(function() {
    $(document).on('keydown', function () {
        console.log("keyword ");
        if(!$('#text-lookup').is(':focus')) {
            $('#text-lookup').focus();text-lookup
        }
    });
});