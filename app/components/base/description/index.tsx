import React from "react";
import { Badge, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import { Input, Select } from "antd";
import "./index.css";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
    span: 3,
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
    span: 3,
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
    span: 3,
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
    span: 3,
  },
  {
    key: "5",
    label: "Usage Time",
    children: "2019-04-24 18:00:00",
    span: 3,
  },
  {
    key: "6",
    label: "Status",
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
  {
    key: "7",
    label: "Negotiated Amount",
    children: "$80.00",
    span: 3,
  },
  {
    key: "8",
    label: "Discount",
    children: "$20.00",
    span: 3,
  },
  {
    key: "9",
    label: "Official Receipts",
    children: "$60.00",
    span: 3,
  },
];

const App: React.FC = (props: any) => {
  const { content, handleChange } = props;
  let _content = content.map((item: any) => {
    if (item.type === "text") {
      item.children = (<Input value={item.val} onChange={(e) => handleChange(item.key, e.target.value)} />)
    }
    // if (item.type === "select") {
    //   item.children = (<Select
    //     value={item.val}
    //     style={{ width: 120 }}
    //     onChange={setFormData}
    //     options={[
    //       { value: 'jack', label: 'Jack' },
    //       { value: 'lucy', label: 'Lucy' },
    //       { value: 'Yiminghe', label: 'yiminghe' },
    //       { value: 'disabled', label: 'Disabled', disabled: true },
    //     ]}
    //   />)
    // }
    return { ...item };
  });
  return (<Descriptions bordered size="small" items={_content} />)
};

export default App;
