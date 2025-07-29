(function () {
    'use strict';

    window.doInitTasks = () => {
        patchExternalAnchors();
    };

    const patchExternalAnchors = () => {
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) link.setAttribute('target', '_blank');
        }
    };
})();