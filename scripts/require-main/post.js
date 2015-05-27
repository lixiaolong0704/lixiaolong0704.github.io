
require.config({
    paths: {
        jquery: 'scripts/external/jquery-1.10.2.min',
        bootstrap: 'scripts/external/bootstrap.min',
        jsrender: 'scripts/external/jsrender.min',
        cleanblog: 'js/clean-blog.min',
        common: 'scripts/common'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: "bootstrap"
        },
        'jsrender': {
            deps: ['jquery'],
            exports: "jsrender"
        },
        "blogs": {
            exports: "blogs"
        },
        "cleanblog": {
            deps: ['jquery', 'bootstrap'],
            exports: "cleanblog"
        },
        "common": {
            deps: ['jquery', "jsrender"],
            exports: "common"
        }

    }
});

requirejs(['jquery', 'bootstrap', 'jsrender', "common"], function (a, b, c, d, e) {
    d.init();
    d.InitPost();
});