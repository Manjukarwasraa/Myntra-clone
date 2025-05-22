console.log("hello, world i am back to js");
let bagproducts =[];

displayProductsOnHomePage();
displayBagIcon();



function addToBag(productId){
	bagproducts.push(productId);
	displayBagIcon();
}
function displayBagIcon(){
	let bagProductsCountElement = document.querySelector('.bag-products-count');
	if(bagproducts.length > 0){
		bagProductsCountElement.computedStyleMap.visibility ='visible';
		bagProductsCountElement.innerText = bagproducts.length;
	}else{
		bagProductsCountElement.computedStyleMap.visibility ='hidden';

	}

}
function displayProductsOnHomePage(){
	let productsContainerElement = document.querySelector('.products-container');
    let innerHTML = '';
    products.forEach(product => {
	    innerHTML += 
		`<div class="product">
	     <img draggable="false" src="${product.product_image}"
		 <div class="rating">
			${product.rating.stars} ⭐ ${product.rating.noOfReviews}
		 </div>
		 <div class="company-name">${product.company_name}</div>
		 <div class="product-name">${product.product_name}</div>
		 <div class="price">
			<span class="current-price">Rs ${product.current_price}</span>
			<span class="original-price">Rs ${product.original_price}</span>
			<span class="discount">(${product.discount_percentage}% OFF)</span>
									
		 </div>
			<button class="button-add-bag" onclick="addToBag(${product.id})">Add to Bag</button>
		 </div>`;

});
 productsContainerElement.innerHTML = innerHTML;
}
console.log("heloo");
/**let productsContainerElement = document.querySelector('.products-container');
let innerHTML = '';
products.forEach(product => {
	innerHTML += `<div class="product">
				<img draggable="false" src="${product.product_image}"
				<div class="rating">
					${product.rating.stars} ⭐ ${product.rating.noOfReviews}
				</div>
				<div class="company-name">${product.company_name}</div>
				<div class="product-name">${product.product_name}</div>
				<div class="price">
					<span class="current-price">Rs ${product.current_price}</span>
					<span class="original-price">Rs ${product.original_price}</span>
					<span class="discount">(${product.discount_percentage}% OFF)</span>
									
				</div>
				<button class="button-add-bag" onclick="addToBag">Add to Bag</button>
			</div>`;

});**/
/**let product = {
	product_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30450150/2024/10/21/cdff7648-eb9c-447f-ba3b-155ea39488381729507483610-House-of-Pataudi-Men-Kurta-Sets-8191729507482885-1.jpg" class="img-responsive" alt="House of Pataudi Band Collar Thread Work Detailed Jashn Kurta with Trousers" title="House of Pataudi Band Collar Thread Work Detailed Jashn Kurta with Trousers" style="width: 100%; display: block;',
	rating: {
		stars: 4.5,
		noOfReviews: 1600,
	},
	company_name: 'House of Pataudi',
	product_name: 'Emblished Ethnic wear Kurta',
	current_price: 1199,
	original_price: 3999,
	discount_percentage: 70,


 }**/
/**productsContainerElement.innerHTML = innerHTML;**/