var currencyEl_one = document.getElementById('currency-one');
var amountEl_one = document.getElementById('amount-one');
var currencyEl_two = document.getElementById('currency-two');
var amountEl_two = document.getElementById('amount-two');


var rateEl = document.getElementById('rate');


function calculate()
{

    var currency_one = currencyEl_one.value;
    var currency_two = currencyEl_two.value;


    fetch(`https://v6.exchangerate-api.com/v6/YourAPIKEY/latest/${currency_one}`).
    then((response) => response.json()
    ).then(
        (data) => {
            
            var rate = data.conversion_rates[currency_two];
            
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate);
        }
    )
}



// Event Listeners

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();


