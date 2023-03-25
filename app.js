document.getElementById("cash-split").addEventListener("submit", function(event) {
    event.preventDefault();

    var bill = parseFloat(document.getElementById("bill").value);
    var people = parseFloat(document.getElementById("people").value);
    
    var split_per_person = bill / people;
    var split_round = split_per_person.toFixed(2);
    
    document.getElementById("cash-split").reset();
    document.getElementById("result").innerHTML = "Each person should pay: ₹" + split_round;
});
