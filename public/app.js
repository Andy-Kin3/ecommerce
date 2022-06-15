const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "white",
                img: "/images/airforce.png"
            },
            {
                code: "blue",
                img: "/images/blueaireforce.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        colors: [
            {
                code: "white",
                img: "/images/jordan.png"
            },
            {
                code: "black",
                img: "/images/blackjordan.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 100,
        colors: [
            {
                code: "brown",
                img: "/images/brownblazers.png"
            },
            {
                code: "white",
                img: "/images/blazer.png",
            },
        ],
    },
    {
        id: 4,
        title: "BALENCIAGA",
        price: 119,
        colors: [
            {
                code: "green",
                img: "/images/balenciaga.png"
            },
            {
                code: "white",
                img: "/images/whitebalenciaga.png",
            },
        ],
    },
    {
        id: 5,
        title: "DIOR",
        price: 90,
        colors: [
            {
                code: "white",
                img: "/images/dior.png"
            },
            {
                code: "black",
                img: "/images/blackdior.png",
            },
        ],
    },

]
let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item,index) => {
        item.addEventListener("click", () => {
            //changes the current slide
            wrapper.style.transform = `translateX(${-100 * index}vw)`;

            //changes the choosen product

            choosenProduct = products[index];


            currentProductTitle.textContent = choosenProduct.title;
            currentProductPrice.textContent = "$" + choosenProduct.price;
            currentProductImg.src = choosenProduct.colors[0].img;
            //assign new colors
            currentProductColors.forEach((Color, index) =>{
                Color.style.backgroundColor = choosenProduct.colors[index].code;
                Color.style.border = "1px solid black";
            })
        });

    });


    //changes image when colors is clicked
    currentProductColors.forEach((color, index) =>{
        color.addEventListener("click", () => {
            currentProductImg.src = choosenProduct.colors[index].img
        })
    })

    currentProductSizes.forEach((size, index) =>{
        size.addEventListener('click', () =>{
            currentProductSizes.forEach((size) =>{
                size.style.backgroundColor = "white";
                size.style.color = "black";
            })
            size.style.backgroundColor = "black";
            size.style.color = "white";
        })
    })


    let close = document.querySelector(".close");
    let payment = document.querySelector('.payment');
    let productBtn = document.querySelector(".productButton");
    //display payment area
    productBtn.addEventListener("click", () =>{
        payment.style.display = "flex";
    })

//functionality of the close button(x)
    close.addEventListener("click",() =>{
        payment.style.display = "none";
    })