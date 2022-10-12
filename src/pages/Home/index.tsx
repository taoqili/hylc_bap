import React from 'react';
import { getAssets } from "@/utils";
import './index.less'

export default () => {
  console.log(process.env)
  return (
    <div>
      <h2>Home page</h2>
      <div>直接引用图片</div>
      <img src={getAssets('img/asset.png')} alt=""/>
      <div className={'test-class'}>背景图</div>
    </div>
  );
}
