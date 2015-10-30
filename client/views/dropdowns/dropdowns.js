Template.dropdowns.onRendered(function () {
    $(document).foundation('dropdown', 'reflow');
});

Template.dropdowns.onDestroyed(function () {
    $(document).foundation('dropdown', 'off');
});