import React, { useEffect } from 'react';
import { getAssets } from '@/utils';
import { getOverviewInfo } from '@/apis'
import './index.less'

export default () => {
  console.log(process.env)
  useEffect(() => {
    getOverviewInfo({
      date: '20221009',
      i_page_type: 'comb_mng_analysis_01',
      i_start_dt: '20220920',
      i_end_dt: '20221009',
      i_prod_list: 'FYGZ22003,FYGZ22004',
      i_invest_mgr: '800233'
    }).then(item => {
      debugger
    })
  }, [])
  return (
    <div>
      <h2>平台首页</h2>
      <div>可以放一些平台介绍、模块入口之类的东东</div>
      <img src={getAssets('img/asset.png')} alt=""/>
    </div>
  );
}
