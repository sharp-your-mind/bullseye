
function numberTo2DigitalStr(num) {
    const str = num.toString()
    return str.length === 2 ? str : `0${str}`
}

module.exports = numberTo2DigitalStr 
