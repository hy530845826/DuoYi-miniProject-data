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
    var dataBox = [];
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sxProduct3");
        dbo.collection("2019CN").find({}).toArray(function (err, result) {
            if (err) throw err;
            var finalresult = searchRate(result);
            dataBox.push(finalresult);
            dbo.collection("2019USA").find({}).toArray(function (err, result) {
                db.close(); //刚才把数据库关了，所以返回null，我差点以为又要异步限制！
                var finalresult = searchRate(result);
                dataBox.push(finalresult);
                console.log(dataBox);
                res.write(JSON.stringify(dataBox));
                res.end("");
            });
        });
    });
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