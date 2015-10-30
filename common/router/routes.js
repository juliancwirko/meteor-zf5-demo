
// we need to close Off Canvas on route change
// this is needed with Meteor because we don't have here standard DOM reload
// it is very good that Foundation 5 has an API for this kind of situation. See:
// http://foundation.zurb.com/docs/components/offcanvas.html#programmatic-show-hide-toggle

const closeOffCanvas = () => {
    $('.off-canvas-wrap').foundation('offcanvas', 'hide', 'move-left');
}

// We can use our closing function in Flow Router triggers
FlowRouter.triggers.enter([closeOffCanvas]);

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'index'});
    }
});
FlowRouter.route('/joyride', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'joyride'});
    }
});
FlowRouter.route('/alerts', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'alerts'});
    }
});
FlowRouter.route('/block-grid', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'blockGrid'});
    }
});
FlowRouter.route('/breadcrumbs', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'breadcrumbs'});
    }
});
FlowRouter.route('/buttons', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'buttons'});
    }
});
FlowRouter.route('/switches', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'switches'});
    }
});
FlowRouter.route('/clearing', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'clearing'});
    }
});
FlowRouter.route('/forms', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'forms'});
    }
});
FlowRouter.route('/dropdowns', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'dropdowns'});
    }
});
FlowRouter.route('/flex-video', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'flexVideo'});
    }
});
FlowRouter.route('/typography', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'typography'});
    }
});
FlowRouter.route('/magellan', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'magellan'});
    }
});
FlowRouter.route('/orbit', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'orbit'});
    }
});
FlowRouter.route('/pagination', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'pagination'});
    }
});
FlowRouter.route('/panels', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'panels'});
    }
});
FlowRouter.route('/pricing-tables', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'pricingTables'});
    }
});
FlowRouter.route('/progress-bars', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'progressBars'});
    }
});
FlowRouter.route('/reveal', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'reveal'});
    }
});
FlowRouter.route('/sliders', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'sliders'});
    }
});
FlowRouter.route('/accordions', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'accordions'});
    }
});
FlowRouter.route('/tabs', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'tabs'});
    }
});
FlowRouter.route('/tables', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'tables'});
    }
});
FlowRouter.route('/thumbnails', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'thumbnails'});
    }
});
FlowRouter.route('/tooltips', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'tooltips'});
    }
});
FlowRouter.route('/top-bar', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'topBar'});
    }
});
FlowRouter.route('/visibility-classes', {
    action() {
        BlazeLayout.render('mainLayout', {contentTemplate: 'visibilityClasses'});
    }
});