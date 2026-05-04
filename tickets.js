document.addEventListener('DOMContentLoaded', function () {
    // --- 1. TICKET COUNTER LOGIC ---
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');

    rows.forEach(row => {
        const plusBtn = row.querySelector('.plus');
        const minusBtn = row.querySelector('.minus');
        const countSpan = row.querySelector('.count');
        const price = parseInt(row.querySelector('.price-val').innerText);

        // Click Plus
        plusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            count++;
            countSpan.innerText = count;
            calculateTotal();
        });

        // Click Minus
        minusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            if (count > 0) {
                count--;
                countSpan.innerText = count;
                calculateTotal();
            }
        });
    });

    // Function to sum everything up
    function calculateTotal() {
        let total = 0;
        rows.forEach(row => {
            const count = parseInt(row.querySelector('.count').innerText);
            const price = parseInt(row.querySelector('.price-val').innerText);
            total += count * price;
        });
        totalDisplay.innerText = total + " EGP";
    }

    // --- 2. PAYMENT ALERT LOGIC ---
    const payBtn = document.getElementById("payBtn");

    payBtn.addEventListener("click", () => {
        const totalAmount = totalDisplay.textContent;

        // Check if the user actually selected any tickets
        if (totalAmount === "0 EGP" || totalAmount === "0" || parseInt(totalAmount) === 0) {
            alert("⚠️ Please select at least one ticket before proceeding to payment.");
        } else {
            // The actual payment alert
            alert("💳 Proceeding to payment...\n\nTotal Amount: " + totalAmount + "\n\nThank you for booking with GEM!");
        }
    });

const payBtn = document.getElementById("payBtn");
const grandTotalDisplay = document.getElementById("grand-total");



// Payment Alert Logic
payBtn.addEventListener("click", () => {
    const totalAmount = grandTotalDisplay.textContent;
    
    if (totalAmount === "0 EGP" || totalAmount === "0") {
        alert("Your cart is empty! Please add tickets first.");
    } else {
        alert("Redirecting to Secure Payment...\nTotal Amount: " + totalAmount);
    }
});
