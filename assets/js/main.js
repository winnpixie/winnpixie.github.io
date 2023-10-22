(function () {
    'use strict';

    window.doInitTasks = () => {
        patchExternalAnchors();
    };

    const patchExternalAnchors = () => {
        for (let anchorElem of document.getElementsByTagName('a')) {
            if (anchorElem.hostname === location.hostname) continue;

            anchorElem.setAttribute('target', '_blank');
        }
    };
})();