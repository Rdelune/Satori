System.register(['@angular/router', './mood-item-form.component', './mood-item-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, mood_item_form_component_1, mood_item_list_component_1;
    var appRoute, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mood_item_form_component_1_1) {
                mood_item_form_component_1 = mood_item_form_component_1_1;
            },
            function (mood_item_list_component_1_1) {
                mood_item_list_component_1 = mood_item_list_component_1_1;
            }],
        execute: function() {
            appRoute = [
                { path: 'add', component: mood_item_form_component_1.MoodItemFormComponent },
                { path: 'Make Entry', component: mood_item_form_component_1.MoodItemFormComponent },
                { path: 'Log', component: mood_item_list_component_1.MoodItemListComponent },
                { path: ':timeOfDay' },
                { path: '', pathMatch: '', redirectTo: 'all' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoute));
        }
    }
});
//# sourceMappingURL=app.routing.js.map