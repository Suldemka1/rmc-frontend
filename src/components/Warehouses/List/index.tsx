import ListItem from "./ListItem";

const List = () => {
    return (
        <ul className="flex flex-col gap-5">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    );
};

export default List;