
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))   // dekhar jonno console.log(data))

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {

        // for (let i = 0; i < countries.length; i++) {    // forEtch diyeo kora jai
        //     const country = countries[i];               //console.log(country.name);  country name dekhar jonno
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // countryDiv.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countryDiv.appendChild(p);
        //// aro short kore lekha jai oporertake...

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class= "capital-name">${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        // } forloop er jonno karli backet
    });   // forEach });

}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        //console.log(url);
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0])); ///  console.log(data[0].name)
    // console.log(name);
}

const renderCountryInfo = country => {
    // console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <img src="${country.flag}">
    <h1>${country.name}</h1>
    <h2>Region:${country.region}</h2>
    <h3>Population:${country.population}</h3>
    <p>Area:${country.area} </p>
    
    `;
}