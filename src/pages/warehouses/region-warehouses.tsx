import React, { useEffect, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import ListItem from "../../components/Warehouses/List/ListItem";
import StandartLayout from "../../layouts/StandartLayout";
import { IWarehouseCard } from '../../models/IWarehouse';
import { IRegion } from '../../models/IRegion';

const RegionWarehouses = () => {
	const params = useParams();
	const res = useLoaderData() as IRegion
	const [state, setState] = useState<any>({});

	useEffect(() => {
		// fetch(`${process.env.REACT_APP_BASEURL}/api/regions/${params.id}?populate[0]=warehouses.contacts&populate[1]=warehouses.address&populate[2]=warehouses.region&populate=*`)
		// 	.then((res) => res.json())
		// 	.then((res) => setState(res.data))
		// 	.catch((res) => {
		// 		console.error(res)
		// 	})
	}, []);


	return (
		<StandartLayout localeUrl={`Главная/Регионы/${res.title}`}>
			<ul className="flex flex-col gap-3">
				{Array(res?.warehouses).length === 0 ? <div>В данном регионе нет складов.</div>
					:
					res.warehouses?.map((item: IWarehouseCard) => {
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

export const regionLoader = async ({ params }: LoaderFunctionArgs) => {
	const res = await fetch(`${process.env.REACT_APP_BASEURL}/api/regions/${params.id}?populate[0]=warehouses.contacts&populate[1]=warehouses.address&populate[2]=warehouses.region&populate=*`)
		.then((res) => res.json())
		.then((res) => res.data)
	return res
}

export default RegionWarehouses;
