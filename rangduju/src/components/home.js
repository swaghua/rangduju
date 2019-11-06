import React from 'react';
import InfiniteListExample from '../common/infiniteListExample';
import DataAnalysis from './dataAnalysis';
import Operate from './operate'
import Opportunity from './opportunity';
import Top from './top';
import { Button } from 'antd';



class Home extends React.Component {
    componentDidMount() {
        document.title = '让渡居-数字科技驱动的城市民宿管理服务机构'
    }
    render() {
        return (
            <div className="first">
                <Top />
                <Opportunity />
                <Operate />
                <DataAnalysis />
                <div className="evaluate distance">
                    <p>用户评价</p>
                    <InfiniteListExample />
                </div>
                <div className="dis-flex work">
                    <div className="work_gif">
                        <img src={require("../images/foot.gif")} className="work_img" alt="工作中"></img>
                    </div>
                    <div className="work_text">
                        <p>我们随时恭候您的垂询</p>
                        <p>
                            无论您是希望有机会参与共享经济，还是只想让空置房屋变现，或者二者皆有，我们都可以帮助您加入到这一进程。我们团队有丰富的专业机构从业经历，具有深厚的技术功底，对行业有深入的理解、洞察，有信心对市场波动做出最快反应，并保证房客入住体验的标准化服务。而这一切专业经验都会服务于您！
                        </p>
                        <p className='btn1'><Button icon="eye" href='http://rangduju.mikecrm.com/ULvW6oL' target="_blank">预约看房</Button></p>
                    </div>
                </div>
                {/* <div className="clear"></div> */}
            </div>
        )
    }
}

export default Home;