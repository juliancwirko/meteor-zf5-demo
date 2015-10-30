Template.buttons.onRendered(function () {
    $(document).foundation('dropdown', 'reflow');
});

Template.buttons.onDestroyed(function () {
    $(document).foundation('dropdown', 'off');
});