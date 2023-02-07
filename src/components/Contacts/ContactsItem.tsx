import { BsClock, BsPersonCircle, } from "react-icons/bs";

interface IContactItem {
    title: String,
    subtitle: String,
    phone: String,
    schedule: {
        start_time: String,
        end_time: String
    }
}

const ContactsItem = (params: IContactItem) => {
    return (
        <div className="grid grid-cols-[3fr_1fr] text-lg py-3">

            <div className="">
                <h3 className="font-bold">{params.title}</h3>
                <div className="flex gap-2 items-center font-normal">
                    <BsPersonCircle />
                    <p>{params.subtitle}</p>
                </div>
            </div>

            <div className="">
                <h4>{params.phone}</h4>
                <div className="flex gap-2 items-center">
                    <BsClock />
                    <p>{params.schedule.start_time} - {params.schedule.end_time}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactsItem;