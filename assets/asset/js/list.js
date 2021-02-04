import * as params from '@params';

// https://tarekraafat.github.io/autoComplete.js
// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
  name: params.Title,
  selector: "#autoComplete",
  observer: false,
  data: {
    src: async function () {
      // Loading placeholder text
      document
        .querySelector("#autoComplete")
        .setAttribute("placeholder", "Loading...");

      if (!JSON.parse(localStorage.getItem(params.LocalStorageName))) {
        // Fetch External Data Source
        const source = await fetch(params.DataSource);
        const data = await source.json();
        // Saves the fetched data into local storage
        localStorage.setItem(params.LocalStorageName, JSON.stringify(data));
        // Retrieve the cached data from local storage
        const localData = JSON.parse(
          localStorage.getItem(params.LocalStorageName)
        );
        // Post Loading placeholder text
        document
          .querySelector("#autoComplete")
          .setAttribute("placeholder", autoCompleteJS.placeHolder);
        // Returns Fetched data
        return localData;
      }

      // Post Loading placeholder text
      document
        .querySelector("#autoComplete")
        .setAttribute("placeholder", autoCompleteJS.placeHolder);

      // Returns Fetched data
      return JSON.parse(localStorage.getItem(params.LocalStorageName));
    },
    key: ["name"],
  },
  searchEngine: "loose",
  placeHolder: params.Title,
  sort: (a, b) => {
    if (a.match < b.match) return -1;
    if (a.match > b.match) return 1;
    return 0;
  },
  resultsList: {
    render: true,
    container: (source) => {
      source.setAttribute("id", "article_list");
      //source.setAttribute("class", "list pl1 measure center");
    },
    destination: "#autoCompleteResult",
    position: "afterbegin",
    element: "div",
  },
  resultItem: {
    content: (data, element) => {
      console.log("Dentro resultItem-content");
      element.setAttribute(
        "class",
        "lh-copy pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30 f5 f4-ns link black-80 dim"
      );
      element.innerHTML = data.value[data.key];
    },
    element: "div",
  },
  onSelection: function (feedback) {
    var elem = document.querySelector("#autoComplete");
    elem.blur();
    elem.value = "";
    window.location = feedback.selection.value.url;
  },
  noResults: (dataFeedback, generateList) => {
    // Generate autoComplete List
    generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
    // No Results List Item
    const result = document.createElement("div");
    result.setAttribute(
      "class",
      "lh-copy pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30 f5 f4-ns link black-80 dim"
    );
    result.setAttribute("tabindex", "1");
    result.innerHTML = "Nessun risultato";
    document.querySelector("#article_list").appendChild(result);
  },
});
