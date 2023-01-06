import {useState,useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from "react-star-ratings";

export function Fakestore(){
const[product,setProduct]=useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(response=>response.json())
    .then(json=>setProduct(json))
});
    return(
        <>
        <div className='container-fluid'>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Title</th>
                                    <th>Product Price</th>
                                    <th>Product Description</th>
                                    <th>Product Category</th>
                                    <th>Product Image</th>
                                    <th>Rating Rate</th>
                                    <th>Rating Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((value,index)=>(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.price}</td>
                                            <td>{value.description}</td>
                                            <td>{value.category}</td>
                                            <td><img src={value.image} className="img-fluid"/></td>
                                            <td><StarRatings rating={value.rating.rate} starDimension="15px" starSpacing="1px" starRatedColor="gold"></StarRatings></td>
                                            <td>{value.rating.count}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}