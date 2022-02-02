(function () {
    'use strict';

    window.doPostInitTasks = () => {
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }

        let repoListElem = document.getElementById('repositories');
        window.fetch('https://api.github.com/users/tivuhh/repos', {
            headers: { "User-Agent": navigator.userAgent + " (tivuhh.github.io)" }
        }).then(response => {
            if (response.ok) {
                response.json().then(repositories => {
                    for (let repo of repositories) {
                        let repoElem = document.createElement('div');
                        repoElem.classList.add('repository');
                        repoElem.innerHTML = '<p class="repo-title">'
                            + `<a href="${repo.html_url}" target="_blank">${repo.name}</a></p>${repo.description}`;
                        repoListElem.appendChild(repoElem);
                    }
                });
            } else {
                let errorElem = document.createElement('div');
                errorElem.innerText = 'An issue occured retrieving my repository list...';
                repoListElem.appendChild(errorElem);
            }
        }).catch(e => {
            let errorElem = document.createElement('div');
            errorElem.innerText = `The following error occured while retrieving my repository list...\n\n${e}`;
            repoListElem.appendChild(errorElem);
        });
    };
})();