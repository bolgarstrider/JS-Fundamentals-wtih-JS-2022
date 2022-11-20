
function towns(input) {
    
    let town = {};

    for (const line of input) {
        let [name, latitude, longitude] = line.split(' | ');
        town.town = name;
        town.latitude = Number(latitude).toFixed(2);
        town.longitude = Number(longitude).toFixed(2);
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);