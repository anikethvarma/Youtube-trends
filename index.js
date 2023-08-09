const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const text = document.getElementById("text");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let url = `https://www.googleapis.com/youtube/v3/search?q=${inputEl.value}&key=AIzaSyDQu1eZa8M11GLRDiQhMVlelX037KQHQjI`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            const count = jsonData.pageInfo.totalResults;
            if (parseInt(count) === 1000000) {
                text.textContent = `For Keyword "${inputEl.value}" - 1M+ searchings have been made`
            } else {
                text.textContent = `For Keyword "${inputEl.value}" - ${count} searchings have been made`
            }
        });
})
