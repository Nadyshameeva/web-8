let price_field = document.querySelector('.price')
let promo_field = document.querySelector('.promo')
let calc_btn = document.querySelector('.btn')
let result_field = document.querySelector('.result')

function check_promo(price, promo) {
    return price >= 10000 && promo.toLowerCase() === 'noborders';
}

calc_btn.addEventListener('click', () => {
    let price = +price_field.value
    let promo = promo_field.value

    if (check_promo(price, promo)) {
        price *= 0.8;
    }

    console.log(`price = ${price}`);

    result_field.textContent = price;
});