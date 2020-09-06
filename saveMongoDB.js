var fs = require("fs");

var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

var async = require("async");
var n = 0;
var db_name = '201019CN' //每次存储仅改此处！
var target_dir = 'data/' + db_name + '.json';

fs.readFile(target_dir, function (err, data) {
    if (err) throw err;
    console.log(data) //此时是一个Buffer对象
    var savedata = data.toString()
    console.log(typeof (savedata))
    var dataArr = JSON.parse(savedata)
    console.log(dataArr.length)
    //限制请求并发数为1
    async.mapLimit(dataArr, 1, saveToMongoDB.bind(this), function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log('数据save完毕!');
        }
    });
})
//for (var item in dataArr) 
// nowdata = dataArr[i]
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