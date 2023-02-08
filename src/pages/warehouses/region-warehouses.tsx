import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ListItem from "../../components/Warehouses/List/ListItem";
import StandartLayout from "../../layouts/StandartLayout";
import { IWarehouseCard } from '../../models/IWarehouse';

const RegionWarehouses = () => {
	const [state, setState] = useState<any>({});
	const params = useParams();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASEURL}/api/regions/${params.id}?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate[warehouses][populate][2]=region&populate=*`)
			.then((res) => res.json())
			.then((res) => setState(res.data))
			.catch((res) => {
				console.error(res)
			})
	}, []);

	return (
		<StandartLayout localeUrl={`Главная/Регионы/${params.id}`}>
			<ul className="flex flex-col gap-3">
				{state?.warehouses?.length === 0 ? <div>В данном регионе нет складов.</div>
					:
					state?.warehouses?.map((item: IWarehouseCard) => {
						return (
							<ListItem
								key={item?.id}
								id={item?.id}
								title={item?.title}
								url={`/warehouses/${item?.id}`}
								address={item.address}
								contacts={item.contacts}
								region={item.region}
							/>
						);
					})
				}
			</ul>
		</StandartLayout>
	);
};

export default RegionWarehouses;
