"use client";

import DataTable, { TableColumn } from "react-data-table-component";

type Props<T> = {
  columns: TableColumn<T>[];
  data: T[];
  title?: string;
};

export function DataTableWrapper<T>({ columns, data, title }: Props<T>) {
  return (
    <div className="p-4 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <DataTable
        title={title}
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
}
export { DataTable };

