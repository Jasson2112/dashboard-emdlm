import "../components/style.css"
import '../App.css';

export default function CategoryProduct({ name, qty }) {
    return (

        
        <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
           {name} {":"} {qty} 
          </div>
        </div>
      </div>

        
    )
}