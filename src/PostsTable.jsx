function PostsTable({ posts }) {
  const tableHeads = ["Title", "Category", "Date", "Status", "Actions"];

  return (
    <table className="w-full border-collapse font-inter">
      <thead>
        <tr>
          {tableHeads.map((item, index) => (
            <th
              key={index}
              className="pl-[16px] py-[12px] text-left
                         font-medium text-[16px] leading-[24px]"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {posts.map((item, index) => {
          const { title, category, created_at, is_active } = item;

          return (
            <tr key={index} className="border-t border-gray-300">
              <td className="p-[17px] text-[14px] leading-[20px]">{title}</td>

              <td className="p-[17px] text-[14px] leading-[20px]">
                {category.name}
              </td>

              <td className="p-[17px] text-[14px] leading-[20px]">
                {created_at.slice(0, 10)}
              </td>

              <td className="p-[17px] align-middle">
                <span
                  className={`inline-block w-[10px] h-[10px] rounded-full ${
                    is_active ? "bg-primary" : "bg-danger"
                  }`}
                />
              </td>

              <td className="p-[17px]">
                <div className="flex gap-2">
                  <Btn>Edit</Btn>
                  <Btn>Delete</Btn>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
