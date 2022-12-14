$(document).ready(function () {
    var intCounter = 1;
    var className = $('#interactive').attr("class");

    $('#interactive').dblclick(function () {

        var $objWindow = $('<iframe style="width:98.8%; min-width:98.8%; overflow: auto;" src="apps/interactive.html"></iframe>');

        $($objWindow).appendTo('body');
        $objWindow.window({

            title: className,
            width: 475,
            height: 680,
            position: {
                my: 'left+' + 200 + ', top+' + 200,
                at: 'left top',
                of: window
            },
            maximizable: true,
            minimizable: true,

            icon: '../src/jquery-lwd/themes/sophia/images/icons/14.png'
        });

        intCounter++;
    });

    $('#taskbar').taskbar();

    $('#theme').change(function () {
        $("head link#themecss").attr("href", $(this).val());
    });
});
