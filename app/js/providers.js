//tells angular you want to have a concrete type that can be passed around
//export keyword so we can import it to the module.ts file
//string literal will eventually be used as the underlying token varaible
System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, lookupListToken, lookupLists;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            //tells angular you want to have a concrete type that can be passed around
            //export keyword so we can import it to the module.ts file
            //string literal will eventually be used as the underlying token varaible
            exports_1("lookupListToken", lookupListToken = new core_1.OpaqueToken('lookupListToken'));
            exports_1("lookupLists", lookupLists = {
                mediums: ['Stressors', 'Sleep'],
                timeOfDay: ['Morning', 'Afternoon', 'Night']
            });
        }
    };
});
//# sourceMappingURL=providers.js.map