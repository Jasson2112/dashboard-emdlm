import Category from '../components/Category'
import '../App.css';

export default function ListCategory({ categoryProducts }) {
        
    return <div className="row">
        
                

         
                            {categoryProducts.map(CategoryProduct => <Category name={CategoryProduct.name} qty= {CategoryProduct.qty} />)}
  




    </div>
}