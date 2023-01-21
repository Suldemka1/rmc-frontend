import { MdArrowRightAlt } from "react-icons/md"
import { Link, To } from "react-router-dom"

interface IBreadcrumbItem {
  name: String;
  url: To;
}

const BreadcrumbItem = ({ name, url }: IBreadcrumbItem) => {
  return <div className="flex items-center gap-3">
    <Link to={url}>{name}</Link>
    <MdArrowRightAlt />
  </div>
}

export default BreadcrumbItem