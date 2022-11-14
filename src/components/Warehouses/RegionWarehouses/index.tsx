import { useLoaderData, useParams } from "react-router-dom";
import StandartLayout from "../../../layouts/StandartLayout";
import ListItem from "../List/ListItem";

const RegionWarehoueses = () => {
  const params = useParams();
  const loader = useLoaderData();

  return (
    <StandartLayout>
      <ul className="flex flex-col gap-3">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </StandartLayout>
  );
};

export default RegionWarehoueses;
