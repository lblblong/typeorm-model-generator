# typeorm-model-generator-plus

具体使用方式参见 [typeorm-model-generator](https://github.com/Kononnable/typeorm-model-generator)

-------------

#### 该版本与源版本仅 Mysql 部分不同
- 生成 model 时不生成 name
- 不生成 Index....
- 生成 model 时增加 comment（字段描述）
- 默认值就是字符串，不用函数包裹
- 可指定生成某个表，使用方式：-t [tableName]

示例：仅为 user 表生成 model

```shell
typeorm-model-generator-plus -h <host> -d <database> -p [port] -u <user> -x -t user
```


#### 安装
```shell
npm install -g typeorm-model-generator-plus
```