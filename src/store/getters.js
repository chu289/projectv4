import state from "./state"

export const HOSPITAL__INIT = () =>{
    return state.searchResult.map((item) =>{
        return item.hosp_name
    })
}