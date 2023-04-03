import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"
import { GlobalProvider } from "./routing/Context.jsx"


export default function () {
    return <GlobalProvider>
        <RouterProvider router={router}/>
    </GlobalProvider>}
