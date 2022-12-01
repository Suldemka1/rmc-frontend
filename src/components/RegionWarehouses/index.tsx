import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import StandartLayout from "../../layouts/StandartLayout";
import { getRegionsWarehouses } from "../../store/slices/regionsSlice/services";
import ListItem from "../Warehouses/List/ListItem";

const RegionWarehoueses: any = () => {
  const params = useParams();
  const regions = useAppSelector((state) => state.regions);
  const dispatch = useAppDispatch();
  setTimeout(() => {
       dispatch(getRegionsWarehouses(params.id));
       console.log('done')
       console.log(regions)
    }, 5000)
  useEffect(() => {
    
    
  }, [regions]);


  return (
    <StandartLayout>
      <ul className="flex flex-col gap-3">
        {/* {regions.data.data.warehouses.map((item: any) => {
          return (
            <ListItem
              key={item?.id}
              id={item?.id}
              title={item?.title}
              owner={item.owner}
              url={`/warehouses/${params.id}/${item.id}`}
              region={item.region}
              address={item.address}
              contacts={item.contacts}
              brief={item.brief}
              payment_options={item.payment_options}
            />
          );
        })} */}
      </ul>
    </StandartLayout>
  );
};

export default RegionWarehoueses;
