import React from 'react';
import { Menu } from 'antd';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';

import Home from './home';
import Demo from './demo';
import Cooperation from './cooperation';
import About from './about';
import Doubt from './doubt';
import Prediction from "./prediction";
import SiteMap from "./sitemap";

// const { SubMenu } = Menu;

class Head extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    // cscrollToAnchor = (anchorName) => {
    //   if (anchorName) {
    //       // 找到锚点
    //       let anchorElement = document.getElementById(anchorName.key);
    //       // 如果对应id的锚点存在，就跳转到锚点
    //       if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    //   }
    // }

    render() {
        return (
            <Router>
                <div>
                    <div className="head">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home"  className="home">
                                <Link to="/"><img src={require("../images/logo.png")} alt="返回首页"></img></Link>
                            </Menu.Item>
                            <Menu.Item key="cooperation">
                                <Link to="/cooperation">如何合作</Link>
                            </Menu.Item>
                            <Menu.Item key="faq">
                                <Link to="/faq">常见疑惑</Link>
                            </Menu.Item>
                            <Menu.Item key="demo">
                                <Link to="/demo">合作案例</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about">关于我们</Link>
                            </Menu.Item>
                            <Menu.Item key="">
                                <a href='http://rangduju.mikecrm.com/ULvW6oL' rel="noopener noreferrer" target="_blank" className='highlight'></a>
                            </Menu.Item>
                            <Menu.Item key="landlord">
                                <a href='http://rangduju.mikecrm.com/ULvW6oL' rel="noopener noreferrer" target="_blank" className='highlight'>成为房东</a>
                            </Menu.Item>
                            {/*<Menu.Item key="prediction">*/}
                            {/*  <Link to="/prediction">潜力预测</Link>*/}
                            {/*</Menu.Item>*/}
                        </Menu>
                    </div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/demo" component={Demo}></Route>
                    <Route path="/faq" component={Doubt}></Route>
                    <Route path="/cooperation" component={Cooperation}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/prediction" component={Prediction}></Route>
                    <Route path="/sitemap.xml" component={SiteMap}></Route>
                </div>
            </Router>
        );
    }
}

export default Head;