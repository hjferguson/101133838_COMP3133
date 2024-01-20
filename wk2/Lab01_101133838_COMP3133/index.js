const fs = require('fs');
const csv = require('csv-parser');

const inputCSV = __dirname + '/input_countries.csv';
const canadaOutputFile = __dirname + '/canada.txt';
const usaOutputFile = __dirname + '/usa.txt';

// Function to delete a file if it exists
const deleteFileIfExists = (file) => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
};

// Delete existing output files if they exist
deleteFileIfExists(canadaOutputFile);
deleteFileIfExists(usaOutputFile);


// Create write streams for Canada and USA data
const canadaStream = fs.createWriteStream(canadaOutputFile, { flags: 'a' });
const usaStream = fs.createWriteStream(usaOutputFile, { flags: 'a' });

// Read and process the CSV file
fs.createReadStream(inputCSV)
    .pipe(csv())
    .on('data', (row) => {
        const line = `${Object.values(row).join(',')}\n`;
        if (row.country === 'Canada') {
            canadaStream.write(line);
        } else if (row.country === 'United States') {
            usaStream.write(line);
        }
    })
    .on('end', () => {
        canadaStream.close();
        usaStream.close();
        console.log('Task completed successfully!');
    });
