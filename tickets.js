document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');
    const payBtn = document.getElementById("payBtn");

    // --- 1. TICKET COUNTER LOGIC ---
    rows.forEach(row => {
        const plusBtn = row.querySelector('.plus');
        const minusBtn = row.querySelector('.minus');
        const countSpan = row.querySelector('.count');
        // Tip: Ensure your HTML looks like: <span class="price-val">100</span>
        const price = parseInt(row.querySelector('.price-val').innerText);

        plusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            count++;
            countSpan.innerText = count;
            calculateTotal();
        });

        minusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            if (count > 0) {
                count--;
                countSpan.innerText = count;
                calculateTotal();
            }
        });
    });

    function calculateTotal() {
        let total = 0;
        rows.forEach(row => {
            const count = parseInt(row.querySelector('.count').innerText) || 0;
            const price = parseInt(row.querySelector('.price-val').innerText) || 0;
            total += count * price;
        });
        totalDisplay.innerText = total + " EGP";
    }

    // --- 2. PAYMENT ALERT LOGIC ---
    payBtn.addEventListener("click", () => {
        // ParseInt will stop at the first non-numeric character (the space before EGP)
        const totalValue = parseInt(totalDisplay.textContent);

        if (!totalValue || totalValue <= 0) {
            alert("⚠️ Your cart is empty! Please select at least one ticket.");
        } else {
            alert(`💳 Proceeding to payment...\n\nTotal Amount: ${totalValue} EGP\n\nThank you for booking with GEM!`);
        }
    });
});
