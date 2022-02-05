// target quote speaker element
const quoteSpeakerEl = $("#quoteSpeaker");
// target quote text element
const quoteTextEl = $("#quoteText");
// target photo image element
const photoImgEl = $("#photoImgEl");

// randon emoji array
const emojiArray = ["🌻","💛","🍋","✨","🌼","🍯","🥞"];
console.log(emojiArray);

// target customize button
const customizeSearch = $("#customizeSearch");

// target modal element
const myModal = $("#myModal");
console.log(myModal);

// target modal close button
const modalClose = $(".close");

// target author input element
const authorInputEl = $("#authorInput");
// target genre input element
const genreInputEl = $("#genreInput");
// target art search input element
const artSearchEl = $("#artSearchInput");

// target submit search button
const submitSearch = $("#submitSearch");


// toggle modal visibility 
customizeSearch.click(function(){
    myModal.show();
  });

modalClose.click(function(){
    myModal.hide();
})

// customize funciton
submitSearch.click(function() {
    // target author name
    let authorName = authorInputEl[0].value;
    console.log(authorName);

    getApi(authorName);

    myModal.hide();
})

// quote garden api call
function getApi(authorName) {

    // quote garden api url
    const apiUrl = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // target capitalized author name
            console.log(data.data[0].quoteAuthor);
            authorNameCap = data.data[0].quoteAuthor;
            // target quote text
            console.log(data.data[0].quoteText);
            quoteText = data.data[0].quoteText;

            quoteSpeakerEl.html("");
            quoteSpeakerEl.html(authorNameCap);

            quoteTextEl.html("");
            quoteTextEl.html(quoteText);
        });
}

// api documentation https://pprathameshmore.github.io/QuoteGarden/
