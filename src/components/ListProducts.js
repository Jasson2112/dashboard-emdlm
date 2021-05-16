import Product from '../components/Product'
import '../App.css';

export default function ListProducts({ products }) {
    return <div >
        
        {products.map(product => <Product name={product.name} brand= {product.productBrand.name} />)}
                
    </div>
}