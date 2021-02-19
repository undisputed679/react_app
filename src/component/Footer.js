import React from 'react'
import img1 from '../images/footimg.svg'
import img2 from '../images/Rectangle.svg'
import img3 from '../images/github.svg'
import img4 from '../images/Line2.svg'
import img5 from '../images/Line3.svg'
import img6 from '../images/Line4.svg'

function Footer() {
    return (
        <div>
            
            <div className='imgcontainer' >
                <div>
                <img src={img1}/>
                </div>
                <div className='txtcontainer'>
                    <h2>Join the waiting list for the beta.</h2>
                    <p className='cnttxt'>Get latest product updates, resources, curated content delivered
                     straight your inbox. Be the first to learn the news
                      about new dfeatures and product updates</p>
                    <div className='boxinput'>
                        <p className='boxtxt'>Enter your emakil address...</p>
                    </div>
                </div>
            </div>
            
            <div className='endcont'>
                <img src={img2}/>
                <h1>2021 Dynopii | Privacy Policy | Terms</h1>
                {/* <div className='logocontainer'>
                    <div className='logoback'>
                        <img className='logo' src={img3}/>
                    </div>
                    <div className='logoback'>
                        <img src={img3}/>
                    </div>
                    
                
                

                </div> */}
            </div>
            

            <div className='end'>
                <img className='l1' src={img4}/>
                <img className='l2' src={img5}/>
                <img className='l3' src={img6}/>
            </div>
            
        </div>
    )
}

export default Footer
