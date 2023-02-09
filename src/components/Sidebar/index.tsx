import Banner from "./Banner";

const Sidebar = () => {
    return (
        <div className="sm:hidden md:hidden lg:flex flex-col gap-5 py-3">
            <Banner id={1} title="" src='/bezz.svg'/>
            <Banner id={2} title="" src='/gosuslugi.svg'/>
            <Banner id={3} title="" src='/tuva1.svg'/>
        </div>
    );
};

export default Sidebar;