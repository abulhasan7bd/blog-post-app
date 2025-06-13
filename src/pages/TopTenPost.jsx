import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const TopTenPost = ({ allBlog }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("_id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("userName", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("userEmail", {
      header: () => "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("heading", {
      header: () => "Title",
      cell: (info) => info.getValue(),
    }),
  ];

  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data: allBlog,
    columns,
    state: {
      sorting,
    },
    columnResizeMode: "onChange",
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Featured Blogs</h2>

      {/* Table View - For md and up */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-2 border cursor-pointer select-none text-left"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 border">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center p-4">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card View - For small screens */}
      <div className="block md:hidden space-y-4">
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <div key={row.id} className="border p-4 rounded bg-white shadow-sm">
              {row.getVisibleCells().map((cell) => (
                <div key={cell.id} className="mb-2">
                  <strong className="block text-gray-600 text-sm">
                    {flexRender(
                      cell.column.columnDef.header,
                      cell.getContext()
                    )}
                  </strong>
                  <div>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No data found.</p>
        )}
      </div>
    </div>
  );
};

export default TopTenPost;
