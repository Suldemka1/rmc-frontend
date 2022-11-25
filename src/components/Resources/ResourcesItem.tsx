import { FC } from "react";

const ResourcesItem: FC = () => {
  return (
    <div className="min-h-28 h-28 max-h-28 border border-black rounded-sm cursor-pointer p-3
                    hover:bg-gray-50">
      <p>Название ресурса</p>
    </div>
  );
};

export default ResourcesItem;
