fetchBlackPanther();
/*variabel -all information från de olika listorna, getmarvel funktionen
rad 89 specar den att de ska vara pricet*/
let globalPrices = [];

/******************** fetch information regarding Black Panther ********************/
function fetchBlackPanther(blackPanther) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009187/comics?orderBy=issueNumber&apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
            //globalPrices = getMarvel;
            
        })

        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch information regarding Spider man ********************/
function fetchSpiderMan(spiderMan) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009610/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
            //globalPrices = getMarvel;
            
        })
        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch information regarding the Hulk ********************/
function fetchHulk(hulk) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009351/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
            //globalPrices = getMarvel;
            
        })
        .catch(function (error) {
            console.log(error);
        })
}

/******************** fetch information regarding Iron Man ********************/
function fetchIronMan(ironMan) {

    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009368/comics?apikey=639194d75fce87a0e941f417bbff6300
`).then(function (response) {
            return response.json();
        })
        .then(function (getMarvel) {
            marvelInformation(getMarvel);
            //globalPrices = getMarvel;
        })
        .catch(function (error) {
            console.log(error);
        })
}


/********** function to print informarion from fetch: title, information and image **********/
function marvelInformation(getMarvel) {
    //console.log(getMarvel);
    const marvelInformationElement = document.getElementById('marvelInformation');
    let htmlBlock = '';

    for (i = 0; i < getMarvel.data.results.length; i++) {
        // console.log(getMarvel.data.results[i].title)
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

/************ funktion för att sortera på priserna när du trycker på knappen ************/
const priceButton = document.getElementById('sortOnPrice');
        priceButton.addEventListener('click', function () {
            console.log("klick");
             console.log(globalPrices);
            
           function compareNumbers (a,b) {
                /*sorterar efter lägsda*/
                  return a - b;
               
            }
           
            globalPrices.sort(compareNumbers);
            
        });

/******************** input, show list depending on search input ********************/

const search = document.getElementById('search');
search.addEventListener('change', function () {
    const searchValue = search.value;
    //console.log(searchValue);
    if (searchValue == "spider-man" || searchValue == "Spider Man" || searchValue == "spider man" || searchValue == "Spider man") {
        fetchSpiderMan();
    } else if (searchValue == "black panther" || searchValue == "Black Panther" || searchValue == "Black panther") {
        fetchBlackPanther();
    } else if (searchValue == "hulk" || searchValue == "Hulk") {
        fetchHulk();
    } else if (searchValue == "iron man" || searchValue == "Iron Man" || searchValue == "Iron man") {
        fetchIronMan();
    }

})
