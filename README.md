# RESTful APIs

## Oracle Database driver for Node.js + Express

### Step 1 : ติดตั้ง

📢 ไปที่ PATH โปรเจคของเรา จากนั้นติดตั้ง package ในไฟล์ package.json

```bash
  cd ./myApp
  npm install
```

📢 เปิดคำสั่งทำงาน

```bash
  node .
  หรือ
  npm run dev //สำหรับโหมดนักพัฒนา
```

### Step 2 : ตั้งค่า

📄 เปิดไฟล์ ./config.js

```bash
> APPLICATION
  module.exports.application = {
    title: "ชื่อโปรเจค"
    version: "เวอร์ชัน > ex. 1.0.0",
    port: "เลขพอร์ต > ex. 3000"
  };

> DATABASE
  module.exports.database = {
    user: "ชื่อผู้ใช้ฐานข้อมูล",
    password: "รหัสผ่านฐานข้อมูล",
    connectString: "ชื่อฐานข้อมูล"
  };

> JSON Web Tokens
  module.exports.jwt = {
    secretkey: "คีย์ลับ JSON Web Tokens > ex. 123#$@$123",
    expiresIn: "เวลาหมดอายุ > ex. 1h, 3d"
  };
```

### Step 3 : เริ่มสร้างกันเลย 🎉

📢 สร้างโฟลเดอร์ภายใต้ app ตัวอย่าง ./app/demo
และภายในโฟลเดอร์ที่เราสร้างจะประกอบไปด้วย

[![bbb.jpg](https://s17.postimg.org/ca147gu0f/bbb.jpg)](https://postimg.org/image/fgvnr3egb/)

📄 ไฟล์ routes.js

```bash
  const controller = require("./controller");
  function setup(router) {
    // source code
  }
  exports.setup = setup;
```

📄 ไฟล์ controller.js

```bash
  const model = require("./model");
  const bcrypt = require("bcrypt");
  const httpError = require("../http-error");

  // source code
```

📄 ไฟล์ model.js

```bash
  const Model = require("../model");

  // source code
```

## Module 😁

### Get all : เรียกดูข้อมูลทั้งหมด

📄 ไฟล์ routes.js

```bash
  ...
  router.get("/show", controller.getAll)
```

📄 ไฟล์ controller.js

```bash
  ...
  module.exports.getAll = (req, res, next) => {
    model.findAll(data => {
      res.json(data);
    });
  };
```

📄 ไฟล์ model.js

```bash
  ...
  module.exports.findAll = callback => {
    let sql = ` SELECT column FROM table_name `;

    Model.findAll(sql, data => {
      callback(data);
    });
  };
```

### Get id : เรียกดูข้อมูลเฉพาะเจาะจง

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

### Create : เพิ่มข้อมูล

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

### Update : แก้ไขข้อมูล

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

### Delete : ลบข้อมูล

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

### Register : สร้างชื่อผู้ใช้

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

### Login : เข้าสู่ระบบ

📄 ไฟล์ routes.js

```bash
  ...
```

📄 ไฟล์ controller.js

```bash
  ...
```

📄 ไฟล์ model.js

```bash
  ...
```

## กรณีติดตั้ง OracleDB ไม่ได้ ให้ตั้งค่าตามนี้

[ติดตั้งโปรแกรมและตั้งค่า Oracledb คลิ๊ก!!!](https://github.com/oracle/node-oracledb)

เมื่อติดตั้งครบแล้ว ในตอนที่ขึ้นโปรเจคใหม่ ให้ตั้งค่าตามนี้ สำหรับ OS Windows

📢 ไปที่ PATH โปรเจคของเรา

```bash
  cd ./myApp
```

📢 เพิ่มคำสั่ง config ด้านล่าง ปล.แก้ไขไดร์ตามที่อยู่ที่ได้ติดตั้ง Database
Oracle ไว้

```bash
  npm config set msvs_version 2017
  set OCI_LIB_DIR=E:\oracle\instantclient\sdk\lib\msvc
  set OCI_INC_DIR=E:\oracle\instantclient\sdk\include
```
