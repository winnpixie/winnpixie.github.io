(function () {
    'use strict';

    window.initialize = () => {
        // Automagically grab my repositories and populate #repos with them.
        window.fetch('https://api.github.com/users/alerithe/repos').then(res => res.json().then(repos => {
            let reposArticle = document.getElementById('repos');
            for (let repo of repos) {
                let repoItem = document.createElement('li');
                repoItem.innerHTML = `<a href="${repo.html_url}">${repo.name}</a> - ${repo.description}`;
                reposArticle.appendChild(repoItem);
            }
        }));

        // Automagically make external site links open in a new tab.
        for (let link of document.getElementsByTagName('a')) {
            if (link.hostname !== location.hostname) {
                link.target = '_blank';
            }
        }

        // I really just wanted a sad method of in-HTML JavaScript execution so this is it.
        for (let xjs of document.getElementsByTagName('x-js')) {
            let output = eval(xjs.innerText);
            xjs.innerHTML = '';
            if (typeof output === 'string' || typeof output === 'number') {
                xjs.innerHTML = output;
            }
        }
    };
})();