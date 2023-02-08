import { FC } from "react";
import { IRegionWithWarehousesCount } from "../../models/IRegion";
import RegionWarehousesListItem from "./RegionWarehousesListItem";

const RegionWarehouses: FC<any> = (params: any) => {
	return (
		<div className="grid grid-cols-2 gap-3">
			{params?.regions.map((item: IRegionWithWarehousesCount) => {
				return (
					<RegionWarehousesListItem
						key={item.id}
						id={item.id}
						title={item.title}
						warehouses_count={item?.warehouses?.length}
					/>
				);
			})
			}
		</div>
	);
};

export default RegionWarehouses;
