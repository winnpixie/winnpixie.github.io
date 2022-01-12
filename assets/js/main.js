(function () {
    'use strict';

    window.doPostInitTasks = () => {
        // Make external links open in a new tab.
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }

        // Retrieve my GitHub repositories and populate #repos with links and descriptions for them.
        let repoListElem = document.getElementById('repositories');
        window.fetch('https://api.github.com/users/suhtiva/repos').then(response => {
            if (response.ok) {
                // Convert the response to a JSON array.
                response.json().then(repositories => {
                    for (let repo of repositories) {
                        let repoElem = document.createElement('div');
                        repoElem.classList.add('repository');
                        repoElem.innerHTML = '<p class="repo-title">'
                            + `<a href="${repo.html_url}" target="_blank">${repo.name}</a></p>${repo.description}`;
                        repoListElem.appendChild(repoElem);
                    }
                });
            } else { // Something happened, but I'm not sure what.
                let errorElem = document.createElement('div');
                errorElem.innerText = 'An issue occured retrieving my repository list...';
                repoListElem.appendChild(errorElem);
            }
        }).catch(e => { // An exception was thrown, report it.
            let errorElem = document.createElement('div');
            errorElem.innerText = `The following error occured while retrieving my repository list...\n\n${e}`;
            repoListElem.appendChild(errorElem);
        });
    };
})();