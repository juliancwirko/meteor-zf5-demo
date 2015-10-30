Template.joyride.onDestroyed(function () {
    $(document).foundation('joyride', 'off');
});

Template.joyride.events({
    'click #start-jr'(e) {
        e.preventDefault();
        $(document).foundation('joyride', 'start');
    }
});