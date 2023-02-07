import { Link } from "react-router-dom";
import { IWarehouseCard } from "../../../models/IWarehouse";
import { MdEmail, MdPhone } from "react-icons/md";

const ListItem = ({
	id,
	title,
	url,
	contacts,
	address,
	region
}: IWarehouseCard) => {
	return (
		<li className="border border-black rounded">
			<div className="flex flex-col">
				<div className="bg-blue-400 font-semibold text-xl text-white p-3">
					<h2>{title}</h2>
				</div>
				<div className="p-3">
					<p>
						{address?.code}, {region?.title}, {address?.region}, улица {" "}
						{address?.street}, дом {address?.house}
					</p>
				</div>
				<div className="flex sm:flex-col xs:flex-col md:flex-row justify-between items-stretch p-3">

					<div className="flex sm:flex-col md:flex-row gap-20">

						<div className="flex flex-col gap-3 p-3">
							{
								contacts[0]?.phone && <div className="flex flex-row items-start justify-start gap-2">
									<MdPhone className="w-6 h-6" />

									<p>{contacts[0]?.phone}</p>
								</div>
							}

							{
								contacts[0]?.email &&
								<div className="flex flex-row gap-2">
									<MdEmail className="w-6 h-6" />
									<p>{contacts[0]?.email}</p>
								</div>
							}

						</div>
					</div>

					<div className="button">
						<Link to={url}>Перейти</Link>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ListItem;
