function palindrome(str) {
    const alphanumericOnly = str
      .toLowerCase()
      .match(/[a-z0-9]/g);
  
    return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}
  
function checkInput() {
const userInput = document.getElementById("text-input").value;

    if (userInput.trim() === "") {
        alert("Please input a value");
    } else {
        const result = palindrome(userInput);
        const text = document.querySelector("#result");

        if (result) {
            text.innerText = userInput + " is a palindrome";
        } else {
            text.innerText = userInput + " is not a palindrome";
        }
    }
}