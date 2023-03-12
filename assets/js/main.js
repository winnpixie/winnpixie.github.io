(function () {
    'use strict';

    window.doInitTasks = () => {
        console.time('init_tasks');

        patchExternalAnchors();

        console.timeEnd('init_tasks');
    };

    const patchExternalAnchors = () => {
        for (let anchorElem of document.getElementsByTagName('a')) {
            if (anchorElem.hostname === location.hostname) continue;

            anchorElem.setAttribute('target', '_blank');
        }
    };
})();