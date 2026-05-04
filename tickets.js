document.addEventListener('DOMContentLoaded', function () {
    // --- 1. SELECTIONS ---
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');
    const payBtn = document.querySelector('.payment-btn');
    const dateInput = document.querySelector('.date-input'); // Selecting the date field

    // --- 2. TICKET COUNTER LOGIC ---
    rows.forEach(row => {
        const plusBtn = row.querySelector('.plus');
        const minusBtn = row.querySelector('.minus');
        const countSpan = row.querySelector('.count');
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

    // --- 3. PAYMENT & DATE VALIDATION ---
    if (payBtn) {
        payBtn.addEventListener("click", () => {
            const totalValue = parseInt(totalDisplay.innerText);
            const selectedDate = dateInput.value; // Get the chosen date

            // Check if date is selected
            if (!selectedDate) {
                alert("⚠️ Please select a visit date first.");
                return; // Stop the function here
            }

            // Check if at least one ticket is selected
            if (!totalValue || totalValue === 0) {
                alert("⚠️ Your cart is empty! Please select at least one ticket.");
            } else {
                alert(`💳 Proceeding to Payment...
                
Date: ${selectedDate}
Total: ${totalValue} EGP

Thank you for booking with GEM!`);
            }
        });
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     // --- 1. SELECTIONS ---
//     const rows = document.querySelectorAll('.ticket-row');
//     const totalDisplay = document.getElementById('grand-total');
//     const payBtn = document.querySelector('.payment-btn'); // Matches your HTML class

//     // --- 2. TICKET COUNTER LOGIC ---
//     rows.forEach(row => {
//         const plusBtn = row.querySelector('.plus');
//         const minusBtn = row.querySelector('.minus');
//         const countSpan = row.querySelector('.count');
//         const price = parseInt(row.querySelector('.price-val').innerText);

//         // Increment quantity
//         plusBtn.addEventListener('click', () => {
//             let count = parseInt(countSpan.innerText);
//             count++;
//             countSpan.innerText = count;
//             calculateTotal();
//         });

//         // Decrement quantity
//         minusBtn.addEventListener('click', () => {
//             let count = parseInt(countSpan.innerText);
//             if (count > 0) {
//                 count--;
//                 countSpan.innerText = count;
//                 calculateTotal();
//             }
//         });
//     });

//     // Function to calculate the total sum
//     function calculateTotal() {
//         let total = 0;
//         rows.forEach(row => {
//             const count = parseInt(row.querySelector('.count').innerText) || 0;
//             const price = parseInt(row.querySelector('.price-val').innerText) || 0;
//             total += count * price;
//         });
//         totalDisplay.innerText = total + " EGP";
//     }

//     // --- 3. PAYMENT VALIDATION ---
//     if (payBtn) {
//         payBtn.addEventListener("click", () => {
//             const totalValue = parseInt(totalDisplay.innerText);

//             if (!totalValue || totalValue === 0) {
//                 alert("⚠️ Your cart is empty! Please select at least one ticket.");
//             } else {
//                 alert(`💳 Proceeding to Payment...\n\nTotal: ${totalValue} EGP\n\nThank you for booking with GEM!`);
//             }
//         });
//     }
// });
