Template.magellan.onRendered(function () {

    // $(document).foundation('magellan', 'off');
    // there is weird problem with destination_threshold when we want to use reflow
    // so we need to pass settings:

    $(document).foundation({
        'magellan-expedition': {
            active_class: 'active',
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 50,
            fixed_top: 0,
            offset_by_height: true
        }
    });
});

Template.magellan.onDestroyed(function () {
    $(document).foundation('magellan', 'off');
});