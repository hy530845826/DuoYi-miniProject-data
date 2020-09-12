var fs = require("fs")

var async = require("async")
var n = 0
var target_dir = 'data/duoyi.json'

var minidata = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

var numberdata = [1110000000,
    1101000000,
    1100100000,
    1100010000,
    1100001000,
    1100000100,
    1100000010,
    1100000001,
    1011000000,
    1010100000,
    1010010000,
    1010001000,
    1010000100,
    1010000010,
    1010000001,
    1001100000,
    1001010000,
    1001001000,
    1001000100,
    1001000010,
    1001000001,
    1000110000,
    1000101000,
    1000100100,
    1000100010,
    1000100001,
    1000011000,
    1000010100,
    1000010010,
    1000010001,
    1000001100,
    1000001010,
    1000001001,
    1000000110,
    1000000101,
    1000000011,
    111000000,
    110100000,
    110010000,
    110001000,
    110000100,
    110000010,
    110000001,
    101100000,
    101010000,
    101001000,
    101000100,
    101000010,
    101000001,
    100110000,
    100101000,
    100100100,
    100100010,
    100100001,
    100011000,
    100010100,
    100010010,
    100010001,
    100001100,
    100001010,
    100001001,
    100000110,
    100000101,
    100000011,
    11100000,
    11010000,
    11001000,
    11000100,
    11000010,
    11000001,
    10110000,
    10101000,
    10100100,
    10100010,
    10100001,
    10011000,
    10010100,
    10010010,
    10010001,
    10001100,
    10001010,
    10001001,
    10000110,
    10000101,
    10000011,
    1110000,
    1101000,
    1100100,
    1100010,
    1100001,
    1011000,
    1010100,
    1010010,
    1010001,
    1001100,
    1001010,
    1001001,
    1000110,
    1000101,
    1000011,
    111000,
    110100,
    110010,
    110001,
    101100,
    101010,
    101001,
    100110,
    100101,
    100011,
    11100,
    11010,
    11001,
    10110,
    10101,
    10011,
    1110,
    1101,
    1011,
    111
]

fs.readFile(target_dir, "utf-8", function (err, data) {
    if (err) throw err;
    // console.log(data) //此时是一个Buffer对象
    var savedata = data.toString()
    console.log(typeof (savedata))

    var sb = JSON.parse(savedata)
    console.log("---------------------------------------sb")
    console.log(sb)
    for (var i = 0; i < sb.length; i++) {
        console.log(sb[i])
        var ls_win = sb[i].win,
            ls_lose = sb[i].lose
        var sum_win = 0,
            sum_lose = 0
        for (let i = 0; i < 3; i++) {
            let lsnumber1 = parseInt(ls_win[i])
            let lsnumber2 = parseInt(ls_lose[i])
            addshenglv(lsnumber1, lsnumber2)
            sum_win += lsnumber1
            sum_lose += lsnumber2
        }
        var key_win, key_lose
        // console.log(sum_win)//和
        // console.log(sum_lose)
        for (let key in numberdata) {
            let jj = 0
            if (numberdata[key] == sum_win) {
                jj++
                key_win = parseInt(key)
            }
            if (numberdata[key] == sum_lose) {
                jj++
                key_lose = parseInt(key)
            }
            if (jj == 2) break
        }
        // console.log(key_win)//index
        // console.log(key_lose)
        minidata[0][key_win] += 1
        minidata[1][key_lose] += 1
    }
    console.log(minidata)
})

function addshenglv(win, lose) {
    let lsnum1,lsnum2
    lsnum1 = (win.toString().length) - 1
    lsnum2= (lose.toString().length) - 1
    minidata[2][lsnum1] += 1
    minidata[3][lsnum2] += 1
}

function getExecStrs(str) {
    var reg = /\$\((.+?)\)/g
    var list = []
    var result = null
    do {
        result = reg.exec(str)
        result && list.push(result[1])
    } while (result)
    return list
}