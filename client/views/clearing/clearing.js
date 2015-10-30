Template.clearing.onRendered(function () {
    $(document).foundation('clearing', 'reflow');
});

Template.clearing.onDestroyed(function () {
    $(document).foundation('clearing', 'off');
});