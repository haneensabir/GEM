document.addEventListener('DOMContentLoaded', function () {
    // --- 1. SELECTIONS ---
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');
    const payBtn = document.querySelector('.payment-btn');
    const dateInput = document.querySelector('.date-input');

    // --- 2. LOAD DATA FROM LOCAL STORAGE ---
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('gemBooking'));
        
        if (savedData) {
            // Restore Date
            if (savedData.date) dateInput.value = savedData.date;
            
            // Restore Counts
            rows.forEach((row, index) => {
                const countSpan = row.querySelector('.count');
                if (savedData.counts && savedData.counts[index] !== undefined) {
                    countSpan.innerText = savedData.counts[index];
                }
            });
            calculateTotal();
        }
    }

    // --- 3. SAVE DATA TO LOCAL STORAGE ---
    function saveData() {
        const counts = [];
        rows.forEach(row => {
            counts.push(parseInt(row.querySelector('.count').innerText));
        });

        const bookingInfo = {
            date: dateInput.value,
            counts: counts
        };

        localStorage.setItem('gemBooking', JSON.stringify(bookingInfo));
    }

    // --- 4. TICKET COUNTER LOGIC ---
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
            saveData(); // Save every time a change happens
        });

        minusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            if (count > 0) {
                count--;
                countSpan.innerText = count;
                calculateTotal();
                saveData(); // Save every time a change happens
            }
        });
    });

    // Save date changes
    dateInput.addEventListener('change', saveData);

    // --- 5. CALCULATION LOGIC ---
    function calculateTotal() {
        let total = 0;
        rows.forEach(row => {
            const count = parseInt(row.querySelector('.count').innerText) || 0;
            const price = parseInt(row.querySelector('.price-val').innerText) || 0;
            total += count * price;
        });
        totalDisplay.innerText = total + " EGP";
    }

    // --- 6. PAYMENT VALIDATION ---
    if (payBtn) {
        payBtn.addEventListener("click", () => {
            const totalValue = parseInt(totalDisplay.innerText);
            const selectedDate = dateInput.value;

            if (!selectedDate) {
                alert("⚠️ Please select a visit date first.");
                return;
            }

            if (!totalValue || totalValue === 0) {
                alert("⚠️ Your cart is empty! Please select at least one ticket.");
            } else {
                alert(`💳 Proceeding to Payment...\n\nDate: ${selectedDate}\nTotal: ${totalValue} EGP\n\nThank you for booking with GEM!`);
                
                // Optional: Clear storage after successful "payment"
                // localStorage.removeItem('gemBooking');
            }
        });
    }

    // Initialize the app by loading data
    loadSavedData();
});
