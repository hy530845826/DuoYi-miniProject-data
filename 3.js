var express = require("express");
var path = require("path");

var app = express();
app.set("view engine", "ejs");

var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

var dataArr = [];

app.get("/", function (req, res) {
    res.render("index");
});

//haha
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

fs.readFile(target_dir, function (err, data) {
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
//haha

app.get("/dataPic:picId", function (req, res) {
    var nowID = req.params.picId;
    nowID = parseInt(nowID);
    switch (nowID) {
        case 0:
        case 1:
            fx01(req, res);
            break;
        case 2:
            fx2(req, res);
            break;
        case 3:
        case 8:
            fx38(req, res);
            break;
        case 4:
            fx4(req, res);
            break;
        case 5:
            fx5(req, res);
            break;
        case 6:
            fx6(req, res);
            break;
        case 7:
            fx7(req, res);
            break;
        case 9:
            fx9(req, res);
            break;
    }
});

// app.get("/dataPic0", function (req, res) {
//     fx01(req, res);
// })

function fx01(req, res) {
    var dataBox= minidata
    // huang()
    // var finalresult = 0;
    // dataBox.push(finalresult);
    console.log('----------------------ssshshshshsh')
    console.log(dataBox);
    res.write(JSON.stringify(dataBox));
    res.end("");

}

function fx2(req, res) {
    var dataBox = [];
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("192029CN").find().count(function (err, result) {
            dataBox.push(result); //result 其实就是获取的数量值
            dbo.collection("193039CN").find().count(function (err, result) {
                dataBox.push(result);
                dbo.collection("194049CN").find().count(function (err, result) {
                    dataBox.push(result);
                    dbo.collection("195059CN").find().count(function (err, result) {
                        dataBox.push(result);
                        dbo.collection("196069CN").find().count(function (err, result) {
                            dataBox.push(result);
                            dbo.collection("197079CN").find().count(function (err, result) {
                                dataBox.push(result);
                                dbo.collection("198089CN").find().count(function (err, result) {
                                    dataBox.push(result);
                                    dbo.collection("199099CN").find().count(function (err, result) {
                                        dataBox.push(result);
                                        dbo.collection("200009CN").find().count(function (err, result) {
                                            dataBox.push(result);
                                            dbo.collection("201019CN").find().count(function (err, result) {
                                                db.close();
                                                dataBox.push(result);
                                                console.log(dataBox);
                                                res.write(JSON.stringify(dataBox));
                                                res.end("");
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}

function fx38(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2019OTHER").find({}).toArray(function (err, result) {
            if (err) throw err;
            var result = paixu(result);
            res.write(JSON.stringify(result));
            res.end("");
        });
    });
}

function fx4(req, res) {
    var dataBox = [0, 0, 0, 0];
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2010CN").find().toArray(function (err, result) {
            dataBox = searchRateMini(result, dataBox);
            dbo.collection("2011CN").find().toArray(function (err, result) {
                dataBox = searchRateMini(result, dataBox);
                dbo.collection("2012CN").find().toArray(function (err, result) {
                    dataBox = searchRateMini(result, dataBox);
                    dbo.collection("2013CN").find().toArray(function (err, result) {
                        dataBox = searchRateMini(result, dataBox);
                        dbo.collection("2014CN").find().toArray(function (err, result) {
                            dataBox = searchRateMini(result, dataBox);
                            dbo.collection("2015CN").find().toArray(function (err, result) {
                                dataBox = searchRateMini(result, dataBox);
                                dbo.collection("2016CN").find().toArray(function (err, result) {
                                    dataBox = searchRateMini(result, dataBox);
                                    dbo.collection("2017CN").find().toArray(function (err, result) {
                                        dataBox = searchRateMini(result, dataBox);
                                        dbo.collection("2018CN").find().toArray(function (err, result) {
                                            dataBox = searchRateMini(result, dataBox);
                                            dbo.collection("2019CN").find().toArray(function (err, result) {
                                                db.close();
                                                dataBox = searchRateMini(result, dataBox);
                                                console.log(dataBox);
                                                res.write(JSON.stringify(dataBox));
                                                res.end("");
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}

function fx5(req, res) {
    var dataBox = [];
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2010CN").find().count(function (err, result) {
            dataBox.push(result); //result 其实就是获取的数量值
            dbo.collection("2011CN").find().count(function (err, result) {
                dataBox.push(result);
                dbo.collection("2012CN").find().count(function (err, result) {
                    dataBox.push(result);
                    dbo.collection("2013CN").find().count(function (err, result) {
                        dataBox.push(result);
                        dbo.collection("2014CN").find().count(function (err, result) {
                            dataBox.push(result);
                            dbo.collection("2015CN").find().count(function (err, result) {
                                dataBox.push(result);
                                dbo.collection("2016CN").find().count(function (err, result) {
                                    dataBox.push(result);
                                    dbo.collection("2017CN").find().count(function (err, result) {
                                        dataBox.push(result);
                                        dbo.collection("2018CN").find().count(function (err, result) {
                                            dataBox.push(result);
                                            dbo.collection("2019CN").find().count(function (err, result) {
                                                db.close();
                                                dataBox.push(result);
                                                console.log(dataBox);
                                                res.write(JSON.stringify(dataBox));
                                                res.end("");
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}

function fx6(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2019CN").find({ //查询评分0-5之间
            '$where': 'this.rate<5&&this.rate>0'
        }).toArray(function (err, result) {
            if (err) throw err;
            var finalresult = searchTitleMini(result);
            db.close();
            res.write(JSON.stringify(finalresult));
            res.end("");
        });
    });
}

function fx7(req, res) {
    var dataBox = [];
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("201019CN").find({
            'directors': '周星驰'
        }).toArray(function (err, result) {
            dataBox.push(result);
            dbo.collection("200009CN").find({
                'directors': '周星驰'
            }).toArray(function (err, result) {
                dataBox.push(result);
                console.log(dataBox)
                db.close();
                res.write(JSON.stringify(dataBox));
                res.end("");
            });
        });
    });
}

function fx9(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2019CN").find({ //查询所有有评分的电影
            '$where': 'this.rate>0'
        }).toArray(function (err, result) {
            if (err) throw err;
            var finalresult = searchTitle(result);
            db.close();
            res.write(JSON.stringify(finalresult));
            res.end("");
        });
    });
}

function searchTitleMini(result) {
    var arr = [
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            []
        ]
    ]
    for (var item in result) {
        var x = parseFloat(result[item].rate);
        var titleName = result[item].title;
        if (4 <= x && x < 5) {
            var xx = 9 - (x * 10 - 40); //倒序放入4.9，4.8……
            (arr[0])[xx].push(titleName);
        } else if (3 <= x && x < 4) {
            var xx = 9 - (x * 10 - 30);
            (arr[1])[xx].push(titleName);
        } else if (2 <= x && x < 3) {
            (arr[2])[0].push(titleName);
        } else {
            (arr[2])[1].push(titleName);
        }
    }
    return arr;
}

function searchTitle(result, dataBox) {
    var arr = [
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            []
        ]
    ]
    for (var item in result) {
        var x = parseFloat(result[item].rate);
        var titleName = result[item].title;
        if (9 <= x) {
            var xx = 10 - (x * 10 - 90); //倒序放入10.0，9.9，9.8……
            (arr[0])[xx].push(titleName);
        } else if (8 <= x && x < 9) {
            var xx = 9 - (x * 10 - 80);
            (arr[1])[xx].push(titleName);
        } else if (7 <= x && x < 8) {
            var xx = 9 - (x * 10 - 70);
            (arr[2])[xx].push(titleName);
        } else if (6 <= x && x < 7) {
            var xx = 9 - (x * 10 - 60);
            (arr[3])[xx].push(titleName);
        } else if (5 <= x && x < 6) {
            var xx = 9 - (x * 10 - 50);
            (arr[4])[xx].push(titleName);
        } else if (4 <= x && x < 5) {
            var xx = 9 - (x * 10 - 40);
            (arr[5])[xx].push(titleName);
        } else if (3 <= x && x < 4) {
            var xx = 9 - (x * 10 - 30);
            (arr[6])[xx].push(titleName);
        } else if (2 <= x && x < 3) {
            (arr[7])[0].push(titleName);
        } else {
            (arr[7])[1].push(titleName);
        }
    }
    return arr;
}

function searchRateMini(result, dataBox) {
    console.log(dataBox);
    for (var item in result) {
        var x = parseFloat(result[item].rate);
        if (7 < x && x <= 10) {
            dataBox[0]++;
        } else if (5 < x && x <= 7) {
            dataBox[1]++;
        } else if (3 < x && x <= 5) {
            dataBox[2]++;
        } else if (0 < x && x <= 5) {
            dataBox[3]++;
        }
    }
    return dataBox;
}

function searchRate(result) {
    console.log(result.length);
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var item in result) {
        var x = parseFloat(result[item].rate);
        if (9.5 < x && x <= 10) {
            arr[0]++;
        } else if (9 < x && x <= 9.5) {
            arr[1]++;
        } else if (8.5 < x && x <= 9) {
            arr[2]++;
        } else if (8 < x && x <= 8.5) {
            arr[3]++;
        } else if (7.5 < x && x <= 8) {
            arr[4]++;
        } else if (7 < x && x <= 7.5) {
            arr[5]++;
        } else if (6.5 < x && x <= 7) {
            arr[6]++;
        } else if (6 < x && x <= 6.5) {
            arr[7]++;
        } else if (5.5 < x && x <= 6) {
            arr[8]++;
        } else if (5 < x && x <= 5.5) {
            arr[9]++;
        } else if (4.5 < x && x <= 5) {
            arr[10]++;
        } else if (4 < x && x <= 4.5) {
            arr[11]++;
        } else if (3.5 < x && x <= 4) {
            arr[12]++;
        } else if (3 < x && x <= 3.5) {
            arr[13]++;
        } else if (2.5 < x && x <= 3) {
            arr[14]++;
        } else if (0 <= x && x <= 2.5) {
            arr[15]++;
        }
    }
    return arr;
}

function paixu(result) {
    for (var i = 0; i < result.length - 1; i++) {
        for (var j = 0; j < result.length - 1 - i; j++) {
            var resa = (parseInt(result[j].sumOfMovie));
            var resb = (parseInt(result[j + 1].sumOfMovie));
            if (resa > resb) {
                var temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    result = result.reverse(); //逆序输出
    return result;
}

//引入静态文件，自动添加public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function () {
    console.log("http://127.0.0.1:8000")
})