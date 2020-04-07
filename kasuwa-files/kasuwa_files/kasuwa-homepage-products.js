let $showProductsButtons = document.querySelectorAll('.product-class__items--button');

$showProductsButtons.forEach(function ($showProductsButton) {
    $showProductsButton.addEventListener('click', displayProducts)
    
})
let products = [
    {
        name: 'Green vegetable',
        image_url: './css/images/sm1.jpg',
        price: 'N 5,000'
    },
    {
        name: 'Green pepper',
        image_url: './css/images/sm2.jpeg',
        price: 'N 3,000'
    },
    {
        name: 'Cattle',
        image_url: './css/images/sm3.jpg',
        price: 'N 103,000'
    }
];

let productsDisplayed = false;
function displayProducts(){
    if (productsDisplayed) {
        return;
    }
    let $productList = document.getElementById('product-reveal');
    $productList.classList.add("mystyle")
    let productsContent = '';
    products.forEach(function (product) {
        let productContent=`
        <div class="new-in__items" id="product-reveal">
            <div href="" class="new-in__item">
                <div class="new-in__item--img">
                    <img src="${product.image_url}" alt=${product.name}>
                </div>
                <div class="new-in__item--label">
                    <h2 class="product-class--label--name">${product.name}</h2>
                    <h4 class="product-class--label--price">${product.price}</h4>
                </div>
            </div>
        </div>`;
        productsContent = productsContent + productContent;
    });

    $productList.innerHTML = productsContent;

    productsDisplayed = true;
}

