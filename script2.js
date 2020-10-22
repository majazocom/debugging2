//Toggle image when clicking on first button
//the image: <img src="https://images.unsplash.com/photo-1432298026442-0eabd0a98870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="image" width="100%" height="auto"></img>
let img1 = "https://images.unsplash.com/photo-1600564405648-371e6ebcaca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
let img2 = "https://images.unsplash.com/photo-1432298026442-0eabd0a98870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80";

document.getElementById('btn1').addEventListener('click', function() {
    if (document.querySelector('img').src == img1) {
        document.querySelector('img').src = img2
    } else {
        document.querySelector('img').src = img1
    }
})

//On the second button a joke will appear underneath it
let joke = "A user interface is like a joke - if you have to explain it, it's not a good one";

document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('joke').innerHTML = joke;
})


//On the third button you should render a random number
document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('number').innerHTML = Math.floor(Math.random() * 101);
})


//The fourth button will add 1 + 1
document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('sum').innerHTML = 1 + 1;
})


//The fifth button should change the header text to something else
document.getElementById('btn5').addEventListener('click', function() {
    document.getElementById('header-text').innerHTML = "Tack Maja för den lärorika övningen";
})