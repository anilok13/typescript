var currRate = '{"rate": 1.05}';
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var data = fetchCurr(currRate);
        var res = data.rate * amount * commission;
        console.log(res);
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.05);
