## RESTful APIs

### Oracle Database driver for Node.js + Express

### Step 1 : ติดตั้ง

// ไปที่ PATH โปรเจคของเรา จากนั้นติดตั้ง package ในไฟล์ package.json

```bash
$ cd ./myApp
$ npm install
```

// เปิดคำสั่งทำงาน

```bash
$ node .
```

### Step 2 : ตั้งค่า

// เปิดไฟล์ config.js

```bash
แก้ไขชื่อโปรเจค และตั้งค่า database
```

### Step 3 : เริ่มสร้างกันเลย !!

// สร้างโฟลเดอร์ภายใต้ ./myProject/app/ "ชื่อโฟลเดอร์"

// สร้างไฟล์ชื่อว่า routes.js

```bash
const controller = require("./controller");

function setup(router) {
  router
    .get("/show", controller.getAll)
    .get("/show/:id", controller.getId)
    .post("/create", controller.create)
    .put("/update/:id", controller.update)
    .delete("/delete/:id", controller.delete);
}
exports.setup = setup;
```

// สร้างไฟล์ชื่อว่า controller.js

```bash
const model = require("./model");
const httpError = require("../http-error");

module.exports.getAll = (req, res, next) => {
  model.findAll(data => {
    res.json(data);
  });
};

module.exports.getId = (req, res, next) => {
  model.find(req, data => {
    res.json(data);
  });
};

module.exports.create = (req, res, next) => {
  model.create(req, data => {
    res.json(data);
  });
};

module.exports.update = (req, res, next) => {
  model.update(req, data => {
    res.json(data);
  });
};

module.exports.delete = (req, res, next) => {
  model.delete(req, data => {
    res.json(data);
  });
};
```

### กรณีติดตั้ง OracleDB ไม่ได้ ให้ตั้งค่าตามนี้

[ติดตั้งโปรแกรมและตั้งค่า Oracledb คลิ๊ก!!!](https://github.com/oracle/node-oracledb)

เมื่อติดตั้งครบแล้ว ในตอนที่ขึ้นโปรเจคใหม่ ให้ตั้งค่าตามนี้ \*สำหรับ OS Windows

// ไปที่ PATH โปรเจคของเรา

```bash
$ cd ./myApp
```

// เพิ่มคำสั่ง config ด้านล่าง \*แก้ไขไดร์ตามที่อยู่ที่ได้ติดตั้ง Database
Oracle ไว้

```bash
$ npm config set msvs_version 2017
$ set OCI_LIB_DIR=E:\oracle\instantclient\sdk\lib\msvc
$ set OCI_INC_DIR=E:\oracle\instantclient\sdk\include
```
