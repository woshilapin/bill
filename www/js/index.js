var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.menu = document.getElementById('menu');
        // There is a need to wait until Polyfill upgrades process
        function assignTabs() {
            if (!app.menu.tabs) {
                // call itself until ready
                return window.setTimeout(assignTabs, 100);
            }
            for (var i=0; i < app.menu.tabs.length; i++) {
                var tab = app.menu.tabs[i];
                tab.targetElement.tabElement = tab;
                tab.targetElement.addEventListener('show', function() {
                    this.tabElement.select();
                });
            }
        };
        assignTabs();
        
        // Implementing one finger swipe to change deck card
        
        app.content = document.getElementById('content');

        var startX = null;
        var slideThreshold = 100;

        function touchStart(sX) {
            startX = sX;
        }

        function touchEnd(endX) {
            var deltaX;
            if (startX) {
                deltaX = endX - startX;
                if (Math.abs(deltaX) > slideThreshold) {
                    startX = null;
                    if (deltaX > 0) {
                        app.previousCard();
                    } else {
                        app.nextCard();
                    }
                }
            }
        }

        app.content.addEventListener('touchstart', function(evt) {
            var touches = evt.changedTouches;
            console.log('1 finger down');
            if (touches.length == 1) {
                console.log('1 finger down');
                // runs only for one finger touch
                touchStart(touches[0].pageX);
            }
        });

        app.content.addEventListener('touchmove', function(evt) {
            console.log('finger moved');
            // switched off scrolling on webkit
            evt.preventDefault(); 
            touchEnd(evt.changedTouches[0].pageX);
        });
    },
    previousCard: function() {
        app.content.previousCard();
    },
    nextCard: function() {
        app.content.nextCard();
    }
};

window.onload = function() {
    app.initialize();   
}