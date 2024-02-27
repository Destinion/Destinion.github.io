//aperitiv
document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from aperitiv.csv
    fetch('../data/aperitiv.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            // Find the index of each column
            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');
            const weightIndex = headers.indexOf('weight');

            // Select the #aperitiv div
            const aperitivDiv = document.getElementById('aperitiv');

            // Loop through rows and create HTML content
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];
                const weight = values[weightIndex] !== undefined ? values[weightIndex] + ' g' : ''; // Include weight only if it exists

                // Create a div for each item and append to #aperitiv
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p><strong>${price} Kč</strong></p>
                        <p>${weight}</p>
                    </div>
                `;
                aperitivDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//main course
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/main_course.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');
            const weightIndex = headers.indexOf('weight');

            const aperitivDiv = document.getElementById('main_course');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];
                const weight = values[weightIndex] !== undefined ? values[weightIndex] + ' g' : '';

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p><strong>${price} Kč</strong></p>
                        <p>${weight}</p>
                    </div>
                `;
                aperitivDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//desserts
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/desserts.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');
            const weightIndex = headers.indexOf('weight');

            const aperitivDiv = document.getElementById('desserts');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];
                const weight = values[weightIndex] !== undefined ? values[weightIndex] + ' g' : '';

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p><strong>${price} Kč</strong></p>
                        <p>${weight}</p>
                    </div>
                `;
                aperitivDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//alcoholiv drinks
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/alcoholic_drinks.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');
            const weightIndex = headers.indexOf('weight');

            const aperitivDiv = document.getElementById('alcoholic_drinks');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];
                const weight = values[weightIndex] !== undefined ? values[weightIndex] + ' ml' : '';

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p><strong>${price} Kč</strong></p>
                        <p>${weight}</p>
                    </div>
                `;
                aperitivDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//nonalcoholic drinks
document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/nonalcoholic_drinks.csv')
        .then(response => response.text())
        .then(data => {
            
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const imageIndex = headers.indexOf('image');
            const nameIndex = headers.indexOf('name');
            const descriptionIndex = headers.indexOf('description');
            const priceIndex = headers.indexOf('price');
            const weightIndex = headers.indexOf('weight');

            const aperitivDiv = document.getElementById('nonalcoholic_drinks');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const image = values[imageIndex];
                const name = values[nameIndex];
                const description = values[descriptionIndex];
                const price = values[priceIndex];
                const weight = values[weightIndex] !== undefined ? values[weightIndex] + ' ml' : '';

                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="stuff">
                        <h3>${name}</h3>
                        <p class="popis">${description}</p>
                        <p><strong>${price} Kč</strong></p>
                        <p>${weight}</p>
                    </div>
                `;
                aperitivDiv.appendChild(itemDiv);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
