import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const params = useParams()

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.id}</p>
    </>
  )
}

export default ProductDetailPage
