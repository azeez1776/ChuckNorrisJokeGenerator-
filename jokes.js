document.querySelector(".get_jokes").addEventListener('click', getJokes);

function getJokes(e) {

    const xhr = new XMLHttpRequest();

    let number = document.querySelector("#number").value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function () {
        if (this.status === 200) {
            let jokes = JSON.parse(this.responseText);

            let output = '';
            if (jokes.type == 'success') {
                jokes.value.forEach(function (joke) {


                    output += `<ul>
                            <li>${joke.joke}</li>
                      </ul>`;
                }
                )
            }
            else {
                output += "error occured";
            }

            document.querySelector(".content").innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}