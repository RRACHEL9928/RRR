/*
* @Author: Marte
* @Date:   2017-08-16 02:21:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-16 14:26:53
*/

"use strict";
const express = require("express");
const app = express();
const http = require("http").Server(app);
const server = require("socket.io");
const io = server(http);
const socketCollect = require("./data/socketCollect");
const order = require("./data/order");
const goodluckCities = require("./data/systemConfig/goodluck/goodluckCities");
const goodluckChoosed = require("./data/systemConfig/goodluck/goodluckChoosed");
const partnerCities = require("./data/systemConfig/partner/partnerCities");
const partnerModels = require("./data/systemConfig/partner/partnerModels");
const goodsCities = require("./data/systemConfig/goods/goodsCities");
const goodsModels = require("./data/systemConfig/goods/goodsModels");
const addServiceCities = require("./data/systemConfig/addService/addServiceCities");
const addServiceModels = require("./data/systemConfig/addService/addServiceModels");

const foodgoods = require("./data/systemConfig/goods/foodgoods");



app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post("/socket", (req, res) => {
  res.json(socketCollect);
});

app.post("/order", (req, res) => {
  res.json(order);
});
app.post("/mock/goodluckCities", (req, res) => {
  res.json(goodluckCities);
});
app.post("/mock/goodluckChoosed", (req, res) => {
  res.json(goodluckChoosed);
});
app.post("/mock/partnerCities", (req, res) => {
  res.json(partnerCities);
});

app.post("/mock/partnerModels", (req, res) => {
  res.json(partnerModels);
});

app.post("/mock/goodsCities", (req, res) => {
  res.json(goodsCities);
});

app.post("/mock/goodsModels", (req, res) => {
  res.json(goodsModels);
});

app.post("/mock/addServiceCities", (req, res) => {
  res.json(addServiceCities);
});

app.post("/mock/addServiceModels", (req, res) => {
  res.json(addServiceModels);
});

app.post("/mock/vehicleBrandList", (req, res) => {
  res.json(vehicleBrandList);
});

app.post("/mock/goods", (req, res) => {
  res.json(foodgoods);
});

var arr = [
  {
    orderON: "11111",
    path: [
      [120.130946, 30.273199],
      [120.142619, 30.273199],
      [120.153605, 30.274385],
      [120.160129, 30.274681],
      [120.168368, 30.274978],
      [120.175578, 30.275867],
      [120.184505, 30.27646],
      [120.191371, 30.27735],
      [120.200297, 30.277943],
      [120.205791, 30.278536],
      [120.212657, 30.280908],
      [120.216777, 30.282686],
      [120.222613, 30.284762],
      [120.22948, 30.284762],
      [120.244929, 30.268455],
      [120.252482, 30.264007],
      [120.256946, 30.262228],
      [120.261752, 30.260448],
      [120.266559, 30.258076],
      [120.271365, 30.256],
      [120.276515, 30.254221],
      [120.282008, 30.251848],
      [120.285441, 30.250365],
      [120.287845, 30.248882],
      [120.291621, 30.245323],
      [120.292651, 30.241468],
      [120.292995, 30.237315],
      [120.293338, 30.232866],
      [120.293338, 30.225153],
      [120.291965, 30.221297],
      [120.290591, 30.215363],
      [120.288875, 30.207649],
      [120.288188, 30.204089],
      [120.287501, 30.199638],
      [120.286815, 30.19489],
      [120.286471, 30.189846],
      [120.286128, 30.184801],
      [120.286471, 30.180646],
      [120.287158, 30.175897],
      [120.288188, 30.173226]
    ]
  },
  {
    orderON: "12223456",
    path: [
      [120.29201, 30.280434],
      [120.29201, 30.274504],
      [120.29201, 30.26976],
      [120.293384, 30.263237],
      [120.292697, 30.259085],
      [120.292697, 30.251968],
      [120.293384, 30.249002],
      [120.29613, 30.234765],
      [120.29613, 30.227646],
      [120.294757, 30.216967],
      [120.293384, 30.210439],
      [120.29201, 30.203319],
      [120.290637, 30.197978],
      [120.290637, 30.19501],
      [120.290064, 30.198777],
      [120.301624, 30.181359]
    ]
  }
];
var timer = {};
io.on("connection", socket => {
  var destroy = false;
  socket.on("disconnect", function () {
    console.log("客户端断开连接");
    socket.disconnect(true);
    destroy = true;
  });
  var msgList = [];
  socket.on("single", function (msg) {
    msg = msg.split("%")[0];
    if (msgList.includes(msg)) {
      clearInterval(timer[msg]);
    }
    arr.forEach(result => {
      if (msg == result.orderON) {
        var newarr = result.path;
        var locations = [...newarr];
        timer[msg] = setInterval(function () {
          console.log(locations.length);
          if (locations.length > 0 && !destroy) {
            socket.emit(msg + "-location", locations.shift());
          } else {
            //io.emit(token+"-location",-1);
            clearInterval(timer[msg]);
          }
        }, 2000);
      }
    });
    msgList.push(msg);
  });

  socket.on("clear", function (msg) {
    clearInterval(timer[msg]);
  });
});
http.listen(3000);
