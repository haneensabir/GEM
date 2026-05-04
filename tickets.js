document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.ticket-row');
    const totalDisplay = document.getElementById('grand-total');
    const payBtn = document.querySelector('.payment-btn');
    const dateInput = document.querySelector('.date-input');
    function loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('gemBooking'));
        
        if (savedData) {
            if (savedData.date) dateInput.value = savedData.date;
            rows.forEach((row, index) => {
                const countSpan = row.querySelector('.count');
                if (savedData.counts && savedData.counts[index] !== undefined) {
                    countSpan.innerText = savedData.counts[index];
                } });
            calculateTotal();
        } }
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
            saveData(); 
        });

        minusBtn.addEventListener('click', () => {
            let count = parseInt(countSpan.innerText);
            if (count > 0) {
                count--;
                countSpan.innerText = count;
                calculateTotal();
                saveData(); 
            }
        });
    });
    dateInput.addEventListener('change', saveData);
    function calculateTotal() {
        let total = 0;
        rows.forEach(row => {
            const count = parseInt(row.querySelector('.count').innerText) || 0;
            const price = parseInt(row.querySelector('.price-val').innerText) || 0;
            total += count * price;
        });
        totalDisplay.innerText = total + " EGP";
    }
    if (payBtn) {
        payBtn.addEventListener("click", () => {
            const totalValue = parseInt(totalDisplay.innerText);
            const selectedDate = dateInput.value;

            if (!selectedDate) {
                alert("Please select a visit date first.");
                return;
            }

            if (!totalValue || totalValue === 0) {
                alert(" Your cart is empty! Please select at least one ticket.");
            } else {
                alert(` Proceeding to Payment...\n\nDate: ${selectedDate}\nTotal: ${totalValue} EGP\n\nThank you for booking with GEM!`);
            }
        });
    }
    loadSavedData();
});
