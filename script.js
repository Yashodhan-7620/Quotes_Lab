quotes=[
    "Each day provides its own gifts!",
    "You only fail when you stop trying.",
    "Strive not to be a success but rather to be Value.",
    "Life begins at the end of your comfort zone.",
    "He who is brave is free.",
    "We can do anything we want to if we stick to it long enough.",
    "Try again. Fail again. Fail better.",
    "No pressure, no diamonds.",
    "Prove them wrong.",
    "No guts, no story.",
    "Screw it, let’s do it.",

]
function changeQuote(){
    let randomIndex = Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerText = quotes[randomIndex];
}