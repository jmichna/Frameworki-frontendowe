const fs = require('fs');

function generateRandomBirthDate() {
    const start = new Date(1970, 0, 1);
    const end = new Date(2010, 0, 1);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        .toISOString()
        .split('T')[0];
}

function getRandomEyeColor() {
    const colors = ['blue', 'green', 'brown', 'hazel', 'gray'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomRate() {
    const rate = [1,2,3,4,5,6,7,8,9,10];
    return rate[Math.floot(Math.random() * rate.length)]
}


const count = Number(process.argv[2]) || 10;

let names = [];

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    let content = "export const data = [\n";
    
    for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const person = {
            id: i + 1,
            name: randomName,
            birth: generateRandomBirthDate(),
            eyes: getRandomEyeColor(),
            rate: getRandomRate(),
        };
        content += `  ${JSON.stringify(person)},\n`;
    }
    
    content += "];";

    fs.writeFile('./module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('module-data.js generated');
        }
    });
});