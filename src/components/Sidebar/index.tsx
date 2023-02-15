import Banner, { IBanner, IBanners } from "./Banner";

const Sidebar = (params: IBanners) => {
  return (
    <div className="sm:hidden md:hidden lg:flex flex-col gap-5">
      {params.pinned_links.map((item: IBanner) => (
        <Banner
          id={item.id}
          title={item.title}
          image={item.image}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Sidebar;
