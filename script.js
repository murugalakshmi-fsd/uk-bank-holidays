document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchHolidaysButton').addEventListener('click', function () {
        // API endpoint (UK government bank holidays)
        const apiUrl = 'https://www.gov.uk/bank-holidays.json';

        // Fetch data from API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the data and update the DOM
                updateBankHolidays(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});

function updateBankHolidays(data) {
    const bankHolidaysDiv = document.getElementById('bankHolidays');
    bankHolidaysDiv.innerHTML = '';
    const holidaysList = document.createElement('ul');
        data['england-and-wales'].events.forEach(holiday => {
        const holidayItem = document.createElement('li');
        holidayItem.innerHTML = `
            <strong>${holiday.title}</strong>: ${holiday.date}<br>
            Notes: ${holiday.notes}<br>
            Type: ${holiday.type}<br>
            Bunting: ${holiday.bunting}
        `;
        holidaysList.appendChild(holidayItem);
    });

     bankHolidaysDiv.appendChild(holidaysList);
}