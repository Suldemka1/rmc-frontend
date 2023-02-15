import { ReactNode, useEffect, useMemo, useState } from "react"
import { FC } from "react"
import { Link } from "react-router-dom"
import { MdArrowRightAlt } from 'react-icons/md'

const renderBreadcrumbs = (names: String[], links: String[]) => {
  const breadcrumbsArray: ReactNode[] = []
  for (let i = 0; i < names.length; i++)
    switch (names[i - 1]) {
      case "Новости": breadcrumbsArray.push(
        <div key={i} className="flex items-center gap-2">
          <Link to={`/news/${links[i + 2]}`}>{names[i]}</Link>
          {i !== names.length - 1 ? <MdArrowRightAlt /> : ""}
        </div>
      ); break;
      case "Склады": breadcrumbsArray.push(
        <div key={i} className="flex items-center gap-2">
          <Link to={`/warehouses/${links[i + 2]}`}>{names[i]}</Link>
          {i !== names.length - 1 ? <MdArrowRightAlt /> : ""}
        </div>
      ); break;
      case "Регионы": breadcrumbsArray.push(
        <div key={i} className="flex items-center gap-2">
          <Link to={`/warehouses/${links[i + 2]}`}>{names[i]}</Link>
          {i !== names.length - 1 ? <MdArrowRightAlt /> : ""}
        </div>
      ); break;
      default: if (i !== names.length - 1) {
        breadcrumbsArray.push(
          <div key={i} className="flex items-center gap-2">
            {names[i] === "Главная" ? <Link to={"/"}>{names[i]}</Link> : names[i] === "Регионы" ? <Link to={"/warehouses"}>{names[i]}</Link> : <Link to={"/" + links[i + 2]}>{names[i]}</Link>}
            {i !== names.length - 1 ? <MdArrowRightAlt /> : ""}
          </div>
        )
      } else {
        breadcrumbsArray.push(
          <div key={i} className="flex items-center gap-2">
            {names[i] === "Главная" ? <Link to={"/"}>{names[i]}</Link> : names[i] === "Регионы" ? <Link to={"/warehouses"}>{names[i]}</Link> : <Link to={"/" + links[i + 2]}>{names[i]}</Link>}
          </div>
        )
      }
    }
  return breadcrumbsArray
}

const Breadcrumbs: FC<any> = ({ params, localeUrl }: any) => {
  const [urlName, setUrlName] = useState<String[]>([])
  const [urlPath, setUrlPath] = useState<String[]>([])

  useMemo(() => {
    setUrlPath(window.location.href.split('/'))
    setUrlName(localeUrl.split('/'))
  }, [])

  useEffect(() => {
    setUrlPath(window.location.href.split('/'))
    setUrlName(localeUrl.split('/'))
  }, [window.location.href])

  return (
    <div className="container mx-auto flex flex-row items-center gap-2 py-3">
      {renderBreadcrumbs(urlName, urlPath)}
    </div>
  )
}

export default Breadcrumbs