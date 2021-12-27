import React, { useEffect, useRef, memo } from 'react';

// interface Props {
//   config?: {
//     polygon: {
//       show: Boolean;
//       value: string;
//     }
// points: any[];
//   };
// }
const TggAMap = (props) => {
  const { config = {} } = props;
  const { polygon = {}, points = {} } = config;
  const { show = false, value = '' } = polygon;
  const mapRef = useRef(null);
  const DISTRICT = 'district';

  function initMap(ref) {
    const map = new AMap.Map(ref.current, {
      resizeEnable: true,
      zoom: 11,
      center: [120.210792, 30.246026], // 地图中心点-变量
    });
    if (show) {
      map.plugin(["AMap.DistrictSearch", "AMap.Polygon"], () => drawBounds(map));
    }
    if (points.show) {
      map.plugin(["AMap.Marker"], () => drawPoints(map));
    }
  }
  function drawPoints(map) {
    points.data.forEach((point) => {
      let m = new AMap.Marker({
        position: [point[0], point[1]]
      });
      map.add(m);
      map.setFitView();
    });
  }
  function drawBounds(map) {
    const opts = {
      subdistrict: 0,
      extensions: 'all',
      level: DISTRICT
    }
    const district = new AMap.DistrictSearch(opts);
    const polygons = [];
    district.setLevel(DISTRICT);
    district.search(value, (status, result) => {
      const bounds = result.districtList[0].boundaries;
      if (bounds) {
        for (let i = 0, l = bounds.length; i < l; i++) {
          const polygon = new AMap.Polygon({
            strokeWeight: 1,
            path: bounds[i],
            fillOpacity: 0.4,
            fillColor: '#80d8ff',
            strokeColor: '#0091ea'
          });
          polygons.push(polygon);
        }
      }
      map.add(polygons);
      map.setFitView(polygons);
    })
  }

  useEffect(() => {
    initMap(mapRef);
  }, [props]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
  )
}

export default memo(TggAMap);