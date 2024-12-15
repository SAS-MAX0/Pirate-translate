document.getElementById('getInsultButton').addEventListener('click', function() {
    const timestamp = new Date().getTime();
    const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://pirate.monkeyness.com/api/insult') + '&_=' + timestamp;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const insult = data.contents;
            document.getElementById('insultOutput').textContent = insult;
        })
        .catch(error => {
            console.error('Error fetching the pirate insult:', error);
            document.getElementById('insultOutput').textContent = 'Oops! Something went wrong.';
        });
});
