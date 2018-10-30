$('.current-time').text(moment().format('LT'));
var zubizi = {
    greetUser: function() {
        var hour = moment().format('H');
        if (hour < 12) {
            $('.current_greet').text('Good Morning');
        } else if (hour == 12) {
            $('.current_greet').text('Good Noon');
        } else if (hour < 17) {
            $('.current_greet').text('Good Afternoon');
        } else {
            $('.current_greet').text('Good Evening');
        }
    }
};
zubizi.greetUser();
setInterval(function() {
    $('.current-time').text(moment().format('LT'));
    zubizi.greetUser();
}, 1000);
(function() {
    var greet_name;
    if (localStorage.greet_name) {
        greet_name = localStorage.greet_name;
    } else {
        greet_name = "Your Name";
    }
    $('.greet_name').text(greet_name);

    $('.greet_name').on('keyup', function() {
        localStorage.greet_name = $(this).text();
    });

    $('.greet_name').on('dblclick', function() {
        $(this).attr('contenteditable', "true").focus();
    });
})();

// setInterva