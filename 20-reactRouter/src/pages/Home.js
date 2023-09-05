import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/products')
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  )
}

export default Homepage
