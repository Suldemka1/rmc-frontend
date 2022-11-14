import { FC } from "react"
import { IChildren } from "../../models/IChildren"

const Resources : FC<IChildren> = ({children} : IChildren) => {
  return (
    <div>
      <div className="text-xl font-normal py-3">
        <h1>Полезные ресурсы</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
      {children}
    </div>
    </div>
    
  )
}

export default Resources