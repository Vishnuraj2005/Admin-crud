import { useCart } from './CartContext';

const productsList = [
  { id: 1, name: 'Cheese Pizza', price: 299, rating: 4.2, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' },
  { id: 2, name: 'Burger', price: 199, rating: 4.1, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
  { id: 3, name: 'Pasta', price: 249, rating: 4.3, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d' },
  { id: 4, name: 'Salad', price: 149, rating: 4.0, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c' },
  { id: 5, name: 'Sandwich', price: 179, rating: 4.2, img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' },
  { id: 6, name: 'Veg Pizza', price: 269, rating: 4.4, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591' },
  { id: 7, name: 'Fried Rice', price: 199, rating: 4.1, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 8, name: 'Grilled Chicken', price: 349, rating: 4.5, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
  { id: 9, name: 'French Fries', price: 129, rating: 4.3, img: 'https://images.unsplash.com/photo-1543353071-087092ec393a' }
];

const Product = () => {
  const { addToCart } = useCart();

  return (
  <>
  {/* PRODUCTS */}

      <section className="products" style={{margin:'15px'}}>

        <div className="pro-head">
          <h1>Food Items Orded Now!</h1>
        </div>

        <div className="card">

          <div className="container mt-5 bg-light" >
            <div className="row g-4">
              {productsList.map((product) => (
                <div className="col-md-4" key={product.id}>
                  <div className="card shadow">
                    <img src={product.img} className="card-img-top" alt={product.name} style={{ height: '400px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        <strong>Price:</strong> ₹{product.price} <br />
                        <strong>Rating:</strong> {Array(Math.floor(product.rating)).fill('⭐').join('')}☆ ({product.rating})
                      </p>
                      <button 
                        className="btn btn-success w-100"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart 🛒
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

export default Product;