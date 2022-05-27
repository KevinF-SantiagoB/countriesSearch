const main = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => console.log(data));
};
main();
