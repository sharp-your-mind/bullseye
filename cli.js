#!/usr/bin/env node

const numberTo2DigitalStr = require('./util');

const RED_MAX_NUMBER = 33
const RED_COUNT = 6

const BLUE_MAX_NUMBER = 16



let resultRedObj = {}, resultRedArr = [], i = 0
while (i < RED_COUNT) {
    const randomNum = Math.ceil(Math.random() * RED_MAX_NUMBER)
    if (!resultRedObj[randomNum]) {
        resultRedObj[randomNum] = randomNum
        resultRedArr.push(numberTo2DigitalStr(randomNum))
        i++
    }
}

const result = `${resultRedArr.join(" ")}    ${numberTo2DigitalStr(Math.ceil(Math.random() * BLUE_MAX_NUMBER))}`

console.log(result)



