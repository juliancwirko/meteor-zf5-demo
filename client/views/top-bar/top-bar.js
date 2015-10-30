Template.topBar.onRendered(function () {
    $(document).foundation('topbar', 'reflow');
});

Template.topBar.onDestroyed(function () {
    $(document).foundation('topbar', 'off');
});