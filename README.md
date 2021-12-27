# tgg-amap

近期地图的项目较多, 采用高德地图amap, 对其二次封装, 方便后期复用
## key和安全密钥的使用
（自2021年12月02日升级，升级之后所申请的 key 必须配备安全密钥 jscode 一起使用)

    <script type="text/javascript">
      window._AMapSecurityConfig = {
          securityJsCode:'您申请的安全密钥',
          serviceHost:'您的代理服务器域名或地址/_AMapService',  
          // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService',
      }
    </script>
    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script> 

## Install
    # with npm
    npm install tgg-amap
    # with yarn
    yarn add tgg-amap


## Props

props 配置 config 对象


  |            API    |说明     | 必填  |类型                       |默认值
  |----------|---------------------|--------------|---------------|-------------------------------
  |polygon|`行政区边界`     |false       |  Polygon          |{ }
  |points|`点位`     |false       |  Points          |{ }

<br>
 
## Polygon
此字段配置地图中, 圈出行政区域边界

|             API   |说明                          |类型                       |默认值
|----------------|-------------------------------|-----------------------------|-------------------------------
|show|`是否显示`            |boolean            |false
|value          |`区名称`            |string            |'钱塘区'

<br>  


    config = {
      polygon: {
        show: false,
        value: '钱塘区'
      }
    }

## Points
此字段配置地图中, 点位信息

|             API   |说明                          |类型                       |默认值
|----------------|-------------------------------|-----------------------------|-------------------------------
|show|`是否显示`            |boolean            |false
|data          |`点位数据集`            |Array[]           |[[120.087722, 30.12957]]

<br>  


    config = {
      polygon: {
        show: false,
        data: [[120.087722, 30.12957]]
      }
    }

## 引用示例

    <TggAMap config={{ 
        polygon: { show: true, value: '滨江区' } },
        points: { show: true, data: [[120.087722, 30.129573]] }
      }} 
    />
  
<br>

![Image text](https://raw.githubusercontent.com/china78/tgg-amap/main/src/assets/demo.png)