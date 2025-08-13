import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import App from "./pages/App.jsx"

const router = createBrowserRouter([
    {
        path: '/user/:id',
        element: <App />,
        errorElement: <div>Page not found
            <p>Essayez de rentrer : "localhost:5173/user/12" ou "localhost:5173/user/18" pour voir les données des utilisateurs 12 et 18.</p>
        </div>
    }])

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Router