import React from "react"
import profileImage from "../../../assets/img/user-img.png"


const Profile = () => {
  return (
    <React.Fragment>
      <section className="p-3 bg-brains">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-user-circle" /> Your Profile</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={profileImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Personal Information</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item bg-brains">
                      First Name :
                    </li>
                    <li className="list-group-item bg-brains">
                      Last Name :
                    </li>
                    <li className="list-group-item bg-brains">
                      Email :
                    </li>
                    <li className="list-group-item bg-brains">
                      Phone :
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header bg-dark text-brains">
                  <p className="h4">Update Address</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item bg-brains">
                      First Name :
                    </li>
                    <li className="list-group-item bg-brains">
                      Last Name :
                    </li>
                    <li className="list-group-item bg-brains">
                      Email :
                    </li>
                    <li className="list-group-item bg-brains">
                      Phone :
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </React.Fragment>
  )

}

export default Profile