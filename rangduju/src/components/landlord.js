import React from 'react'

class Landlord extends React.Component {
  render(){
    return (
      <div className="landlord">
        <div className="text-center">
          <span className="codetitle">使用微信扫一扫下方二维码成为房东</span>
          <img src={require("../images/landlord-qrcode-wx.jpg")} alt="二维码"></img>
        </div>
        <div className="comment">
          <span>如您有任何咨询需求的请拨打: <b>400-105-0805</b></span><br/>
          <span>注：拨打此电话不会产生您任何费用</span>
        </div>
      </div>
    )
  }
}

export default Landlord