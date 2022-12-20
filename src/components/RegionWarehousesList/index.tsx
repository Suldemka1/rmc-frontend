import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StandartLayout from "../../layouts/StandartLayout";
import ListItem from "../Warehouses/List/ListItem";

const RegionWarehouesesList: any = () => {
	const [state, setState] = useState<any>({});
	const params = useParams();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASEURL}/api/regions/${params.id}?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate[warehouses][populate][2]=region&populate=*`)
			.then((res) => res.json())
			.then((res) => setState(res.data))
			.catch((res) => {
				console.error(res)
			})
			.finally(() => {
				console.log('done')
			})

	}, []);

	return (
		<StandartLayout>
			<ul className="flex flex-col gap-3">
				{state?.warehouses?.map((item: any) => {
					return (
						<ListItem
							key={item?.id}
							id={item?.id}
							title={item?.title}
							url={`/warehouses/${params?.id}/${item?.id}`}
							address={item.address}
							contacts={item.contacts}
							region={item.regions}
						/>
					);
				})}
			</ul>
		</StandartLayout>
	);
};

export default RegionWarehouesesList;
