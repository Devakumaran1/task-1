
import './find.css';
import { data } from '../../assets/data.js'

export const FindDoctor = () => {
  return (
    <>
      <div className="background">
        <h2 className='find-title'>Find Expert Doctor For An In-Clinic Session Here </h2>
        <div className='location'>
          <div className="select-wrapper">
            <i className='bx bxs-location-plus'></i>
            <select name='location'>
              <option value="Select Location">Select Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div className='search'>
            <div className="input-wrapper">
              <input type="input" placeholder='eg, Doctor,clinic name, specialisation' />
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div>
          <select name="exp" >
            <option value="Experiecnce">experience</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

        </div>
        <div>
          <select name="gender" >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>

        </div>
        <div>
          <select name="fee" >
            <option value="Fees">Fees</option>
            <option value="450">450</option>
            <option value="750">750</option>
            <option value="1500">1500</option>
          </select>

        </div>
        <div>
          <select name="lang" >
            <option value="Language">Language</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>

        </div>
        <div>
          <select name="all filter" className='green' >
            <option value="All Filter">All filter</option>
            <option value="450">450</option>
            <option value="750">750</option>
            <option value="1500">1500</option>
          </select>

        </div>
      </div>
      {/* <hr style={{width:'100%'}} /> */}
      <div className="selected-filter">
        <div>Hair Care <span><i className='bx bx-x'></i></span> </div>
        <div>Female <i className='bx bx-x'></i></div>
        <div>Rs.0-rs.500 <i className='bx bx-x'></i></div>
        <div>Hindi <i className='bx bx-x'></i></div>
      </div>
      
      <div className='card-continer'>
        <Card />
        <Card />
        <Card />
      </div>


    </>
  );
};


export const Card = () => {
  return (
    <>

      {data.map((item,index) => {

        return (
          
            <div className='card' key={index}>
              <div className="card-img">
                <img src={item.profile_img} alt="profile img" />
                <span>4.5 <i class='bx bxs-star'></i></span>
              </div>
              <h2>{item.name}</h2>
              <p>{item.link}</p>
              <p>{item.expericence}</p>
              <p>{item.lang}</p>
              <div className="consultant">
                <div>
                  <p>Video Consulting</p>
                  <p>Rs.800</p>
                </div>
                <div>
                  <p>Chat Consulting</p>
                  <p>Free</p>
                </div>
              </div>

              <div className="buttons">
                <button>View Profile</button>
                <button>Book a Consulting</button>
              </div>

            </div>
         
        )
      })}
    </>
  )

}



// {data.map((index)=>{
//   return(
//     <div className="card-container">
//       <div className="card">
//         <h1>{}</h1>

//       </div>
//     </div>
//   )
// })}