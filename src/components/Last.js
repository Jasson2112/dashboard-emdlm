import '../App.css';

export default function Last({ image, name, description, price, discount }) {
    return <div className="card-body">
        <div className="text-center"> 
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem'}} src={image} />
        </div>
        <h3>{name}</h3>
        <h4>Precio de Lista: ${price} </h4>
        <h4>Descuento: {discount *100}%  </h4>
        <h4>Precio Final: {price*discount} </h4>
        <h4>{description} </h4>
        <hr />
    </div>
}