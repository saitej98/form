import React from 'react'
import image1 from "../Image/image1.png"
import image2 from "../Image/image2.png"
import image3 from "../Image/image3.png"
import image4 from "../Image/image4.png"
import image5 from "../Image/image5.png"





const Footer = () => {
  return (
    <>
    <div style={{border:"",marginTop:'10px' ,justifyContent:'space-evenly', display:'flex', height:'200px'}}>
    <div><img src={image1} alt="" />
    <p>ookla Verified</p>
    <p>Speeds verfied</p>
    <p>by Ookla</p>
    </div>
    <div> <img src={image2} alt="" />
    <p>Voice & Data
</p>
    <p>Voice & Telecom

</p>
    <p>Leadership Award 2017

</p>
    </div>
    <div><img src={image3} alt="" />
    <p>TOI/Stream
</p>
    <p>Highest average

</p>
    <p>download rates

</p>
    </div>
    <div><img src={image4} alt="" />
    <p>#AsliFiber
</p>
    <p>Asli Fiber in

</p>
    <p>Lucknow & Ahmedabad

</p>
    </div>
    <div><img src={image5} alt="" />
    <p>ET Certified
</p>
    <p>Best Brand in

</p>
    <p>Broadband 2020-ET
</p>
    </div>


    </div>
    </>
  )
}

export default Footer
