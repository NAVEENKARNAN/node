import {useState,useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from "react-star-ratings";

export function Assessment(){
const[products,setProduct]=useState([]);
useEffect(()=>{
    fetch('http://localhost:3000/assessment.json')
    .then(response=>response.json())
    .then(json=>setProduct(json))
});
return(
    <>
    <div className="card-container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h3>CLOTHING</h3>
            </div>
        </div>
        <div className="row mt-3 col-lg-12">
         {
            products.map((value,index)=>(
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-title text-center">
                            <p>{value.id}</p>
                            <p>{value.title}</p>
                            <p>{value.price}</p>
                            <p>{value.description}</p>
                            <p>{value.category}</p>
                            <img className="img-fluid imgs" src={value.image}/>
                            <p>{value.rating.rate}</p>
                            <p>{value.rating.count}</p>
                        </div>
                    </div>
                </div>
            ))
         }
        </div>
    </div>
    </>
);
}