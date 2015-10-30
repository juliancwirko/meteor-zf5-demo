Template.tabs.onRendered(function () {
    $(document).foundation('tab', 'reflow');
});

Template.tabs.onDestroyed(function () {
    $(document).foundation('tab', 'off');
});