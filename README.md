# tgg-amap

近期地图的项目较多, 采用高德地图amap, 对其二次封装, 方便后期复用

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

## 引用示例

    <TggAMap config={{ polygon: { show: true, value: '滨江区' } }} />
  
<br>

![Image text](https://raw.githubusercontent.com/china78/tgg-amap/main/src/assets/demo.png)