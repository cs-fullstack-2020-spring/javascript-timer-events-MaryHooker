console.log("yoohoo");
//sanity
function main(){
    // ex1();
    ex2();
}

function ex1(){
//get reference from html
let checkBox = document.querySelector('#checkBox');
//sanity
console.log(checkBox)
//get reference from html
let checkLabel = document.querySelector("#label");
//sanity
console.log(checkLabel);

//create a function that changes the inner text of my label
onClick = (event) =>
{
    checkLabel.innerText = 'I TOLD YOU NOT TO CLICK THIS!!!'
}

//Add event listener to button
checkBox.addEventListener('click', onClick);

}

//******************************************************

// ### Exercise 2: add/remove attributes
// Create a simple form with a fieldset, legend of `Post Text`, textarea, a *hidden* `<h2>` message with the text `Start typing`, and a button that says `Allow Typing`. 

// When the page initially displays, the textarea should be disabled, and the message hidden. When the User clicks the button, display the hidden message, change the text on the button to `Stop Typing`, and enable the textarea so you can type into it. Clicking the button a second time should hide the hidden message, change the text of the button back to `Start Typing`, and disable the textarea. Each press of the button should toggle this behavior.

function ex2(){






}

main();