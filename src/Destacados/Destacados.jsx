import React from "react";
import "./destacados.css"
import { useState } from "react";
import { useEffect } from "react";
import {getFirestore, collection, getDocs, addDoc, query, where} from "firebase/firestore";
import productos from "../json/productos.json"


const Destacados = () => {
    const [items, setItems] = useState([]);

    // Se reciben los items
    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items" )
        const destacados = query(itemsCollection, where("destacado", "==", true))

        getDocs(destacados).then((snapShot) => {
        setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        })
    }, [])



    return(
        <section className="destacados section">
            <h2 className="section__title">PRODUCTOS DESTACADOS</h2>
            <div className="destacados__box">
                {
                    items.map(item => (
                        <div key={item.id} className="product">
                            <div className="product__img">
                                <img src={item.img} alt={item.nombre} />
                            </div>
                            <div className="product__body">
                                <h3>{item.nombre}</h3>
                                <span>${item.precio}</span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}


export default Destacados;