import React, { Component } from 'react'
import { Card, Table, Popconfirm, Button } from 'antd';
// import '../prodCombination.less'
import './index.less'
export default class CardWithRightIcon extends Component<any, any> {
    constructor(props = Object) {
        super(props)
        this.state = {
            card: {
                name: '产品总规模',
                amt: '27.26',
                com_lastd: '0',
                com_lastm: '-0.32',
                com_lasty: '4.32',
                img: require("./images/scale@1x.png")
            }
        }
    }
    // 对比数据处理函数
    compareData(data: any) {
        if (data != 0) {
            return (
                <span>
                    {data.indexOf('-') == -1 ? <img src={require('./images/upArrow.png')} alt="向上箭头" /> : <img src={require('./images/downArrow.png')} alt="向下箭头" />} <span>{data.replace(/-/g, '')}</span>
                </span>
            )
        } return (
            <span>{data}</span>
        )
    }
    render() {
        return (
            <div>
                <div className='cardCommon'>
                    {/* 卡片顶部 */}
                    <div className='cardTopWrap'>
                        <div>
                            <div className="cardName">{this.props.card.name}</div>
                            <span className="cardNum">{this.props.card.amt}</span>
                            {this.props.card.name == '产品数量' ? <span>个</span> : <span>亿</span>}
                        </div>
                        <img src={this.props.card.img} />
                    </div>
                    {/* 卡片底部 */}
                    <div className='cardBottomWrap'>
                        <span>比上日 {this.compareData(this.props.card.com_lastd)}</span>
                        <span> 比上月 {this.compareData(this.props.card.com_lastm)}</span>
                        <span>比上年 {this.compareData(this.props.card.com_lasty)}</span>
                    </div>
                </div>
            </div>
        )

    }

}






