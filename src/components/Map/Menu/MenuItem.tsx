import React from 'react';

const MenuItem = ({id, name, onChange, isChecked}:
                      {
                          id: string
                          name: string
                          isChecked: boolean
                          onChange: Function
                      }
) => {

    return (
        <div className=" ">

            <input id={id} type="checkbox"
                   className="peer hidden active:bg-red-600"
                   checked={isChecked}
                   onChange={() => {
                       onChange()
                   }}/>

            <label htmlFor={id}
                   className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300
                              cursor-pointer select-none peer-checked:bg-gray-800">
                {name}
            </label>
        </div>
    )
}

export default MenuItem;