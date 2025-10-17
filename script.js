window.addEventListener("DOMContentLoaded", () => {
  const jokeElement = document.getElementById("jokeElement");
  const nextJokeBtn = document.getElementById("nextJoke");

  function fetchJoke() {
    jokeElement.innerText = "Loading...";
    fetch("https://icanhazdadjoke.com/slack")
      .then((data) => data.json())
      .then((jokeData) => {
        const jokeText = jokeData.attachments[0].text;
        jokeElement.innerText = jokeText;
      })
      .catch(() => {
        jokeElement.innerText = "Oops! Couldn't load a joke 😅";
      });
  }

  nextJokeBtn.addEventListener("click", fetchJoke);
  fetchJoke();
});
