for (const prop in statistics){
    if(prop.startsWith('r')){
        console.log(`${statistics[prop]}`);
    }else if(statistics[prop] % 2 == 1){
        console.log(`${statistics[prop]}`);
    }
}