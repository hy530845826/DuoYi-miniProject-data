//基于准备好的dom，初始化echarts实例
var modeldom = document.getElementById('model')
const model = echarts.init(modeldom, 'walden'); //插入walden主题
function fuck(picId, picData) {
    model.clear();
    switch (picId) {
        case 0: //1.根据国家生成电影评分和电影数量的柱状图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '卡牌分析'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    right: '10%',
                    top: 10
                },
                xAxis: {
                    name: '评分',
                    type: 'category',
                    data: ['天策',
                        '东海龙宫',
                        '佛门',
                        '七星方寸',
                        '万兽岭',
                        '魔王山',
                        '盘丝岭',
                        '南海普陀',
                        '凌霄天宫',
                        '曜华城'
                    ]
                },
                yAxis: {
                    name: '数量：次数'
                },
                series: [{
                        name: '胜利',
                        type: 'bar',
                        data: []
                    },
                    {
                        name: '失败',
                        type: 'bar',
                        data: []
                    }
                ]
            };
            //插入数据
            var picData = JSON.parse(picData)
            console.log('0000000000000000000000000000')
            console.log(picData[2])
            console.log( tempOptions.series[0].data)
            for (var i in picData[2]) {
                // var nowData = picData[i]
                // for (var item in nowData) {
                tempOptions.series[0].data.push(picData[2][i]);
                // }
            }
            for (var i in picData[3]) {
                tempOptions.series[1].data.push(picData[3][i]);
            }
            break;
        case 1: //2.对比任意两个国家电影评分和电影数量的折线图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '2019年影评分和电影数量对比分析'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    right: '10%',
                    top: 10
                },
                xAxis: {
                    name: '评分',
                    type: 'category',
                    data: ['9.5-10.0',
                        '9.0-9.5',
                        '8.5-9.0',
                        '8.0-8.5',
                        '7.5-8.0',
                        '7.0-7.5',
                        '6.5-7.0',
                        '6.0-6.5',
                        '5.5-6.0',
                        '5.0-5.5',
                        '4.5-5.0',
                        '4.0-4.5',
                        '3.5-4.0',
                        '3.0-4.5',
                        '2.5-3.0',
                        '2.5以下'
                    ]
                },
                yAxis: {
                    name: '数量：部'
                },
                series: [{
                        name: '中国大陆',
                        type: 'line',
                        data: [],
                        markPoint: {
                            data: [{
                                type: 'max',
                                name: '最大值'
                            }]
                        }
                    },
                    {
                        name: '美国',
                        type: 'line',
                        data: [],
                        markPoint: {
                            data: [{
                                type: 'max',
                                name: '最大值'
                            }]
                        }
                    }
                ]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                var nowData = picData[i]
                for (var item in nowData) {
                    tempOptions.series[i].data.push(nowData[item]);
                }
            }
            break;
        case 2: //3.近十年每年发行的电影数量分布柱状图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '近百年中国发行电影的数量分布'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [{
                    name: '年份',
                    type: 'category',
                    data: ['1920-1929', '1930-1939', '1940-1949', '1950-1959', '1960-1969', '1970-1979', '1980-1989', '1990-1999', '2000-2009', '2010-2019'],
                }],
                yAxis: [{
                    name: '数量：部',
                    type: 'value'
                }],
                series: [{
                    name: '电影发行量',
                    type: 'bar',
                    barWidth: '50%',
                    data: [],
                    markPoint: {
                        data: [{
                                type: 'max',
                                name: '最大值'
                            },
                            {
                                type: 'min',
                                name: '最小值'
                            }
                        ]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                tempOptions.series[0].data.push(picData[i]);
            };
            break;
        case 3: //4.2019年截至到今天为止各个国家发行的电影数量分布图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '2019年各个国家发行的电影数量分析'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [{
                    name: '国家',
                    type: 'category',
                    data: [],
                    "axisLabel": {
                        interval: 0,
                        rotate: 45
                    }
                }],
                yAxis: [{
                    name: '数量：部',
                    type: 'value'
                }],
                series: [{
                    name: '电影发行量',
                    type: 'bar',
                    barWidth: '50%',
                    data: [],
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                tempOptions.xAxis[0].data.push(picData[i].country);
                tempOptions.series[0].data.push(picData[i].sumOfMovie);
            };
            break;
        case 4: //5.近十年中国发行的电影评分（0~3、3~5、5~7、7~10）的范围的数量分布图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '近十年中国发行电影的数量分布'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} 为{b}<br/>数量: {c} (占{d}%)"
                },
                legend: {
                    bottom: 10,
                    left: 'center',
                    data: ['7-10', '5-7', '3-5', '0-3']
                },
                series: [{
                    name: '电影评分',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [{
                            value: 0,
                            name: '7-10'
                        },
                        {
                            value: 0,
                            name: '5-7'
                        },
                        {
                            value: 0,
                            name: '3-5'
                        },
                        {
                            value: 0,
                            name: '0-3'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                tempOptions.series[0].data[i].value = picData[i];
            };
            break;
        case 5: //6.近十年中国发行的电影每一年的数量分布图
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '近十年中国发行电影的数量分布'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [{
                    name: '年份',
                    type: 'category',
                    data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                }],
                yAxis: [{
                    name: '数量：部',
                    type: 'value'
                }],
                series: [{
                    name: '电影发行量',
                    type: 'bar',
                    barWidth: '50%',
                    data: [],
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                tempOptions.series[0].data.push(picData[i]);
            };
            break;
        case 6: //7.2019年截至到今天为止评分在5分以下的电影名称
            //数据配置
            var data6 = [{
                name: '平淡无奇\n4~4.9',
                label: {
                    textStyle: {
                        "fontSize": 20
                    }
                },
                children: [{
                    name: '4.9',
                    children: []
                }, {
                    name: '4.8',
                    children: []
                }, {
                    name: '4.7',
                    children: []
                }, {
                    name: '4.6',
                    children: []
                }, {
                    name: '4.5',
                    children: []
                }, {
                    name: '4.4',
                    children: []
                }, {
                    name: '4.3',
                    children: []
                }, {
                    name: '4.2',
                    children: []
                }, {
                    name: '4.1',
                    children: []
                }, {
                    name: '4.0',
                    children: []
                }]
            }, {
                name: '不堪一击\n3~3.9',
                label: {
                    textStyle: {
                        "fontSize": 20
                    }
                },
                children: [{
                    name: '3.9',
                    children: []
                }, {
                    name: '3.8',
                    children: []
                }, {
                    name: '3.7',
                    children: []
                }, {
                    name: '3.6',
                    children: []
                }, {
                    name: '3.5',
                    children: []
                }, {
                    name: '3.4',
                    children: []
                }, {
                    name: '3.3',
                    children: []
                }, {
                    name: '3.2',
                    children: []
                }, {
                    name: '3.1',
                    children: []
                }, {
                    name: '3.0',
                    children: []
                }]
            }, {
                name: '绝世烂片\n<3',
                label: {
                    textStyle: {
                        "fontSize": 20
                    }
                },
                children: [{
                    name: '2.0-2.9',
                    children: []
                }, {
                    name: '2分以下',
                    children: []
                }]
            }];
            //插入数据
            var picData = JSON.parse(picData)
            for (var item in picData) {
                //picData[item]为3个大集合，内容为[.9,.8……]
                var groupBox = picData[item]
                for (var rate in groupBox) {
                    //groupBox[rate]为每个.x评分的电影集合
                    var group = groupBox[rate]
                    var target = ((data6[item]).children[rate]).children
                    for (index in group) {
                        //group[index]每个.x评分中的具体名称
                        let sb = {
                            name: group[index],
                            value: 1
                        }
                        target.push(sb)
                    }
                }
            }
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '2019年评分5分以下的电影',
                    subtextStyle: {
                        align: 'center'
                    }
                },
                series: {
                    type: 'sunburst',
                    highlightPolicy: 'ancestor',
                    data: data6,
                    radius: [0, '95%'],
                    sort: null,
                    levels: [{}, {
                        r0: '25%',
                        r: '50%',
                        itemStyle: {
                            borderWidth: 2
                        },
                        label: {
                            rotate: 'tangential'
                        }
                    }, {
                        r0: '50%',
                        r: '67%',
                        label: {
                            rotate: 'tangential'
                        }
                    }, {
                        r0: '67%',
                        r: '70%',
                        label: {
                            position: 'outside',
                            padding: 3,
                            silent: false
                        },
                        itemStyle: {
                            borderWidth: 3
                        }
                    }]
                }
            };
            break;
        case 7: //8.最近20年周星驰导演的电影评分
            var tempOptions = {
                title: {
                    text: '最近20年周星驰导演的电影评分'
                },
                tooltip: {},
                radar: {
                    indicator: []
                },
                series: [{
                    type: 'radar',
                    data: [{
                        value: [],
                        name: '豆瓣得分'
                    }]
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                var nowData = picData[i]
                for (var item in nowData) {
                    let sb = {
                        name: nowData[item].title,
                        max: 10
                    }
                    tempOptions.radar.indicator.push(sb);
                    tempOptions.series[0].data[0].value.push(nowData[item].rate);
                }
            }
            break;
        case 8: //9.对比任意两个国家电影评分和电影数量的折线图
            var tempOptions = {
                title: {
                    text: '2019各个国家发行的电影数量分析(世界地图)'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} (部)'
                },
                visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 2500,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    color: ['orangered', 'yellow', 'lightskyblue'],
                    textStyle: {
                        color: '#eee'
                    }
                },
                series: [{
                    type: 'map',
                    mapType: 'world',
                    data: [],
                    nameMap: {
                        'Australia': '澳大利亚',
                        'Brazil': '巴西',
                        'Canada': '加拿大',
                        'China': '中国大陆',
                        'Germany': '德国',
                        'Denmark': '丹麦',
                        'Spain': '西班牙',
                        'France': '法国',
                        'United Kingdom': '英国',
                        'India': '印度',
                        'Ireland': '爱尔兰',
                        'Iran': '伊朗',
                        'Italy': '意大利',
                        'Japan': '日本',
                        'Korea': '韩国',
                        'Russia': '俄罗斯',
                        'Sweden': '瑞典',
                        'Thailand': '泰国',
                        'United States': '美国'
                    }
                }]
            };
            //插入数据
            var picData = JSON.parse(picData)
            for (var i in picData) {
                let sb = {
                    name: picData[i].country,
                    value: picData[i].sumOfMovie
                }
                tempOptions.series[0].data.push(sb);
            }
            break;
        case 9:
            //数据配置
            var data9 = [{
                    name: '惊世\n骇俗\n9+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '登峰\n造极\n10.0',
                        children: []
                    }, {
                        name: '9.9',
                        children: []
                    }, {
                        name: '9.8',
                        children: []
                    }, {
                        name: '9.7',
                        children: []
                    }, {
                        name: '9.6',
                        children: []
                    }, {
                        name: '9.5',
                        children: []
                    }, {
                        name: '9.4',
                        children: []
                    }, {
                        name: '9.3',
                        children: []
                    }, {
                        name: '9.2',
                        children: []
                    }, {
                        name: '9.1',
                        value: 10,
                        children: []
                    }, {
                        name: '9.0',
                        children: []
                    }]
                },
                {
                    name: '非同\n凡响\n8+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '8.9',
                        children: []
                    }, {
                        name: '8.8',
                        children: []
                    }, {
                        name: '8.7',
                        children: []
                    }, {
                        name: '8.6',
                        value: 10,
                        children: []
                    }, {
                        name: '8.5',
                        children: []
                    }, {
                        name: '8.4',
                        children: []
                    }, {
                        name: '8.3',
                        children: []
                    }, {
                        name: '8.2',
                        children: []
                    }, {
                        name: '8.1',
                        children: []
                    }, {
                        name: '8.0',
                        children: []
                    }]
                },
                {
                    name: '出类\n拔萃\n7+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '7.9',
                        children: []
                    }, {
                        name: '7.8',
                        children: []
                    }, {
                        name: '7.7',
                        children: []
                    }, {
                        name: '7.6',
                        children: []
                    }, {
                        name: '7.5',
                        children: []
                    }, {
                        name: '7.4',
                        children: []
                    }, {
                        name: '7.3',
                        children: []
                    }, {
                        name: '7.2',
                        children: []
                    }, {
                        name: '7.1',
                        children: []
                    }, {
                        name: '7.0',
                        children: []
                    }]
                },
                {
                    name: '略有\n小成\n6+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '6.9',
                        children: []
                    }, {
                        name: '6.8',
                        children: []
                    }, {
                        name: '6.7',
                        children: []
                    }, {
                        name: '6.6',
                        children: []
                    }, {
                        name: '6.5',
                        children: []
                    }, {
                        name: '6.4',
                        children: []
                    }, {
                        name: '6.3',
                        children: []
                    }, {
                        name: '6.2',
                        children: []
                    }, {
                        name: '6.1',
                        children: []
                    }, {
                        name: '6.0',
                        children: []
                    }]
                },
                {
                    name: '普普\n通通\n5+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '5.9',
                        children: []
                    }, {
                        name: '5.8',
                        children: []
                    }, {
                        name: '5.7',
                        children: []
                    }, {
                        name: '5.6',
                        children: []
                    }, {
                        name: '5.5',
                        children: []
                    }, {
                        name: '5.4',
                        children: []
                    }, {
                        name: '5.3',
                        children: []
                    }, {
                        name: '5.2',
                        children: []
                    }, {
                        name: '5.1',
                        children: []
                    }, {
                        name: '5.0',
                        children: []
                    }]
                }, {
                    name: '平淡\n无奇\n4+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '4.9',
                        children: []
                    }, {
                        name: '4.8',
                        children: []
                    }, {
                        name: '4.7',
                        children: []
                    }, {
                        name: '4.6',
                        children: []
                    }, {
                        name: '4.5',
                        children: []
                    }, {
                        name: '4.4',
                        children: []
                    }, {
                        name: '4.3',
                        children: []
                    }, {
                        name: '4.2',
                        children: []
                    }, {
                        name: '4.1',
                        children: []
                    }, {
                        name: '4.0',
                        children: []
                    }]
                }, {
                    name: '不堪\n一击\n3+',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '3.9',
                        children: []
                    }, {
                        name: '3.8',
                        children: []
                    }, {
                        name: '3.7',
                        children: []
                    }, {
                        name: '3.6',
                        children: []
                    }, {
                        name: '3.5',
                        children: []
                    }, {
                        name: '3.4',
                        children: []
                    }, {
                        name: '3.3',
                        children: []
                    }, {
                        name: '3.2',
                        children: []
                    }, {
                        name: '3.1',
                        children: []
                    }, {
                        name: '3.0',
                        children: []
                    }]
                }, {
                    name: '绝世\n烂片\n<3',
                    label: {
                        textStyle: {
                            "fontSize": 20
                        }
                    },
                    children: [{
                        name: '2.0-2.9',
                        children: []
                    }, {
                        name: '2分以下',
                        children: []
                    }]
                }
            ];
            //插入数据
            var picData = JSON.parse(picData)
            for (var item in picData) {
                //picData[item]为3个大集合，内容为[.9,.8……]
                var groupBox = picData[item]
                for (var rate in groupBox) {
                    //groupBox[rate]为每个.x评分的电影集合
                    var group = groupBox[rate]
                    var target = ((data9[item]).children[rate]).children
                    for (index in group) {
                        //group[index]每个.x评分中的具体名称
                        let sb = {
                            name: group[index],
                            value: 1
                        }
                        target.push(sb)
                    }
                }
            }
            //生成图表配置
            var tempOptions = {
                title: {
                    text: '2019年电影评分一览',
                    subtextStyle: {
                        align: 'center'
                    }
                },
                series: {
                    type: 'sunburst',
                    highlightPolicy: 'ancestor',
                    data: data9,
                    radius: [0, '95%'],
                    sort: null,
                    levels: [{}, {
                        r0: '25%',
                        r: '50%',
                        itemStyle: {
                            borderWidth: 2
                        },
                        label: {
                            rotate: 'tangential'
                        }
                    }, {
                        r0: '50%',
                        r: '67%',
                        label: {
                            rotate: 'tangential'
                        }
                    }, {
                        r0: '67%',
                        r: '70%',
                        label: {
                            position: 'outside',
                            padding: 3,
                            silent: false
                        },
                        itemStyle: {
                            borderWidth: 3
                        }
                    }]
                }
            };
            break;
    };
    //渲染数据
    model.setOption(tempOptions);
}

//首页
model.setOption({
    visualMap: {
        show: false,
        min: 0,
        max: 2500,
        inRange: {
            color: ['#e0ffff', '#006edd']
        },
        calculable: true
    },
    series: {
        name: 'world',
        type: 'map3D',
        map: 'world',
        data: [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [125.6, 10.1]
            },
            "properties": {
                "name": "Dinagat Islands"
            }
        }, {}, {}],
        regionHeight: 2,
        boxWidth: 70,
        //boxHeight:50,
        boxDepth: 50,
        top: '-10%',
        //left:'10%',
        label: {
            show: true,
            formatter: function (params) {
                var content = '',
                    content = params.name;
                return content;
            },
            textStyle: {
                color: '#EECBAD',
                fontWeight: 'normal',
                fontSize: 5,
                backgroundColor: 'rgba(0,23,11,0)'
            },
            emphasis: { //对应的鼠标悬浮效果
                show: true,
                textStyle: {
                    color: "#f00"
                }
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 0.4
            }, //阴影效果
            emphasis: {
                color: 'rgb(255,255,255)'
            }
        },
        viewControl: {
            autoRotate: false,
            distance: 70
        }
    }
});