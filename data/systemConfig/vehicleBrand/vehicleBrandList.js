const vehicleBrandList = [
  {
    brand: "北京牌",
    models: [
      {
        name: "1030系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1035系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "3036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗龙",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京1041",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北京牌",
    models: [
      {
        name: "1030系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1035系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "3036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗龙",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京1041",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北京牌",
    models: [
      {
        name: "1030系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1035系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "1036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "3036系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗龙",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北京1041",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "旗铃",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    delete:false,
        over:false,
    models: [
      {
        name: "北奔V3MT",
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "北奔重卡",
    models: [
      {
        name: "北奔V3MT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3ET",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3M",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "NG80",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "北奔V3HT",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "川交汽车",
    models: [
      {
        name: "川交",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "东风多利卡",
    models: [
      {
        name: "多利卡D5",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D6",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D7",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D8",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D9",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D12",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "福田欧曼",
    models: [
      {
        name: "欧曼GTL",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "广汽吉奥",
    models: [
      {
        name: "兴旺",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "广汽吉奥",
    models: [
      {
        name: "兴旺",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "广汽吉奥",
    models: [
      {
        name: "兴旺",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "广汽吉奥",
    models: [
      {
        name: "兴旺",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼EST",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "欧曼ETX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "曼",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGA",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGM",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "曼",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGA",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGM",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "曼",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGA",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGM",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "曼",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGA",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGM",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "南京依微课",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "南京依微课",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "南京依微课",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "南京依微课",
    models: [
      {
        name: "TGS",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "TGX",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "庆铃汽车",
    models: [
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "庆铃汽车",
    models: [
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "庆铃汽车",
    models: [
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "庆铃汽车",
    models: [
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃KV100",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "五十铃",
    models: [
      {
        name: "五十铃F系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃E系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃T系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "五十铃",
    models: [
      {
        name: "五十铃F系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃E系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃T系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "五十铃",
    models: [
      {
        name: "五十铃F系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃E系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃T系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "五十铃",
    models: [
      {
        name: "五十铃F系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃E系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃T系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "徐工重卡",
    models: [
      {
        name: "五十铃F系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃E系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "五十铃T系列",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D7",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D8",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D9",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "多利卡D12",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "一拖重卡",
    models: [
      {
        name: "一拖重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "一拖重卡",
    models: [
      {
        name: "一拖重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "一拖重卡",
    models: [
      {
        name: "一拖重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
    {
    brand: "一拖重卡",
    models: [
      {
        name: "一拖重卡",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  },
  {
    brand: "重汽汕德卡",
    models: [
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      },
      {
        name: "SITRAK G7H",
        delete:false,
        over:false,
        fields: [
          { field: "brand", value: "111" }, //品牌
          { field: "model", value: "222" }, //车型
          { field: "version", value: "333" }, //型号
          { field: "boxLongscale", value: "444" }, //箱长级别
          { field: "engine", value: "555" }, //发动机
          { field: "gearCase", value: "666" }, //变速箱
          { field: "truckLongness", value: "777" }, //车身长度
          { field: "truckWidth", value: "888" }, //车身宽度
          { field: "truckHeight", value: "999" }, //车身高度
          { field: "crossWeight", value: "000" }, //整车重量
          { field: "tonne", value: "111" }, //额定载重
          { field: "totalWeight", value: "222" }, //总重量
          { field: "tonnageLevel", value: "333" }, //吨位级别
          { field: "fuelType", value: "444" }, //燃料种类
          { field: "packBoxFormat", value: "555" }, //货箱形式
          { field: "packBoxLongness", value: "666" }, //货箱长度
          { field: "packWidth", value: "777" }, //货箱宽度
          { field: "packHeight", value: "888" }, //货箱高度
          { field: "uasiMultipNum", value: "999" }, //准乘人数
          { field: "shoeFormat", value: "000" }, //轮胎规格
          { field: "shoeNum", value: "111" }, //轮胎数
          { field: "tankCapacity", value: "222" } //油箱容量
        ]
      }
    ]
  }
];

module.exports = vehicleBrandList;
