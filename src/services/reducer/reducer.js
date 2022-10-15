const initialData = {
    // list: JSON.parse(localStorage.getItem("todo")).list
    list:[]
}


// const local = localStorage.getItem("todo")
// console.log(JSON.parse(local).list)

const reducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            // localStorage.setItem("todo", JSON.stringify(
            //     {
            //         ...state,
            //         list: [
            //             ...state.list,
            //             {
            //                 id: id,
            //                 data: data
            //             }
            //         ]
            //     }
            // ))
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE_TODO":
            const { todoId } = action.payload;
            const newList = state.list.filter((element) => element.id !== todoId)
            return {
                ...state,
                list: newList
            }
        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }

        default:
            return state
    }

}

export default reducer