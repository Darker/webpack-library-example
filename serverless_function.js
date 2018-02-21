require("babel-core/register");
const fs = require("fs");

function ReadTestFile() {
    return new Promise(function (res, rej) {
        fs.readFile("test.txt", function (err, data) {
            if (err)
                rej(err);
            else
                res(data);
        })
    });
}

async function testFunction(event, context, callback) {
    const response = {
        statusCode: 200,
        headers: {

            "Content-Type": "text/plain",
            "Content-Disposition": "inline; filename=\"test.txt\""
        },
        body: await ReadTestFile()
    };
    return callback(null, response);
}
console.log("Exporting function: ", testFunction);
export default testFunction;