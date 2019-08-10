# gStore SPARQL Query

## 设计简述

gStore 是一个基于图的 RDF 数据管理系统(也称为“三元组存储”)，维持了原始 RDF 数据的图结构。它的数据模型是有标签的有向多边图，每个顶点对应一个主体或客体。

本系统使用 DBpedia 中的 music 数据集，基于 Spring Boot 框架构建后端逻辑，利用图数据库 gStore 实现数据库存储和查询，以此构建面向 DBpedia RDF 知识库的音乐领域的数据的 Web 查询系统，本系统目前支持 HTML 格式数据的表格展示，以及 HTML/JSON/CSV/TXT 等格式的查询结果的文件下载功能。

## 系统测试

本项目可在操作系统 Ubuntu 16.04 下进行运行测试。

**环境依赖**

Item | Requirements 
-|-
jdk  | 1.8.0_151 
apache-maven | 3.6.1
gcc | 5.4.0
g++  | 5.4.0
make  | 4.1
boost  | >=1.54
readline | 6.3
readline-devel | -
requests  | 2.9.1
libcurl-devel | 7.47.0
glibc | -

**系统运行**

1) 源码安装 gStore ，并打开 http 服务；

```
$ sudo ./scripts/setup/setup_$(ARCH).sh
$ make pre
$ make
$ bin/ghttp 9000
```

2) 下载数据集 music.nt 并存放至 gstore/data/music/ 目录；

3) 在项目 gstore-sparql-query 主目录下执行以下命令以启动项目；

```
mvn clean package
cd target
java -jar gstore-sparql-query-0.1.0.jar 

```

4) 在浏览器中打开 http://localhost:8080/ 即可访问系统, 具体操作及结果请参考系统报告。


