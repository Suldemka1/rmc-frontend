import { FC } from "react"
import RegionWarehousesList from "./RegionWarehousesList"
import RegionWarehousesListItem from "./RegionWarehousesList/RegionWarehousesListItem"

const RegionWarehousesContainer : FC = () => {
  return (
    <div>
      <RegionWarehousesList>
        <RegionWarehousesListItem />
        <RegionWarehousesListItem />
        <RegionWarehousesListItem />
      </RegionWarehousesList>
    </div>
  )
}

export default RegionWarehousesContainer