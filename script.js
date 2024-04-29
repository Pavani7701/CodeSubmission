const mensBtn = document.getElementById("mensBtn")
const womenBtn = document.getElementById("womenBtn")
const kidsBtn = document.getElementById("kidsBtn")

const itemsList = document.querySelector('.items-list')

const imageContainerBackground = document.querySelector('.image-container')
const badgeText = document.querySelector('#badge_text')
const clothTitle = document.querySelector('#title-cloth')
const vendor = document.querySelector('#vendor')
const discountedPrice = document.querySelector('#discounted-price')
const originalPrice = document.querySelector('#original-price')

let data = null;

womenBtn.addEventListener('click', async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json()
    itemsList.innerHTML = ''
    womenBtn.classList.add('active')
    mensBtn.classList.remove('active')
    kidsBtn.classList.remove('active')
    mensBtn.classList.remove("add-icon")

    data.categories[1].category_products.forEach(eachItem => {
    const compareAtPrice = Number(eachItem.compare_at_price);
    const price = Number(eachItem.price);
    const discount = Math.floor(((compareAtPrice - price) / compareAtPrice) * 100);
    const itemData = `
        <div class="image-container" style="  background-image: url('${eachItem.image}');">
        ${ eachItem.badge_text === null ? "" : '<div id="badge_text">' + eachItem.badge_text + '</div>' }
        </div>
        <div class="information-container">
            <p>
                 <span id="title-cloth">${eachItem.title}</span>
                 <span>&#x2022;</span>
                 <span id="vendor">${eachItem.vendor}</span>
             </p>
             <p style="margin-top: -5px">
                 <span id="discounted-price">Rs. ${eachItem.price}</span>
                 <span id="original-price">Rs. ${eachItem.compare_at_price}</span>
                 <span id="discount">${discount}% Off</span>
             </p>
         </div>
         <div class="cart-container">
             <button>Add to Cart</button>
         </div>
         ` 
    const newElement = document.createElement('div')
    newElement.classList.add('item');
    newElement.innerHTML = itemData
    itemsList.appendChild(newElement)
    })
 })


 kidsBtn.addEventListener('click', async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json()
    itemsList.innerHTML = ''
    kidsBtn.classList.add('active')
    mensBtn.classList.remove('active')
    womenBtn.classList.remove('active')
    mensBtn.classList.remove("add-icon")
    data.categories[2].category_products.forEach(eachItem => {
        const compareAtPrice = Number(eachItem.compare_at_price);
        const price = Number(eachItem.price);
        const discount = Math.floor(((compareAtPrice - price) / compareAtPrice) * 100);
        const itemData = `
        <div class="image-container" style="  background-image: url('${eachItem.image}');">
        ${ eachItem.badge_text === null ? "" : '<div id="badge_text">' + eachItem.badge_text + '</div>' }
        </div>
        <div class="information-container">
            <p>
                <span id="title-cloth">${eachItem.title}</span>
                <span>&#x2022;</span>
                <span id="vendor">${eachItem.vendor}</span>
            </p>
            <p style="margin-top: -5px">
                <span id="discounted-price">Rs. ${eachItem.price}</span>
                <span id="original-price">Rs. ${eachItem.compare_at_price}</span>
                <span id="discount">${discount}% Off</span>
            </p>
        </div>
        <div class="cart-container">
             <button>Add to Cart</button>
         </div>
         ` 
    const newElement = document.createElement('div')
    newElement.classList.add('item');
    newElement.innerHTML = itemData
    itemsList.appendChild(newElement)
    })
})

mensBtn.addEventListener('click', async () => {
     const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
     const data = await response.json()
     itemsList.innerHTML = ''
     kidsBtn.classList.remove('active')
     mensBtn.classList.add('active')
     womenBtn.classList.remove('active')
     mensBtn.classList.add("add-icon")
     data.categories[0].category_products.forEach(eachItem => {
        const compareAtPrice = Number(eachItem.compare_at_price);
        const price = Number(eachItem.price);
        const discount = Math.floor(((compareAtPrice - price) / compareAtPrice) * 100);
        const itemData = `
         <div class="image-container" style="  background-image: url('${eachItem.image}');">
         ${ eachItem.badge_text === null ? "" : '<div id="badge_text">' + eachItem.badge_text + '</div>' }
         </div>
         <div class="information-container">
             <p>
                 <span id="title-cloth">${eachItem.title}</span>
                 <span>&#x2022;</span>
                 <span id="vendor">${eachItem.vendor}</span>
             </p>
             <p style="margin-top: -5px">
                 <span id="discounted-price">Rs. ${eachItem.price}</span>
                 <span id="original-price">Rs. ${eachItem.compare_at_price}</span>
                 <span id="discount">${discount}% Off</span>
             </p>
         </div>
         <div class="cart-container">
             <button>Add to Cart</button>
         </div>
         ` 
         const newElement = document.createElement('div')
         newElement.classList.add('item');
         newElement.innerHTML = itemData
         itemsList.appendChild(newElement)
     })
})

window.addEventListener('load', async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
     const data = await response.json()
     itemsList.innerHTML = ''
     kidsBtn.classList.remove('active')
     mensBtn.classList.add('active')
     womenBtn.classList.remove('active')
    mensBtn.classList.toggle("add-icon")
     data.categories[0].category_products.forEach(eachItem => {
        const compareAtPrice = Number(eachItem.compare_at_price);
        const price = Number(eachItem.price);
        const discount = Math.floor(((compareAtPrice - price) / compareAtPrice) * 100);
        const itemData = `
         <div class="image-container" style="  background-image: url('${eachItem.image}');">
         ${ eachItem.badge_text === null ? "" : '<div id="badge_text">' + eachItem.badge_text + '</div>' }
         </div>
         <div class="information-container">
             <p>
                 <span id="title-cloth">${eachItem.title}</span>
                 <span>&#x2022;</span>
                 <span id="vendor">${eachItem.vendor}</span>
             </p>
             <p style="margin-top: -5px">
                 <span id="discounted-price">Rs. ${eachItem.price}</span>
                 <span id="original-price">Rs. ${eachItem.compare_at_price}</span>
                 <span id="discount">${discount}% Off</span>
             </p>
         </div>
         <div class="cart-container">
             <button>Add to Cart</button>
         </div>
         ` 
         const newElement = document.createElement('div')
         newElement.classList.add('item');
         newElement.innerHTML = itemData
         itemsList.appendChild(newElement)
     })
})