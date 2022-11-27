import React from "react";

function Card(props){
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
);
}

export default Card;

