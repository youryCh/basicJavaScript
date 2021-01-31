"use strict";

// Задание 1
for (let i = 0; i <= 10; i++) {
    if ( i == 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 == 0) {
        console.log(i + " - чётное число");
    } else {
        console.log(i + " - нечётное число");
    }
}


// Задание 2
const post = {
    author: "John", // this text
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 // this number
            }
        },
        {
            userId: 5, //this number
            userName: "Jane",
            text: "lorem ipsum 2", //this text
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Задание 3
// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];
// let discount = 15;
// products.forEach(function(product) {
//     product.price = product.price - (product.price / 100 * discount);
// });
// console.log(products);


// Задание 4
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,        
    },
];

// 1
let productWithPhoto = products.filter(function(product) {
    return "product.photos" in products && "product.photos[0]" in products;
});
console.log(productWithPhoto);

// 2
let sortByPrice = products.sort(function(a, b) {
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;    
});
console.log(sortByPrice);


// Задание 5 
for (let i = 0; i < 10; console.log(i), i++) {}


// Задание 6
let hill = "";
for (let i = 0; i <= 20; i++) {
    console.log(hill += "X");
}