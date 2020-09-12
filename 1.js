var fs = require("fs");

// var mongo = require("mongodb");
// var MongoClient = mongo.MongoClient;
// var url = "mongodb://localhost:27017/";

var async = require("async");
var n = 0;
var db_name = 'test' //每次存储仅改此处！
var target_dir = 'data/' + db_name + '.txt';

fs.readFile(target_dir, "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data) //此时是一个Buffer对象
    var savedata = data.toString()
    console.log(typeof (savedata))


    var sb = getExecStrs(savedata)
    console.log("---------------------------------------sb")
    console.log(sb)
    console.log("---------------------------------------sb")
    var arr = []
    for (var i = 0; i < sb.length; i++) {
        var dataArr = JSON.parse(sb[i])
        arr.push(dataArr)
        console.log(dataArr)
    }

    fs.writeFile('data/duoyi.json', JSON.stringify(arr), 'utf-8', function (err) {
        if (err) {
            console.log('write file error!');
        } else {
            console.log('里write sucess!');
        }
    })

    console.log("---------------------------------------arr")
    console.log(arr)
    // //限制请求并发数为1
    // async.mapLimit(dataArr, 1, saveToMongoDB.bind(this), function (err, result) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         console.log('数据save完毕!');
    //     }
    // });
})

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

function saveToMongoDB(nowdata, callback) {
    n++;
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err, db) {
        if (err) console.log("数据库连接失败...");
        var dbo = db.db("sxProduct3");
        dbo.collection(db_name).insertMany(nowdata, function (err, res) {
            if (err) throw err;
            db.close();
        });
    });
    n--;
    callback(null, 'done!');
}