(function () {
    'use strict';

    window.initialize = () => {
        // Automagically grab my repositories and populate #repos with them.
        window.fetch('https://api.github.com/users/alerithe/repos').then(res => res.json().then(repos => {
            let reposList = document.getElementById('repos');
            for (let repo of repos) {
                let repoItem = document.createElement('li');
                repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}`;
                reposList.appendChild(repoItem);
            }
        }));

        // Automagically make external site links open in a new tab.
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }
    };
})();