import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import App from "./pages/App.jsx"

const router = createBrowserRouter([
    {
        path: '/user/:id',
        element: <App />
    }])

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Router