let cities;
let endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
async function getCities() {
    const request = new Request(endpoint);
    const response = await fetch(request);
    cities = await response.json();
}
getCities(endpoint);

let defaultSuggestions = document.getElementById("suggestions");
let input = document.getElementById("field");
input.addEventListener("input", function () {
    let suggestions = document.getElementById("suggestions");
    let value = this.value.toLowerCase();
    let results = cities.filter(
        (info) =>
            info.city.toLowerCase().includes(value) ||
            info.state.toLowerCase().includes(value)
    );

    let updatedSuggestions = document.createElement("ul");
    updatedSuggestions.classList.add("suggestions");
    updatedSuggestions.id = "suggestions";

    if (value == "") {
        updatedSuggestions = defaultSuggestions;
    } else {
        for (result of results) {
            let li = document.createElement("li");
            let name = document.createElement("span");
            const regex = new RegExp(value, "gi");
            const cityName = result.city.replace(
                regex,
                `<span class="hl">${value}</span>`
            );
            const stateName = result.state.replace(
                regex,
                `<span class="hl">${value}</span>`
            );
            name.classList.add("name");
            name.innerHTML = `${cityName}, ${stateName}`;
            let population = document.createElement("span");
            population.classList.add("population");
            population.innerText = result.population;
            li.appendChild(name);
            li.appendChild(population);
            updatedSuggestions.appendChild(li);
        }
    }
    suggestions.replaceWith(updatedSuggestions);
});