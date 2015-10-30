Template.reveal.onRendered(function () {
    $(document).foundation('reveal', 'reflow');
});

Template.reveal.onDestroyed(function () {
    $(document).foundation('reveal', 'off');
});