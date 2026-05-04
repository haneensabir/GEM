document.addEventListener('DOMContentLoaded', function () {
    // 1. Grab all the rows
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');

    rows.forEach(row => {
        const plusBtn = row.querySelector('.plus');
        const minusBtn = row.querySelector('.minus');
        const countSpan = row.querySelector('.count');
        const price = parseInt(row.querySelector('.price-val').innerText);

        // 2. Click Plus
        plusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            count++;
            countSpan.innerText = count;
            calculateTotal();
        });

        // 3. Click Minus
        minusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            if (count > 0) {
                count--;
                countSpan.innerText = count;
                calculateTotal();
            }
        });
    });

    // 4. Function to sum everything up
    function calculateTotal() {
        let total = 0;
        rows.forEach(row => {
            const count = parseInt(row.querySelector('.count').innerText);
            const price = parseInt(row.querySelector('.price-val').innerText);
            total += count * price;
        });
        totalDisplay.innerText = total + " EGP";
    }
});
// 1. Get references to the button and the total price display
const payBtn = document.getElementById("payBtn");
const grandTotalDisplay = document.getElementById("grand-total");

// 2. Add the click event listener
payBtn.addEventListener("click", () => {
    const totalAmount = grandTotalDisplay.textContent;

    // Check if the user actually selected any tickets
    if (totalAmount === "0 EGP" || totalAmount === "0") {
        alert("Please select at least one ticket before proceeding to payment.");
    } else {
        // The actual payment alert
        alert("Proceeding to payment...\nYour total is: " + totalAmount + "\n\nThank you for booking with GEM!");
    }
});
});
