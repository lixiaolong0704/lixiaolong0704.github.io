
require.config({
    paths: {
        jquery: 'scripts/external/jquery-2.0.3.min',
        bootstrap: 'scripts/external/bootstrap.min',
        jsrender: 'scripts/external/jsrender.min',
        cleanblog: 'js/clean-blog.min',
       
        //blogs: 'data/blogs.js',
        common: 'scripts/common'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: "Bootstrap"
        },
        "blogs": {
            exports: "blogs"
        },

        "common": {
            deps: ['jquery'],
            exports: "common"
        }

    }
});
//scripts/common.js    <script src="scripts/external/jsrender.min.js"></script>
requirejs(["jquery", "bootstrap", "jsrender", "common", "cleanblog"], function ($, s, _, c) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    c.init();
});
//require(['jquery'], function ($) {
//    alert($().jquery);
//});