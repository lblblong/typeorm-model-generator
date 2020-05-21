# typeorm-model-generator-plus

具体使用方式参见 [typeorm-model-generator](https://github.com/Kononnable/typeorm-model-generator)

-------------

#### 该版本只支持 MySQL，且与源版本有如下区别
- 生成 model 时不生成 name
- 不生成 Index....
- 生成 model 时增加 comment（字段描述）
- 默认值就是字符串，不用函数包裹
- 可指定生成某个表，使用方式：-t [tableName]
- bigint 转换为 js 类型时转换为 number
- 配置文件名字不同 .tomg-config.json
- mysql -> mysql2

示例：仅为 user 表生成 model

```shell
typeorm-model-generator-plus -h <host> -d <database> -p [port] -u <user> -x -t user
```

.tomg-config.json 示例
```json
[
  {
    "host": "localhost",
    "port": 3306,
    "databaseName": "test",
    "user": "root",
    "password": "123456",
    "databaseType": "mysql",
    "schemaName": "",
    "ssl": false,
    "tableName": "user"
  },
  {
    "resultsPath": "./output",
    "noConfigs": false,
    "convertCaseFile": "none",
    "convertCaseEntity": "pascal",
    "convertCaseProperty": "none",
    "propertyVisibility": "none",
    "lazy": false,
    "activeRecord": true,
    "generateConstructor": false,
    "customNamingStrategyPath": "",
    "relationIds": false,
    "strictMode": false,
    "skipSchema": false
  }
]
```

#### 安装
```shell
npm install -g typeorm-model-generator-plus
```