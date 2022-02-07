let news = {
    apiKey: "85ced64dc13d4ac3b1084221bf8ffd47",
    fetchNews: function (country) {
        fetch("https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=" + this.apiKey).then((response) => response.json()).then((data) => this.displayNews(data));
    },
    displayNews: function(data) {
        
        const author_one = data.articles[0].author;
        const author_two = data.articles[1].author;
        const author_three = data.articles[2].author;
        const author_four = data.articles[3].author;
        const author_five = data.articles[4].author;
        const author_six = data.articles[5].author;
        const author_seven = data.articles[6].author;
        const author_eight = data.articles[7].author;
        const author_nine = data.articles[8].author;

        const source_one = data.articles[0].source.name;
        const source_two = data.articles[1].source.name;
        const source_three = data.articles[2].source.name;
        const source_four = data.articles[3].source.name;
        const source_five = data.articles[4].source.name;
        const source_six = data.articles[5].source.name;
        const source_seven = data.articles[6].source.name;
        const source_eight = data.articles[7].source.name;
        const source_nine = data.articles[8].source.name;
        
        const title_one = data.articles[0].title;
        const title_two = data.articles[1].title;
        const title_three = data.articles[2].title;
        const title_four = data.articles[3].title;
        const title_five = data.articles[4].title;
        const title_six = data.articles[5].title;
        const title_seven = data.articles[6].title;
        const title_eight = data.articles[7].title;
        const title_nine = data.articles[8].title;

        const content_one = data.articles[0].description   ;
        const content_two = data.articles[1].description;
        const content_three = data.articles[2].description;
        const content_four = data.articles[3].description;
        const content_five = data.articles[4].description;
        const content_six = data.articles[5].description;
        const content_seven = data.articles[6].description;
        const content_eight = data.articles[7].description;
        const content_nine = data.articles[8].description;

        const readmore1 = data.articles[0].url;
        const readmore2 = data.articles[1].url;
        const readmore3 = data.articles[2].url;
        const readmore4 = data.articles[3].url;
        const readmore5 = data.articles[4].url;
        const readmore6 = data.articles[5].url;
        const readmore7 = data.articles[6].url;
        const readmore8 = data.articles[7].url;
        const readmore9 = data.articles[8].url;

        const image1 = data.articles[0].urlToImage;
        const image2 = data.articles[1].urlToImage;
        const image3 = data.articles[2].urlToImage;
        const image4 = data.articles[3].urlToImage;
        const image5 = data.articles[4].urlToImage;
        const image6 = data.articles[5].urlToImage;
        const image7 = data.articles[6].urlToImage;
        const image8 = data.articles[7].urlToImage;
        const image9 = data.articles[8].urlToImage;

        document.querySelector("#author").innerText = author_one;
        document.querySelectorAll("#author")[1].innerText = author_two;
        document.querySelectorAll("#author")[2].innerText = author_three;
        document.querySelectorAll("#author")[3].innerText = author_four;
        document.querySelectorAll("#author")[4].innerText = author_five;
        document.querySelectorAll("#author")[5].innerText = author_six;
        document.querySelectorAll("#author")[6].innerText = author_seven;
        document.querySelectorAll("#author")[7].innerText = author_eight;
        document.querySelectorAll("#author")[8].innerText = author_nine;

        document.querySelector('.source-name').innerText = source_one;
        document.querySelectorAll('.source-name')[1].innerText = source_two;
        document.querySelectorAll('.source-name')[2].innerText = source_three;
        document.querySelectorAll('.source-name')[3].innerText = source_four;
        document.querySelectorAll('.source-name')[4].innerText = source_five;
        document.querySelectorAll('.source-name')[5].innerText = source_six;
        document.querySelectorAll('.source-name')[6].innerText = source_seven;
        document.querySelectorAll('.source-name')[7].innerText = source_eight;
        document.querySelectorAll('.source-name')[8].innerText = source_nine;

        document.querySelector('.news-title').innerText = title_one;
        document.querySelectorAll('.news-title')[1].innerText =title_two;
        document.querySelectorAll('.news-title')[2].innerText =title_three;
        document.querySelectorAll('.news-title')[3].innerText =title_four;
        document.querySelectorAll('.news-title')[4].innerText =title_five;
        document.querySelectorAll('.news-title')[5].innerText =title_six;
        document.querySelectorAll('.news-title')[6].innerText =title_seven;
        document.querySelectorAll('.news-title')[7].innerText =title_eight;
        document.querySelectorAll('.news-title')[8].innerText =title_nine;
        
        document.querySelectorAll('.news-content')[0].innerText = content_one + "...";
        document.querySelectorAll('.news-content')[1].innerText = content_two + "...";
        document.querySelectorAll('.news-content')[2].innerText = content_three + "...";
        document.querySelectorAll('.news-content')[3].innerText = content_four + "...";
        document.querySelectorAll('.news-content')[4].innerText = content_five + "...";
        document.querySelectorAll('.news-content')[5].innerText = content_six + "...";
        document.querySelectorAll('.news-content')[6].innerText = content_seven + "...";
        document.querySelectorAll('.news-content')[7].innerText = content_eight + "...";
        document.querySelectorAll('.news-content')[8].innerText = content_nine + "...";

        document.querySelectorAll('.read-more')[0].href = readmore1  ;
        document.querySelectorAll('.read-more')[1].href = readmore2  ;
        document.querySelectorAll('.read-more')[2].href = readmore3  ;
        document.querySelectorAll('.read-more')[3].href = readmore4  ;
        document.querySelectorAll('.read-more')[4].href = readmore5  ;
        document.querySelectorAll('.read-more')[5].href = readmore6  ;
        document.querySelectorAll('.read-more')[6].href = readmore7  ;
        document.querySelectorAll('.read-more')[7].href = readmore8  ;
        document.querySelectorAll('.read-more')[8].href = readmore9  ;

        document.querySelectorAll('img')[0].src = image1  ;
        document.querySelectorAll('img')[1].src = image2  ;
        document.querySelectorAll('img')[2].src = image3  ;
        document.querySelectorAll('img')[3].src = image4  ;
        document.querySelectorAll('img')[4].src = image5  ;
        document.querySelectorAll('img')[5].src = image6  ;
        document.querySelectorAll('img')[6].src = image7  ;
        document.querySelectorAll('img')[7].src = image8  ;
        document.querySelectorAll('img')[8].src = image9  ;
    },
    search: function () {
        this.fetchNews(document.querySelector(".select-country").value);
    },
};

document.querySelector(".dropdown button").addEventListener("click", function () {
    news.search();
});
news.fetchNews("us");