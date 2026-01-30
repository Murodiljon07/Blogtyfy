import React from "react";

/* components */
import Btn from "./Components/Btn";

function PostsTable({ posts }) {
  const tableHeads = ["Title", "Category", "Date", "Status", "Actions"];

  return (
    <table className="w-full border-collapse">
      <thead className="table w-full table-fixed">
        <tr>
          {tableHeads.map((item, index) => (
            <th
              key={index}
              className="text-[14px] text-(--color-text) pl-[16px] py-[12px] font-medium text-left"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="block max-h-[300px] overflow-y-auto">
        {posts.map((item, index) => {
          const { title, category, created_at, is_active } = item;

          return (
            <tr
              key={index}
              className="table w-full table-fixed border-t border-gray-300 text-[14px]"
            >
              <td className="p-[17px] text-(-color-title) text-[16px] font-medium">
                {title}
              </td>

              <td className="p-[17px]">
                <p className="text-[12px] text-(--color-primary) bg-[#4346EF1A] py-[4px] px-[8px] rounded-[10px] w-fit">
                  {category.name}
                </p>
              </td>

              <td className="p-[17px] text-(--color-text)">
                {created_at.slice(0, 10)}
              </td>

              <td className="p-[17px]">
                <div
                  className={`${
                    is_active ? "bg-green-600" : "bg-red-700"
                  } w-[10px] h-[10px] rounded-full`}
                />
              </td>

              <td className="p-[17px] flex gap-[12px]">
                <Btn
                  children="Edit"
                  width="fit-content"
                  style="text-[#4346EF]"
                />
                <Btn
                  children="Delete"
                  width="fit-content"
                  style="text-[#EF4343]"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PostsTable;
