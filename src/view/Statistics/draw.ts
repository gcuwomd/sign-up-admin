import Chart from 'chart.js/auto';
import {SEX_LABELS,COLLEGE_LABELS,COLLEGE_COLORS} from './statistics.const'

// 男女统计图
export function drawSex(el:HTMLCanvasElement,data:Array<number>) {
    new Chart(el,{
        type: 'bar',
        data:{
            datasets:[{
                data,
                backgroundColor:["rgba(166, 208, 246)","rgba(250, 178, 193)"]
            }],
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: SEX_LABELS,
                },
                y:{
                    suggestedMax:Math.max(...data)
                },
            },
            plugins:{
                legend:{
                    display: false,
                }
            },
            responsive:true,
        }
        
    })
}

// 各学院占比统计
export function drawCollege(el:HTMLCanvasElement,data:Array<number>){
    new Chart(el,{
        type: 'doughnut',
        data:{
            labels: COLLEGE_LABELS,
            datasets:[{
                data,
                backgroundColor:COLLEGE_COLORS
            }]
        },options:{
            radius:"100%",
            cutout:"70%",
            plugins:{
                legend:{
                    display: false,
                    position:"right"
                }
            },
            responsive:true,
            
        }
    })
}
