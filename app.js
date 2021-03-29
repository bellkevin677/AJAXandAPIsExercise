// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);

function question1() {const jokeJS1 = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const set = JSON.parse(jokeJS1)
p1.innetText = set.setup;
};
question1();

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

async function displayRandomJoke1(){
    try {
        const joke = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        console.log(`Axios Example 3 Was Successful`);
        // Displays some data on the webpage
        h1.innerText = joke.data.setup
        h2.innerText = joke.data.punchline
    } catch (err) {
        console.log(`Axios Exampe 3 Was NOT Successful`);
        console.log(err);
    }
}
displayRandomJoke1();
// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);