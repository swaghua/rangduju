import React from 'react';
import { Radio } from 'antd';
// import  {get, post} from 'src/service/api';
// import req from 'src/service/fetch'

import { Card } from 'antd';
// import  'whatwg-fetch'
// import echarts from 'echarts' ;
// import echartTheme from './../themeLight'
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

class DataAnalysis extends React.Component {
  componentWillMount() {
    //主题的设置要在willmounted中设置
    // echarts.registerTheme('Imooc',echartTheme);
     this.getdata();
  }
  constructor() {
    super();
    this.state = {
      value: 0,
      name: '人次',
      data:[]
    };
  }

  getdata = async () => {
    let peopleArr=[];
    let monthArr=[];
    let people=0,day=0;
    const init = {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let thisYear = Number(moment().format("YYYY"))
    let thisMonth = Number(moment().format("MM"))
    let startTime = 2019.06
    let thisTime = thisYear + 0.01 * thisMonth
    for (let y = 2019; y <= thisYear; y++) {
      for (let m = 1; m <= 12; m++) {
        let t = y + 0.01 * m
        if (startTime <= t && t <= thisTime) {
          // console.log('time', y, m)
          await fetch(
              `https://api.rangduju.com/public/rent-info?year=${y}&status=已完成&month=${m}`, init
          ).then(res => res.json())
          .then(data => {
            console.log(data);
            people += data.data.peopleSum;
            day += data.data.monthSum;
            monthArr.push(day)
            peopleArr.push(people);
          })
          .catch(e => console.log('错误:', e))
        }
      }
    }
    this.setState({
      sum:people,
      oneArr:peopleArr,
      twoArr:monthArr,
      data:peopleArr
    })
  }

  formatZero(num, len) {
    if(String(num).length > len) return num;
    return (Array(len).join(0) + num).slice(-len);
  }

  getOption = () => {
    let markList = []
    let thisYear = Number(moment().format("YYYY"))
    let thisMonth = Number(moment().format("MM"))
    let startTime = 2019.06
    let thisTime = thisYear + 0.01 * thisMonth
    for (let y = 2019; y <= thisYear; y++) {
      for (let m = 1; m <= 12; m++) {
        let t = y + 0.01 * m
        if (startTime <= t && t <= thisTime) {
          let year = this.formatZero(y, 4)
          let month = this.formatZero(m, 2)
          let mark = year + '-' + month
          markList.push(mark)
        }
      }
    }

    let option = {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        boundaryGap: false,
        data: markList,
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: 0,
          start: 0,
          end: 60,
        }, {
          type: 'slider',
          xAxisIndex: 0,
          start: 0,
          end: 60,
          bottom: 20,
          height: 5,
          borderColor: "#ccc",
          backgroundColor: '#ccc',
          fillerColor: '#00C979',
          showDataShadow: false,
          showDetail: false,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '370%',
          handleStyle: {
            color: '#eee',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 1,
            shadowOffsetY: 1,
          },
        },
      ],
      series: [
        {
          name: this.state.name,
          type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
          data: this.state.data,
          smooth: true,
          itemStyle : {
            normal : {
            color:'#00C979', //改变折线点的颜色
            lineStyle:{
            color:'#076EDF' //改变折线颜色
            }
            }
            },
        }
      ]
    }
    return option
  }
  onChange = e => {
    let arr,str;
    console.log('radio checked', e.target.value);
    if(e.target.value===0){arr=this.state.oneArr;str='人次'}else{arr=this.state.twoArr;str='夜次'}
    this.setState({
      value: e.target.value,
      data:arr,
      name:str
    });
  };

  render() {
    return (
      <div className="dataAnalysis distance text-center">
        <div><p className="title">持续增长的短租需求</p></div>
        <div>2019年至今，共有{this.state.sum}名房客使用过我们的服务，这个数字将在2022年增长至1,180,800</div>
        <div>
          <Radio.Group buttonStyle="solid" onChange={this.onChange} value={this.state.value}>
            <Radio.Button value={0}>服务的人次</Radio.Button>
            <Radio.Button value={1}>服务的夜次</Radio.Button>
          </Radio.Group>

        </div>
        <div>
          <Card>
            <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: '400px' }} />
          </Card>
        </div>

        {/* <div className="last">
          <img src={require(this.state.value === 0 ? '../images/renchi.png' : '../images/yeshu.png')} alt="数据分析"></img>
        </div> */}

        <div className='modular'>
          <div className="title1"><p>媒体报道</p></div>
          <div className='modular-media'>
          <a href='https://36kr.com/p/5222672' rel="noopener noreferrer" target="_blank">
              <div><img src={require('../images/36.png')} alt="36氪"></img></div>
              <p>36氪首发 |「让渡居」获200万元种子轮融资，借助科技打造高性价比城市民宿。</p>
          </a>
          <a href='http://www.ctcnn.com/html/2019-07-17/18120540.html#PPN=hotel' rel="noopener noreferrer" target="_blank">
              <div><img src={require('../images/jl.png')} alt="劲旅"></img></div>
              <p><span className='pho'>让渡居：</span>「金融思维」下的城市民宿新玩法。</p>
          </a>
          </div>
        </div>

      </div>
    )
  }
}

export default DataAnalysis;
