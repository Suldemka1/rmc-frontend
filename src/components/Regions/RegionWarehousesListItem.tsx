import {Link} from "react-router-dom";

const RegionWarehousesListItem = (params: any) => {
	return (
		<div className="border border-black rounded-sm">
			<div className="text-xl text-white font-normal bg-blue-400 p-3">
				<p>{params.title}</p>
			</div>
			<div className="flex flex-col gap-3 p-3">
				<p>Количество складов: {params.warehouses_count}</p>
				{/* <p>Оставшееся количество угля: 200 тонн</p> */}
			</div>
			<div className="flex flex-row justify-end p-3">
				<div className="button">
					<Link to={`/regions/${params.id}`}>Перейти к складам</Link>
				</div>
			</div>
		</div>
	);
};

export default RegionWarehousesListItem;
