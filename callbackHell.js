function printLetter(cb) {
    setTimeout(function () {
        cb('B')
        setTimeout(function () {
            cb(123)
            setTimeout(function () {
                cb("A")
            }, 400)
            // cb(123)
        }, 300)

    }, 2000)
}

// printLetter(print)
function print(a) {
    console.log(a)
}





const fs = require('fs');

fs.readFile('file1.txt', 'utf-8', function (err, data1) {
  if (err) {
    console.error('Error reading file1:', err);
  } else {
    console.log('Read file1:', data1);

    fs.readFile('file2.txt', 'utf-8', function (err, data2) {
      if (err) {
        console.error('Error reading file2:', err);
      } else {
        console.log('Read file2:', data2);

        fs.readFile('file3.txt', 'utf-8', function (err, data3) {
          if (err) {
            console.error('Error reading file3:', err);
          } else {
            console.log('Read file3:', data3);
          }
        });
      }
    });
  }
});
