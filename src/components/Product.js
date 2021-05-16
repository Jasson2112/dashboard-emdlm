import "../components/style.css"
import '../App.css';

export default function Product({ name, brand }) {
    return (
        <div >
            <div >
                <div >
                    {name} {"-"} {brand}
                </div>
            </div>
        </div>
    )
}