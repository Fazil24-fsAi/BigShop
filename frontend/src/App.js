import Data from "./Data";


function App() {
  return (
    <div>
      <header>
        <a href='/'> FsAi </a>
      </header>
      
      <main> 
        <h1>Featured Product</h1>

        <div className="products">
        {
          Data.products.map((product =>(
          <div  classname="product" key={product.slug}>

           

            <div className="hello">
            <a href={`/product/${product.slug}`}>
            <img src={product.images} alt={product.name} />
               </a>

            <p className="pp">
           <a href={`/product/${product.slug}`}>
             {product.name}
              </a>

              </p>
              <p className="pp">
              <strong>₹ {product.price}  </strong>
                <p>
                <button>Add to cart</button>
                 </p>
              </p>
              </div>

          </div>
          )))}
          </div>
        
         </main>
    </div>
  );
}

export default App;
