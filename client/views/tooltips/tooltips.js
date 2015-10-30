Template.tooltips.onRendered(function () {
    $(document).foundation('tooltip', 'reflow');
});

Template.tooltips.onDestroyed(function () {
    $(document).foundation('tooltip', 'off');
});