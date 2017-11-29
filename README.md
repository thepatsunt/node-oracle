## RESTful APIs

### Oracle Database driver for Node.js + Express

### คู่มือการใช้งาน

```bash
// ติดตั้ง package ในไฟล์ package.json
$ npm install

// Run Node Server
$ node .
```

### กรณีติดตั้ง OracleDB ไม่ได้ ให้ตั้งค่าตามนี้

[ติดตั้งโปรแกรมและตั้งค่า Oracledb คลิ๊ก!!!](https://github.com/oracle/node-oracledb).

ติดตั้งครบแล้ว ในตอนที่ขึ้นโปรเจคใหม่ ให้ตั้งค่าตามนี้ \*สำหรับ OS Windows

```bash
// ไปที่ PATH โปรเจคของเรา
$ cd ./myApp

// เพิ่มคำสั่ง config ด้านล่าง *แก้ไขไดร์ตามที่อยู่ที่ได้ติดตั้ง Oracle
$ npm config set msvs_version 2017
$ set OCI_LIB_DIR=E:\oracle\instantclient\sdk\lib\msvc
$ set OCI_INC_DIR=E:\oracle\instantclient\sdk\include
```
