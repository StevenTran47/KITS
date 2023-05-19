async function getAll() {
  return fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())      
}

async function fetchData() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.getElementById("products")
  for (let item of products) {
    productsDiv.innerHTML += `
    <div class="item" onclick="goToDetail(${item.id})">
    <img src="${item.image}"></img>
    <h2>${item.title}</h2>
    <h2>${item.price}</h2>
    </div>
    `;
  }
}
function goToDetail(id) {
    window.location.assign(details.html`?id=${id}`);
   }
