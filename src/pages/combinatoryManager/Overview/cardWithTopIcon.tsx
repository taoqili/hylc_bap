import React, { Component } from 'react'
import { Card, Table, Popconfirm, Button } from 'antd';
// import '../prodCombination.less'
import './index.less'
export default class CardWithRightIcon extends Component<any, any> {
    constructor(props = Object) {
        super(props)
        this.state = {
            card: {
                name: '最大回撤',
                amt: '27.26',
                img: require("./images/zdhc@1x.png")
            }
        }
    }

    render() {
        return (
            <div className='cardCommon2'>
                <img src={this.props.card.img} />
                <div className="cardName">{this.props.card.name}</div>
                <div className='textNowrap'>
                    <span className="cardNum">{this.props.card.amt}</span>
                    <span>{this.props.card.name=='最大回撤' ? '亿' :(this.props.card.name=='波动率'?'%':null) }</span>
                </div>
            </div>
        )

    }

}






