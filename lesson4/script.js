"use strict";


// Задание 1.1
// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price / 100 * 25);
};


// es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}



// Задание 1.2
// es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(newText) {
    this.text = newText;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighter = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighter = true;
}


// es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        this.text = newText;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighter = false;
    }

    makeTextHighlighted() {
        this.highlighter = true;
    }
}