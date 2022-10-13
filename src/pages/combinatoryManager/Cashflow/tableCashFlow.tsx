import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    description: string;
}

const columns: ColumnsType<any> = [
    { title: '资产类型', dataIndex: 'asset_cate', key: '资产类型' },
    // Table.EXPAND_COLUMN,
    { title: '余额', dataIndex: 'amt', key: '余额' },
    // Table.SELECTION_COLUMN,
    { title: '余额占比', dataIndex: 'amt_pct', key: '余额占比' },
    { title: '加权收益率', dataIndex: 'reve_rt', key: '加权收益率' },
    { title: '久期', dataIndex: 'asset_dura', key: '久期' },
];

const data: any[] = [
    {
        key: '1',
        asset_cate: '信用债',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: '0.78'
    }, {
        key: '2',
        asset_cate: '利率债',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78
    }, {
        key: '3',
        asset_cate: '基金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78
    }, {
        key: '4',
        asset_cate: '回购',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78
    }, {
        key: '5',
        asset_cate: '专户',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78
    }, {
        key: '6',
        asset_cate: '现金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78,
    }, {
        key: '7',
        asset_cate: '现金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78,
    }, {
        key: '8',
        asset_cate: '现金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78,
    }, {
        key: '9',
        asset_cate: '现金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78,
    }, {
        key: '10',
        asset_cate: '现金',
        amt: 609960,
        amt_pct: '61.60%',
        reve_rt: 3.28,
        asset_dura: 0.78,
    },
];

const TableTopInvestor: React.FC = () => (
    <Table
        columns={columns}
        // rowSelection={{}}
        // expandable={{
        //   expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
        // }}
        dataSource={data}
        pagination={false}
        scroll={{ y: 286 }}
        rowClassName={(record, index) => (index % 2 === 0 ? 'null' : 'OddBgcolor')}
    />
);

export default TableTopInvestor;