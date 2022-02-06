// target quote speaker element
const quoteSpeakerEl = $("#quoteSpeaker");
// target quote text element
const quoteTextEl = $("#quoteText");
// target photo image element
const photoImgEl = $("#photoImgEl");

// randon emoji array
const emojiArray = ["🌻", "💛", "🍋", "✨", "🌼", "🍯", "🥞"];

// target emoji span
const randomEmojiEl = $("#randomEmoji");

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
customizeSearch.click(function () {
    myModal.show();
});

modalClose.click(function () {
    myModal.hide();
})

// customize funciton
submitSearch.click(function () {
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
                try {
                console.log(data);
                // target capitalized author name
                console.log(data.data[0].quoteAuthor);
                // randomize quotes and emojis
                let i = Math.floor(Math.random() * 6 + 1)
                let authorNameCap = data.data[i].quoteAuthor;
                // target quote text
                console.log(data.data[i].quoteText);
                let quoteText = data.data[i].quoteText;

                quoteSpeakerEl.html("");
                quoteSpeakerEl.html(authorNameCap);

                quoteTextEl.html("");
                quoteTextEl.html(quoteText);

                let randomEmoji = emojiArray[i]
                // trying to append random emoji
                console.log(randomEmoji);
                randomEmojiEl.text(randomEmoji);
                } catch (error) {
                    // display alert on screen "author not found"
                    quoteSpeakerEl.html("Author not found. Try again!");
                }
            });
    }

const getAuthorRequest = "https://quote-garden.herokuapp.com/api/v3/authors"

fetch(getAuthorRequest)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
// api documentation https://pprathameshmore.github.io/QuoteGarden/
// how to request all authors?