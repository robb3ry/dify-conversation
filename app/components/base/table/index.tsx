'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  [key: string]: any;
}

interface BaseTableProps<T extends DataType> extends Omit<TableProps<T>, 'columns'> {
  columns: TableProps<T>['columns'];
  dataSource: T[];
  loading?: boolean;
}

const BaseTable = <T extends DataType>({
  columns,
  dataSource,
  loading = false,
  ...restProps
}: BaseTableProps<T>) => {
  return (
    <Table<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={false}
      {...restProps}
    />
  );
};

export default React.memo(BaseTable)