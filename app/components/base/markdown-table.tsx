import 'katex/dist/katex.min.css'
import { Component, useEffect, useRef, useState } from 'react'
import BaseTable from '@/app/components/base/table'
import Descriptions from '@/app/components/base/description'
import cn from '@/utils/classnames'


// interface UserData {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }
const Table = (props: { content: { columns: any; dataSource: any } }) => {
  // 定义列配置
  const { columns, dataSource } = props.content;
  // const columns = [
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: '地址',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  // ];

  // // 使用组件
  // const dataSource: UserData[] = [
  //   {
  //     key: '1',
  //     name: '张三',
  //     age: 32,
  //     address: '北京市',
  //   },
  //   {
  //     key: '2',
  //     name: '李四',
  //     age: 32,
  //     address: '北京市',
  //   },
  // ];
  return <BaseTable dataSource={dataSource} columns={columns} />
}

const formatJSONData = (content: string | string[]) => {
  if (typeof content !== 'string') {
    return { columns: [], dataSource: [] };
  }
  if (content === '' || content.includes('"__is_success":0')) {
    return { columns: [], dataSource: [] };
  }
  const parseContent = JSON.parse(content);
  if (!Array.isArray(parseContent)) return { columns: [], dataSource: [] };
  const columns: { title: any; dataIndex: any; key: any }[] = [], dataSource: { [x: number]: any; key: any }[] = [];
  const values: any = {};
  parseContent.forEach((item: { field_name: any; field_key: any; field_value: any }, key: any) => {
    columns.push({
      title: item.field_name,
      dataIndex: item.field_key,
      key: item.field_key,
    })
    values[item.field_key] = item.field_value;
  })
  dataSource.push({
    key: '1',
    ...values
  })
  return { columns, dataSource };
}

const formatJSONData2Des = (content: any) => {
  if (typeof content !== 'string') {
    return [];
  }
  if (content === '' || content.includes('"__is_success":0')) {
    return [];
  }
  const parseContent = JSON.parse(content);
  if (!Array.isArray(parseContent)) return [];
  return parseContent.map((item, index) => ({
    key: index,
    label: item.field_name,
    children: item.field_value,
    val: item.field_value,
    span: 'filled',
    type: 'text'
  }))
}
export function MarkdownTable(props: { content: string; className?: string; customDisallowedElements?: string[] }) {
  const content = formatJSONData2Des(props.content);
  const [formData, setFormData] = useState<any[]>(content);
  const handleChange = (key: number, value: string) => {
    setFormData(state => state.map((item, index) => key === index ? { ...item, val: value } : item));
  }
  useEffect(() => {
    console.log("数组内容变化:", formData);
  }, [formData]);
  return (
    <div className={cn('markdown-body', '!text-text-primary', props.className)}>
      <Descriptions content={formData} handleChange={handleChange} />
    </div>
  )
}

// **Add an ECharts runtime error handler
// Avoid error #7832 (Crash when ECharts accesses undefined objects)
// This can happen when a component attempts to access an undefined object that references an unregistered map, causing the program to crash.

export default class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true })
    console.error(error, errorInfo)
  }

  render() {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    if (this.state.hasError)
      return <div>Oops! An error occurred. This could be due to an ECharts runtime error or invalid SVG content. <br />(see the browser console for more information)</div>
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    return this.props.children
  }
}
