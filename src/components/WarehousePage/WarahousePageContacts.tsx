import React from 'react';
import {MdEmail, MdPhone} from "react-icons/md";
import {ISchedule} from "../../models/IWarehouse";

const WarahousePageContacts = ({region, address, contacts, schedule}: any) => {
	return (
		<div className="flex flex-col gap-3 text-lg">
			<h1 className="text-2xl">Контактная информация склада</h1>
			<div>{address?.code}, {region?.title}, {address?.region}, улица {address?.street},
				дом {address?.house}</div>
			<div>
				<div className="flex items-center gap-2">
					<MdEmail className="w-7 h-7"/>
					<a href={`mailto: ${contacts?.email}`}>
						{contacts?.email}
					</a>

				</div>
				<div className="flex items-center gap-2">
					<MdPhone className="w-7 h-7"/>
					<a href={`tel: ${contacts?.phone}`}>{contacts?.phone}</a>
				</div>
			</div>
			<div>
				<h1>График работы склада</h1>
				<div className="xs:grid md:grid xs:grid-cols-2 md:grid-cols-7 justify-between">
					{
						schedule?.map((item: ISchedule) => {
							return (
								<span key={item?.id}>
									<p>{item?.day}</p>
									<p>{item?.time}</p>
								</span>
							)
						})
					}
				</div>
			</div>

			<div>Заведующий складом: Фамилия Имя Отчество</div>
		</div>
	);
};

export default WarahousePageContacts;
