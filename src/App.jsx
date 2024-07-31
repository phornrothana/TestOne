import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home"
import ProudctDetail from "./pages/ProudctDetail";
const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path : ":id",
        element:<ProudctDetail/>
      },
      {
        path:"service",
        element:<h2>service</h2>
      },
      {
        path:"accessories",
        element:<h2>Accessories</h2>
      },
      {
        path:"about",
        element:<h2>About</h2>
      }
    ]
  },
])
function App(){
  return <>
        <RouterProvider router={router}/>
  </>
}
export default App;
