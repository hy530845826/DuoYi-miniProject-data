var cheerio = require("cheerio");

var async = require("async");
var fs = require("fs");
var request = require('request')
var options = [],
    n = 0,
    bfnumber = 2,
    timeline = {};

var base_url = 'https://movie.douban.com/j/new_search_subjects?sort=U',
    base_range = '&range=0,10',
    base_tags = '&tags=%E7%94%B5%E5%BD%B1', //电影：%E7%94%B5%E5%BD%B1
    base_countries = '&countries=%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86',
    //中国大陆：%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86
    //美国：%E7%BE%8E%E5%9B%BD
    //香港：%E4%B8%AD%E5%9B%BD%E9%A6%99%E6%B8%AF
    //台湾：%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE
    //日本：%E6%97%A5%E6%9C%AC
    //韩国：%E9%9F%A9%E5%9B%BD
    //英国：%E8%8B%B1%E5%9B%BD
    //法国：%E6%B3%95%E5%9B%BD
    base_year_range = '&year_range=1960,1969';

var target_dir = 'data/196069CN.json';

for (var startnumber = 0; startnumber < 4000; startnumber += 20) {
    //测试网页
    // var final_url = base_url + base_range + '&tags=movie' + "&start=" + startnumber
    //常规网页
    var final_url = base_url + base_range + base_tags + "&start=" + startnumber + base_countries + base_year_range;
    options.push(final_url);
}
console.log(options)
var dataArr = [];

function spider(option, callback) {
    n++;
    timeline[option] = new Date().getTime();
    console.log('现在的并发数是', n, '，正在抓取的是', option);
    //数据抓取中……
    request(option, function (err, res, data) {
        if (!err) {
            var $ = cheerio.load(data);
            var sj = $('body').text();

            var movieItems = JSON.parse(sj);
            //length:本次获取的数据长度
            var length = movieItems.data.length;
            //转换为json字符串进行数据清洗
            movieItems = JSON.stringify(movieItems.data)

            var nowIndexBox = option.match(/&start=\d*/); //返回匹配的数组
            var nowIndex = nowIndexBox[0].match(/[0-9]+/)
            nowIndex /= 20;

            //清洗数据
            for (i = 0; i < length; i++) {
                var Regstar = /,"(star)":"(\d)*"/
                movieItems = movieItems.replace(Regstar, "");
                var Regcoverx = /,"(cover_x)":"?(\d)*"?/
                movieItems = movieItems.replace(Regcoverx, "");
                var Regcovery = /,"(cover_y)":"?(\d)*"?/
                movieItems = movieItems.replace(Regcovery, "");
                var Regcover = /,"(cover)":"[\w:\/.]*"/
                movieItems = movieItems.replace(Regcover, "");
                var Regid = /,"(id)":"(\d)*"/
                movieItems = movieItems.replace(Regid, "");
                var Regurl = /,"(url)":"[\w:\/.]*"/
                movieItems = movieItems.replace(Regurl, "");
            }
            //变为json数组
            var ajson = JSON.parse(movieItems);

            //避免后X页的空白数组导入
            if (length != 0) {
                dataArr.push(ajson);
            }
            console.log('抓取', option, '结束，耗时：', new Date().getTime() - timeline[option], '毫秒');
            n--;
            if (length == 20) {
                callback(null, 'done!');
            } else {
                //结束底部标志
                console.log(option + "---------------------" + "---------------" + nowIndex);
                //options.splice(nowIndex + bfnumber, options.length + 1 - nowIndex - bfnumber) //删除后面的地址数组
                //console.log(options)
                if (n == 0) {
                    fs.writeFile(target_dir, JSON.stringify(dataArr), 'utf-8', function (err) {
                        if (err) {
                            console.log('write file error!');
                        } else {
                            console.log('里write sucess!');
                        }
                    })
                }
            }
        } else {
            console.log(err);
            n--;
            callback(err, null);
        }
    });
}

//限制请求并发数为3
async.mapLimit(options, bfnumber, spider.bind(this), function (err, result) {
    if (err) {
        console.log(err);
    } else {
        //存入json
        fs.writeFile(target_dir, JSON.stringify(dataArr), 'utf-8', function (err) {
            if (err) {
                console.log('write file error!');
            } else {
                console.log('外write sucess!');
            }
        });
        console.log('外外write sucess!');
    }
});