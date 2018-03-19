let globalPrices = [];
let allImages = [];
const priceButton = document.getElementById('sortOnPrice');
var spiderButton = document.getElementById('spider');
var hulkButton = document.getElementById('hulk');
var pantherButton = document.getElementById('panther');
var ironButton = document.getElementById('iron');
var allButton = [spiderButton, hulkButton, pantherButton, ironButton];
var noImage = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

fetchimages();

/******************** fetch information regarding Black Panther **********************************/

function fetchBlackPanther(blackPanther) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009187/comics?orderBy=issueNumber&apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
        })

        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch information regarding Spider man **************************************/

function fetchSpiderMan(spiderMan) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009610/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
        })

        .catch(function (error) {
            console.log(error);
        })

}

/******************** fetch information regarding the Hulk ***************************************/

function fetchHulk(hulk) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009351/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
        })

        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch information regarding Iron Man **************************************/
function fetchIronMan(ironMan) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009368/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);


        })
        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch images for landing page *********************************************/

function fetchimages(startImages) {
    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=639194d75fce87a0e941f417bbff6300').then(function (response) {
            return response.json();
        })
        .then(function (getImage) {
            marvelImages(getImage);
            removeLoader();
        })
        .catch(function (error) {
            console.log(error);
        })
}

function marvelImages(getImage) {
    const startImageElement = document.getElementById('startImageWrapper');
    let htmlBlock = '';

    for (i = 0; i < getImage.data.results.length; i++) {
        htmlBlock += `
    <img src="${getImage.data.results[i].thumbnail.path}.jpg"/>
      `;
        allImages.push(getImage.data.results[i].thumbnail.path);

    }

    startImageElement.innerHTML = htmlBlock;

}


/***************** function to print informarion from fetch: title, description and image ******/

function marvelInformation(getMarvel) {
    const marvelInformationElement = document.getElementById('marvelInformation');
    let htmlBlock = '';

    for (i = 0; i < getMarvel.data.results.length; i++) {

        htmlBlock += `
    <h1>${getMarvel.data.results[i].title}</h1>
    <p>${getMarvel.data.results[i].description}</p>
    <p>Price: ${getMarvel.data.results[i].prices[0].price}</p>
    <img src="${getMarvel.data.results[i].thumbnail.path}.jpg"/>
      `;

        globalPrices.push(getMarvel.data.results[i].prices[0].price);

    }

    marvelInformationElement.innerHTML = htmlBlock;

}

/******************** function to sort on price - not working need to fix *****************/

priceButton.addEventListener('click', function () {
    function compareNumbers(a, b) {
        /*sort on lowest price*/
        return a.prices[0].price - b.prices[0].prices;

    }

    globalPrices.sort(compareNumbers);
    marvelInformation();
});
/******************************************************************************************/


/******************** function click on superhero and show list of it ********************/

spiderButton.addEventListener('click', function () {
    fetchSpiderMan();
    startImageWrapper.remove();
});

hulkButton.addEventListener('click', function () {
    fetchHulk();
    startImageWrapper.remove();

});
ironButton.addEventListener('click', function () {
    fetchIronMan();
    startImageWrapper.remove();
});
pantherButton.addEventListener('click', function () {
    fetchBlackPanther();
    startImageWrapper.remove();
});


/******************** input, show list depending on search input *********************/

const search = document.getElementById('search');
search.addEventListener('change', function () {
    const searchValue = search.value;
    if (searchValue == "spider-man" || searchValue == "Spider Man" || searchValue == "spider man" || searchValue == "Spider man" || searchValue == "Spider-man") {
        fetchSpiderMan();
        startImageWrapper.remove();
    } else if (searchValue == "black panther" || searchValue == "Black Panther" || searchValue == "Black panther") {
        fetchBlackPanther();
        startImageWrapper.remove();
    } else if (searchValue == "hulk" || searchValue == "Hulk") {
        fetchHulk();
        startImageWrapper.remove();
    } else if (searchValue == "iron man" || searchValue == "Iron Man" || searchValue == "Iron man") {
        fetchIronMan();
        startImageWrapper.remove();
    }

})


/******************** loader/spinner function from http://tobiasahlin.com/ **************/

function spinner() {
    document.getElementById('spinner').style.display = "none";
}

function removeLoader() {
    setTimeout("spinner()", 1000 * 1);
}
