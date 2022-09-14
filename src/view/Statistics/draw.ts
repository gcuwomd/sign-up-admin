import { Bar } from '@antv/g2plot';


export function draw(el:HTMLDivElement,data:any){
    new Bar(el, {
        data,
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        marginRatio: 0,
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'left', 'middle', 'right'
          offset: 4,
        },
        legend: {
          layout: 'horizontal',
          position: 'top'
        },
        barStyle: { radius: [2, 2, 0, 0] },
      }).render();
}


