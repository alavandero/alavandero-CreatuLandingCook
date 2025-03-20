import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
    return (
        <div className="card">
        <img src={detail?.image} className="card-img-top" alt={detail?.title} />
        <div className="card-body">
            <h5 className="card-title">{detail?.title}</h5>
            <p className="card-text">{detail?.description}</p>
            <p className="card-text">Precio: ${detail?.price}</p>
            <ItemCount product ={detail} />
        </div>
        </div>
    );
    }

    export default ItemDetail;