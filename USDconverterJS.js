/*erre mar nem emlekszem pontosan mi volt*/

/*jQuery.getJSON( "https://api.exchangeratesapi.io/latest", function(data) {
    console.log(data); 

    var rates, x ;
    rates = data;
    for (x in rates) {
        document.getElementById("rates").innerHTML += x + "<br>" + data[x];
      }
    }
);*/

/* ez igy benepesiti a leugro menuket*/

var apiUrl = 'https://api.exchangeratesapi.io/latest?'

console.log(apiUrl);

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (masikfuggveny) => putTheRates(masikfuggveny) )
    
const putTheRates = (data) => {
    console.log(data)
    const html = `
    <option value="EUR">Euro - EUR</option>
    <option value="CAD">Canadian Dollar - CAD</option>
    <option value="HKD">Hong Kong Dollar - HKD</option>
    <option value="ISK">Icelandic Króna - ISK</option>
    <option value="PHP">Philippine Peso - PHP</option>
    <option value="DKK">Danish Króna - DKK</option>
    <option value="HUF">Hungarian Forints - HUF</option>
    <option value="CZK">Czech Koruna - CZK</option>
    <option value="AUD">Australian Dollar - AUD</option>
    <option value="RON">Romania New Lei - RON</option>
    <option value="SEK">Sweden Króna - SEK</option>
    <option value="IDR">Indonesian Rupiah - IDR</option>
    <option value="INR">Indina Rupee - INR</option>
    <option value="BRL">Brazil Real - BRL</option>
    <option value="RUB">Russia Rouble - RUB</option>
    <option value="HRK">Croatian Kuna - HRK</option>
    <option value="JPY">Japan Yen - JPY</option>
    <option value="THB">Thailand Baht - THB</option>
    <option value="CHF">Swiss Franc - CHF</option>
    <option value="SGD">Singaporean Dollar - SGD</option>
    <option value="PLN">Polish Zlotyr - PLN</option>
    <option value="BGN">Bulgarian Lev - BGN</option>
    <option value="TRY">Turkish New Lira - TRY</option>
    <option value="CNY">Chinese Yuan - CNY</option>
    <option value="NOK">Norwegian Kroner - NOK</option>
    <option value="NZD">New Zealand Dollar - NZD</option>
    <option value="ZAR">South African Rand - ZAR</option>
    <option value="USD">American Dollar - USD</option>
    <option value="MXN">Mexican Peso - MXN</option>
    <option value="ILS">Israel New Shekel - ILS</option>
    <option value="GBP">British Pound - GBP</option>
    <option value="KRW">Korean Won - KRW</option>
    <option value="MYR">Malaysian Ringgit - MYR</option>
    
    `
    console.log(data)
    const fromDiv = document.querySelector('#from')
    fromDiv.innerHTML = html
    const toDiv = document.querySelector('#to')
    toDiv.innerHTML = html
    
}

function myFunction() {
    var mylist = document.getElementById("from");
    var fromValue = from.options[from.selectedIndex].value;

    var mylist = document.getElementById("to");
    var toValue = to.options[to.selectedIndex].value;

    const converterUrl = {
        url : 'https://api.exchangeratesapi.io/latest?symbols=',
        fromUrl : fromValue,
        toUrl : toValue
    }

    if(toValue == 'EUR' && fromValue == 'EUR'){
        var converterFullUrl = `${converterUrl.url}`
    }
    else if(fromValue == 'EUR'){
        var converterFullUrl = `${converterUrl.url}${converterUrl.toUrl}`
    }
    else if(toValue == 'EUR'){
        var converterFullUrl = `${converterUrl.url}${converterUrl.fromUrl}`
    }
    
    else
    var converterFullUrl = `${converterUrl.url}${converterUrl.fromUrl},${converterUrl.toUrl}`
    console.log(converterFullUrl);

    var amount = document.getElementById("fromAmount").value;
    


    fetch(converterFullUrl)
    .then( (data) => data.json())
    .then( (second) => kiiras(second) )
const kiiras = (data) => {
    console.log(data)

    if((toValue == 'EUR') && (fromValue == 'EUR')){
        console.log(converterFullUrl);document.getElementById("toAmount").value = document.getElementById("fromAmount").value;
        }
    else if(fromValue == 'EUR'){
    console.log(converterFullUrl);document.getElementById("toAmount").value = (amount*Object.values(data.rates)[0]);
    }
    else if(toValue == 'EUR'){
    console.log(converterFullUrl);document.getElementById("toAmount").value = (amount/Object.values(data.rates)[0]);
    }
    else if(toValue == fromValue){
    console.log(converterFullUrl);document.getElementById("toAmount").value = document.getElementById("fromAmount").value;
    }
    else{
    console.log(converterFullUrl);document.getElementById("toAmount").value = (amount/Object.values(data.rates)[0])*Object.values(data.rates)[1];
    }

}
}