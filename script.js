document.getElementById('get-joke').addEventListener('click', getJoke);
document.getElementById('get-multiple-jokes').addEventListener('click', getMultipleJokes);

async function getJoke() {
    try {
        const reponse = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await reponse.json();

        const joke = `${data.setup} - ${data.punchline}`;
        document.getElementById('joke').innerText = joke;
    } catch(error) {
        document.getElementById('joke').innerText = 'Ops Something went wrong! Try Again';
        console.error('Error fetching Jokes', error);
    }
}

async function getMultipleJokes() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        const data = await response.json();

        let jokes = '';
        data.forEach(joke => {
            jokes += `${joke.setup} - ${joke.punchline}\n\n`;
        });
        document.getElementById('joke').innerText = jokes;
    }catch (error) {
        document.getElementById('joke').innerText = 'Ops Something went wrong! Try Again';
        console.error('Error fetching Jokes', error);
    }
}


