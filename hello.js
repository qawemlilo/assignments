var fs = require('fs');

try {
    fs.writeFileSync("./hello.txt", "A startup is a business built to grow rapidly.\n", "utf8");
    console.log('Done!');
} catch (error) {
    throw error;
}