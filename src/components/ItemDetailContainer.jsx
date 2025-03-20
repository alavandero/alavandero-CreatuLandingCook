import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import {getProduct} from "../firebase/db"

function ItemDetailContainer() {
    const [detail, setdetail] = useState()
    const { id } = useParams()

    useEffect(() => {

      getProduct(id).then(res => setdetail(res) )
    }, [id])


  return (
    <div className="container">
        <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer;