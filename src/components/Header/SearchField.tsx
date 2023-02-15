import { GoSearch } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setQuery } from "../../store/slices/newsSearchSlice"
import { DetailedHTMLProps, InputHTMLAttributes, MutableRefObject, useRef } from "react"
import React from "react"
import { fetchPosts } from "../../store/slices/newsSearchSlice/services"

const SearchField = () => {
  const navigator = useNavigate()
  const query = useAppSelector((state) => state.newsSearch)

  const dispatch = useAppDispatch()

  const input = useRef() as MutableRefObject<HTMLInputElement>

  return (
    <div className="flex flex-row items-center bg-white rounded px-2">
      <input type="text" ref={input} placeholder="Поиск" maxLength={40} className="text-black outline-none" />
      <GoSearch fill="#000000" className="cursor-pointer"
        onClick={() => {
          dispatch(fetchPosts(input.current.value))
          navigator("/search")
        }} />
    </div >
  )

}

export default SearchField