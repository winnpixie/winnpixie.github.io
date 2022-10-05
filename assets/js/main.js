(function () {
    'use strict';

    window.doPostInitTasks = () => {
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }
    };
})();