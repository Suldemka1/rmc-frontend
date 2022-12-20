import {FC} from "react";
import {IRegionWithWarehousesCount} from "../../models/IRegion";
import RegionWarehousesCard from "./RegionWarehousesCard";

const RegionWarehouses: FC<any> = (params: any) => {
	console.log(params.data)
	return (
		<div className="flex flex-col gap-4">
			{params.regions.data.map((item: IRegionWithWarehousesCount) => {
				return (
					<RegionWarehousesCard
						key={item.id}
						id={item.id}
						title={item.title}
						warehouses_count={item?.warehouses?.length}
					/>
				);
			})}
		</div>
	);
};

export default RegionWarehouses;
