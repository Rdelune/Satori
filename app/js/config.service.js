System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                //overall settings for my website
                Config.MAIN_HEADING = "what";
                Config.SUB_HEADING_1 = "THE FUCK";
                Config.CURRENTLY_SELECTED = 'WHAT';
                Config.SUB_HEADING_3 = "FOURTH";
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.service.js.map