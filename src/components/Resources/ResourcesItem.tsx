import { FC } from "react";

const ResourcesItem: FC = () => {
  return (
    <div className="h-28 border border-black rounded-sm cursor-pointer p-3
                    hover:bg-gray-50">
      <p>Название ресурса</p>
    </div>
  );
};

export default ResourcesItem;
