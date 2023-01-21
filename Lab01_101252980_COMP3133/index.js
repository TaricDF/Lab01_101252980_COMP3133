const fs = require('fs')

var countries = fs.readFileSync("input_countries.csv", "utf-8")

//3A
try {
    fs.unlink("canada.txt")
    fs.unlink("usa.txt")
}
catch (e)
{
    console.log("File doesn't exist")
}

//3B
countries.split(/\r?\n/).forEach(line => {
    if(line.includes("Canada"))
    {
        fs.appendFileSync("canada.txt", `${line} \n`)
    }
})

//3C
countries.split(/\r?\n/).forEach(line => {
    if(line.includes("United States"))
    {
        fs.appendFileSync("usa.txt", `${line} \n`)
    }
})
