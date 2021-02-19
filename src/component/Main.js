import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/PIC.png'
import img2 from '../images/maxresdefault.png'
import img3 from '../images/Group1.svg'
import img4 from '../images/Group2.svg'
import img5 from '../images/Group3.svg'
import img6 from '../images/Group4.svg'
import img7 from '../images/Group5.svg'
import img8 from '../images/Group6.svg'
import img9 from '../images/Group9.svg'
import img10 from '../images/Star1.svg'

function Main() {
    return (
        <div>
            <p className='mainclass'>Redefining the way<br/> you communicate.</p>
            <p className="tag1">Speak English in short fun dialogues. Get instant feedback <br/>
            from proprietary artificial intelligence technology.
            </p>
            <div className='main_btn-div'>
                <button className='btn_1'><span className='circle'></span><span>SCHEDULE DEMO</span></button>
                <button className='btn_2'><span className='circle'></span><span>CONTACT SALES</span></button>
            </div>
            <div className='img-conatiner'>
                
                    <img className='img1' src={img1}/>
                    <img className='img2' src={img2}/>
            </div>
            


            <div className='content'>   
                        <div className='cnt'>
                            <h3>Trusted by top universties around the world </h3>
                        </div>
                        <div className='cnt'> 
                            <h1>Focus on your sales, not accent!</h1>
                            <h4>Let our trained models ease your work. Introducing AI based solutions.<br/>
                                See the impossible become reality.</h4>
                        </div>
                        <div className='cnt'> 
                            <h1>Introducing Dhwani</h1>
                            <h3>The goal of dhwani is to simplify the<br/>
                                pain points of a solution center.</h3>
                        </div>
            </div>

            <div className='box_txt'>
                        <div className='box1_txt'>
                            <div className='box1'>
                                
                            </div>
                            <div className='txt'>
                                    <h1>AI Voice Accent Changer</h1>
                                    <h3>Change you accent on the go. Change you <br/>
                                    accent on the go. Change you accent on the go.<br/> Change you accent on the go. 
                                    </h3>
                                    <Link to='#' className='l1'>LEARN MORE &#8594;</Link>
                            </div>    

                        </div>
                        <div className='box2_txt'>
                            <div className='box2'>
                                
                            </div>
                            <div className='txt'>
                                    <h1>AI Voice Accent Changer</h1>
                                    <h3>Change you accent on the go. Change you <br/>
                                    accent on the go. Change you accent on the go.<br/> Change you accent on the go.
                                     </h3>
                                     <Link to='#' className='l2'>LEARN MORE &#8594;</Link>
                            </div>    

                        </div>
            </div>

                <h1 className='content'>A possibility explored like never before.<br/>
                   More that 30 integrated features.</h1>
            <div className='sometxt'>
                <div>
                    <div className='dotcnt'><span className='dot'></span><span>AI Agent (Real time)</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>Customizable Dashboards</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>AI Voice Accent Changer</span></div>
                </div>
                <div>
                    <div className='dotcnt'><span className='dot'></span><span>SAAS base solution</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>Insights based dashboards</span></div>
                </div>
                <div>
                    <div className='dotcnt'><span className='dot'></span><span>One-click installation</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>15 min installation time</span></div>
                    <div className='dotcnt'><span className='dot'></span><span>AI Voice Accent Changer</span></div>
                </div>

            </div>
            <button className='dbtn'>SCHEDULE A DEMO</button>

            <div className='content'>
                    <h2>Integration with the tools you use</h2>
                    <p>Dhwani can easily connect with the tools your<br/>
                    team use to communicate with client.s</p>
            </div>
            <div className='content'>
            <h2>Integration with the tools you use</h2>
                    <p>Dhwani can easily connect with the tools your<br/>
                    team use to communicate with client.s</p>
            </div>


            <div class='icons-container1'>
                    <div className='content'>
                    <img src={img3}/> 
                    <h3 className='ic_txt'>35% increase in conversation</h3>
                        <p className='ic_txt2'>
                        It is our continued effort to bring<br/>about ideas solely for the benefit of<br/> mankind.
                        </p>
                    </div>
                    <div className='content'>
                     <img src={img4}/>
                     <h3 className='ic_txt'>
                     20% increase in rebound-sales
                     </h3>
                     <p className='ic_txt2'> 
                     We have always maintained a <br/> relation of faith and trust with our<br/> clients, never letting them down.
                     </p>
                    </div>
                    <div className='content'>
                    <img src={img5}/>
                    <h3 className='ic_txt'>
                    50% cost reduction in trainin
                    </h3>
                    <p className='ic_txt2'>
                    Our current goal being to change<br/> the channels of communications,<br/> making interaction a ton easier.
                    </p>
                    </div>
            </div>
            <div class='icons-container1'>
            <div className='content'>
                    <img src={img6}/> 
                    <h3 className='ic_txt'>10% TAT reduction for 
                        <br/>new campaigns</h3>
                        <p className='ic_txt2'>
                        It is our continued effort to bring<br/>about ideas solely for the benefit of<br/> mankind.
                        </p>
                    </div>
                    <div className='content'>
                     <img src={img7}/>
                     <h3 className='ic_txt'>
                     5% increase in new market entry
                     </h3>
                     <p className='ic_txt2'> 
                     We have always maintained a <br/> relation of faith and trust with our<br/> clients, never letting them down.
                     </p>
                    </div>
                    <div className='content'>
                    <img src={img8}/>
                    <h3 className='ic_txt'>
                    Start focsing on <br/>increasing sales more
                    </h3>
                    <p className='ic_txt2'>
                    </p>
                    </div>
            </div>

            <div className='content'>
                <h1 className='ic_txt' >Don’t just take our word for it - here’s what our<br/> users have to say</h1>
                <p className='ic_txt2'>Proudly showcasing our appreciated efforts through <br/>
                    a few words from our worthy clients.</p>
            </div>
                   

            <div className='container2'>
                
                <div className='black'>
                    <div class="arrow-right"></div> 
                        <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>
                </div>
                
                <div className='black'>
                    <div class="arrow-right"></div> 

                    <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>

                </div>
                <div className='black'>
                    <div class="arrow-right"></div> 

                    <div className='top_star_circle'>
                            <div className='starcontainer'>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                                <img src={img10}/>
                            </div>
                            <div>
                            <div className='round'></div>
                            </div>
                        </div>
                    <p  className='ic_txt2'>The enterprise dhwanii solutions<br/>
                     not only increased our outbound<br/>
                      sales but also solved a huge<br/>
                       problem of accent change on <br/>the go and training new <br/>
                       members. Waiting for there other<br/>
                        solutions in the pipeline...</p>


                </div>
            </div>

            {/* <div className='downblack'>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp'>Tech support manager@VRS solutions</p>
                    </div>
                </div>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp' >Tech support manager@VRS solutions</p>
                    </div>
                </div>
                <div className='down1'>
                    <div className='smround'>
                    </div>
                    <div className='downtxt'>
                        <h3>Jack</h3>
                        <p className='dp'>Tech support manager@VRS solutions</p>
                    </div>
                </div>  
    

            </div> */}


        </div>
    )
}

export default Main
