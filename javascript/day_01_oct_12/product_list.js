async function fetchProducts() {
    let response = await fetch('https://fakestoreapi.com/products');
    let productArr = await response.json();
    console.log("productArr:", productArr);
    let container = document.getElementById("productContainer");
    container.innerHTML = "";
    productArr.forEach(product => {
        container.innerHTML += `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="card h-100 shadow-sm">
                                <img
                                    src="${product.image}"
                                    class="card-img-top p-3"
                                    alt="${product.title}"
                                    height="200"
                                >
                                <div class="card-body d-flex flex-column text-center">
                                    <h5 class="card-title text-truncate">
                                        ${product.title}
                                    </h5>
                                    <p class="card-text text-truncate">
                                        ${product.description}
                                    </p>
                                    <h5 class="text-success">
                                        $${product.price}
                                    </h5>
                                    <p class="text-muted">
                                        Rating: ${product.rating.rate}/5
                                    </p>
                                    <button class="btn btn-primary mt-auto">
                                       Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
    });
}