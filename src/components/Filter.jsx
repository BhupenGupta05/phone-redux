import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()

  return (
    <div>
        Filter:
        <input 
        type="text" 
        name="filter"
        onChange={(e) => dispatch(setFilter(e.target.value))} 
        className=" bg-slate-200 rounded-md outline-none px-4 py-1 ml-1" 
        />
    </div>
  )
}

export default Filter