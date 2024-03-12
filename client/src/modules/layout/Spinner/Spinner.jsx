import React from "react";
import spinnergif from '../../../assets/img/spinner.gif';

const Spinner =()=>{
  return(
      <React.Fragment>
        <img src ={spinnergif} alt="spinner" className="d-block m-auto"/>
      </React.Fragment>
    )

}

export default Spinner