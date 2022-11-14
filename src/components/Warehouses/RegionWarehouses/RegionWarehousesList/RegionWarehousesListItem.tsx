import { Link, useParams } from "react-router-dom";

const RegionWarehousesListItem = () => {
  const params = useParams()

  return (
    <div className="border border-black rounded-sm">
      <div className="text-xl text-white font-normal bg-blue-400 p-3">
        <p>Тере-холский кожуун</p>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <p>Количество складов: 2</p>
        <p>Оставшееся количество угля: 200 тонн</p>
      </div>
      <div className="flex flex-row justify-end p-3">
        <div className="button">
          <Link to={`/warehouses/${2}`}>Перейти к складам</Link>
        </div>
        
      </div>
    </div>
  );
};

export default RegionWarehousesListItem;
