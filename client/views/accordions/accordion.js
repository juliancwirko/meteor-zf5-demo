Template.accordions.onRendered(function () {
    // $(document).foundation('accordion', 'reflow');
    // reflow don't work for accordions :/ don't know why
    $(document).foundation({
        accordion: {
            content_class: 'content',
            active_class: 'active',
            multi_expand: true,
            toggleable: true
        }
    });
});

Template.accordions.onDestroyed(function () {
    $(document).foundation('accordion', 'off');
});