import React from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
    span:3
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
    span:3
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
    span:3
  },
  {
    key: '4',
    label: 'Order time',
    children: '2018-04-24 18:00:00',
    span:3
  },
  {
    key: '5',
    label: 'Usage Time',
    children: '2019-04-24 18:00:00',
    span:3
  },
  {
    key: '6',
    label: 'Status',
    children: <Badge status="processing" text="Running" />,
    span:3
  },
  {
    key: '7',
    label: 'Negotiated Amount',
    children: '$80.00',
    span:3
  },
  {
    key: '8',
    label: 'Discount',
    children: '$20.00',
    span:3
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
    span:3
  }
];

const App: React.FC = (props:any) => <Descriptions bordered size='small' items={props.content} />;

export default App;