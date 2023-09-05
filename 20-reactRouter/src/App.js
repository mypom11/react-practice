import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom'
import Homepage from './pages/Home'
import ProductsPage from './pages/Products'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import ProductDetailPage from './pages/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
])

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/" element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />
}

export default App
