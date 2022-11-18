import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StandartLayout from "../../layouts/StandartLayout";
import { IWarehouse } from "../../models/IWarehouse";
import ListItem from "../Warehouses/List/ListItem";

const RegionWarehoueses = () => {
  const params = useParams();
  const [state, setState] = useState<any>();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions/${params.id}?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`
    )
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);

  return (
    <StandartLayout>
      <ul className="flex flex-col gap-3">
        {state?.data.warehouses.map((item: IWarehouse) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            owner={item.owner}
            url={`/warehouses/${state.data.id}/${item.id}`}
            region={item.region}
            address={item.address}
            contacts={item.contacts}
            brief={item.brief}
            payment_options={item.payment_options}
          />
        ))}
      </ul>
    </StandartLayout>
  );
};

export default RegionWarehoueses;
