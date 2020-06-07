(function () {
    'use strict';

    window.initialize = () => {
        // Automagically grab my repositories and populate #repos with them.
        let repoList = document.getElementById('repos');
        window.fetch('https://api.github.com/users/alerithe/repos').then(response => {
            repoList.children[0].remove();

            if (response.ok) {
                response.json().then(repos => {
                    for (let repo of repos) {
                        let repoItem = document.createElement('li');
                        repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}`;
                        repoList.appendChild(repoItem);
                    }
                });
            } else {
                let errorMessage = document.createElement('li');
                errorMessage.innerText = "There was an issue grabbing the repository list...";
                repoList.appendChild(errorMessage);
            }
        });

        // Automagically make external site links open in a new tab.
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }
    };
})();