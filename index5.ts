const currRate = '{"rate": 1.05}'; 

const fetchCurr = (response: string): { rate: number } => {
    const data = JSON.parse(response); 
    return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number) {
    if (available) {
        const data = fetchCurr(currRate); 
        let res = data.rate * amount * commission; 
        console.log(res);
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);