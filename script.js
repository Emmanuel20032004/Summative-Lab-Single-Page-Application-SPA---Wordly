// public dictionary url
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// import html tags
const form = document.getElementById("word-search");
const display = document.getElementById("display");
const nameDisplay = document.getElementById("searched-name");
const audioDisplay = document.getElementById("word-audio");
const phoneticsDisplay = document.getElementById("phonetic");
const meaningsDisplay = document.getElementById("meanings");
const playButton = document.getElementById("audio-button");

// add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const wordInput = document.getElementById("word-search-input");
  const word = wordInput.value.trim();

  fetchWordMeaning(word);
  wordInput.value = "";
});

// fetch function

async function fetchWordMeaning(word) {
  try {
    const response = await fetch(`${url}${word}`);
    const data = await response.json();

    if (!response.ok) {
      displayErrors(data);
      return;
    }
    console.log("Past this");

    meaningsDisplay.innerHTML = "";
    playButton.classList.remove("is-audio");
    playButton.disabled = true;

    displayMeaning(data);
  } catch (error) {
    console.log("Error is:", error.message);
  }
}

// display the errors
function displayErrors(data) {
  meaningsDisplay.innerHTML = "";
  nameDisplay.innerHTML = "";
  phoneticsDisplay.innerHTML = "";
  audioDisplay.src = "";
  playButton.classList.remove("is-audio");
  playButton.classList.remove("is-playing");
  playButton.disabled = true;

  const errorMessageTitle = document.createElement("h2");
  errorMessageTitle.textContent = data.title;
  errorMessageTitle.classList.add("error-title");

  const errorMessage = document.createElement("p");
  errorMessage.textContent = data.message;
  errorMessage.classList.add("error-message");

  const errorMessageResolution = document.createElement("p");
  errorMessageResolution.textContent = data.resolution;
  errorMessageResolution.classList.add("error-resolution");

  meaningsDisplay.appendChild(errorMessageTitle);
  meaningsDisplay.appendChild(errorMessage);
  meaningsDisplay.appendChild(errorMessageResolution);
}

// display the meanings
function displayMeaning(data) {
  const firstData = data[0];

  const name = firstData.word;
  nameDisplay.textContent = name;

  const phonetics = firstData.phonetics[0];

  const phonetic = phonetics?.text ?? "";
  phoneticsDisplay.textContent = phonetic;

  const phoneticWithAudio = firstData.phonetics.find((p) => p.audio);
  const audioUrl = phoneticWithAudio ? phoneticWithAudio.audio : null;
  audioDisplay.src = audioUrl;

  playButton.classList.add("is-audio");
  playButton.disabled = false;
  playButton.classList.remove("is-playing");

  data.forEach((entry) => {
    entry.meanings.forEach((meaning) => {
      const meaningBlock = document.createElement("div");
      meaningBlock.classList.add("meaning-block");

      const partsOfSpeechDisplay = document.createElement("i");
      partsOfSpeechDisplay.textContent = meaning.partOfSpeech;
      partsOfSpeechDisplay.classList.add("partsOfSpeech");
      meaningBlock.appendChild(partsOfSpeechDisplay);

      meaning.definitions.forEach((def, index) => {
        const definitionBlock = document.createElement("div");
        definitionBlock.classList.add("definition-block");

        const definitionDisplay = document.createElement("p");
        definitionDisplay.textContent = `${index + 1}. ${def.definition}`;
        definitionBlock.appendChild(definitionDisplay);

        renderTermList(definitionBlock, def.synonyms, "synonym-list");
        renderTermList(definitionBlock, def.antonyms, "antonym-list");

        meaningBlock.appendChild(definitionBlock);
      });

      renderTermList(meaningBlock, meaning?.synonyms, "synonym-list");
      renderTermList(meaningBlock, meaning?.antonyms, "antonym-list");

      meaningsDisplay.appendChild(meaningBlock);
    });
  });
}

// play audio
playButton.addEventListener("click", () => {
  if (!audioDisplay.src) return;

  if (audioDisplay.paused) {
    audioDisplay.play();
  } else {
    audioDisplay.pause();
  }
});

audioDisplay.addEventListener("play", () => {
  playButton.classList.add("is-playing");
});

audioDisplay.addEventListener("pause", () => {
  playButton.classList.remove("is-playing");
});

audioDisplay.addEventListener("ended", () => {
  playButton.classList.remove("is-playing");
});

// help populate the lists with synonyms and antonyms
function renderTermList(container, terms, className) {
  if (!terms || terms.length === 0) return;
  const list = document.createElement("ul");
  list.classList.add(className);
  terms.forEach((term) => {
    const item = document.createElement("li");
    item.textContent = term;
    list.appendChild(item);
  });
  container.appendChild(list);
}
