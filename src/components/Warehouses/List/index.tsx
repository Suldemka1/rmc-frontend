import {FC} from "react";
import {IWarehouseCard} from "../../../models/IWarehouse";
import ListItem from "./ListItem";

const List: FC<any> = (params: any) => {
	return (
		<ul className="flex flex-col gap-5">
			{params.data.map((item: IWarehouseCard) => {
				return (
					<ListItem
						key={item.id}
						id={item.id}
						title={item.title}
						url={`/warehouses/${item.id}/${item.id}`}
						address={item.address}
						contacts={item.contacts}
						region={item.region}
					/>
				);
			})}
		</ul>
	);
};

export default List;
