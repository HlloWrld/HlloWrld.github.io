import './Projects.css';
import ncrpyt from '../images/ncrypt.gif'
import procon from '../images/procon.png'
import speakify from '../images/speakify.png'
import wtfgif from '../images/wtfgif.gif'

export default function Projects() {
    return(
    <div>
        <h1 className={'rainbowText'}>Projects</h1>
            <div className={'projectsWrapper'}>
                
                <div className={'ncryptWrapper'}>
               
                    <div className={'ncryptContentWrapper'}>
                        <div>
                            <h2>
                                Ncrypt
                            </h2>
                            <div className={'projectDescription'}>
                            Web application created with 3 other developers. 
                            Designed on Figma and developed using PHP and Laravel. 
                            Functions included image uploading and modification. 
                            Team organized using Trello.
                            </div>
                                <div className={'languagesWrapper'}>
                                    <div>
                                        <h4>
                                            Frontend
                                        </h4>
                                        <div className={'icons'}>
                                            <i className="devicon-html5-plain-wordmark"></i>
                                            <i class="devicon-css3-plain-wordmark"></i>
                                            <i class="devicon-bootstrap-plain-wordmark"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>
                                            Backend
                                        </h4>
                                        <div className={'icons'}>
                                            <i class="devicon-laravel-plain-wordmark"></i>
                                            <i class="devicon-php-plain"></i>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                        </div>
                       
                        <img className={'projectImage'} src={ncrpyt} alt=""></img>
                    </div>
                </div>
                
                <div className={'proconWrapper'}>
                  
                    <div className={'proconContentWrapper'}>
                        <div>
                            <h2>
                                Procon
                            </h2>
                            <div className={'projectDescription'}>
                            Online platform for students to improve their development skills. 
                            Worked in team of 4 students to design and build. 
                            Designed and developed in 2 months using agile software development practices. 
                            Team management software included Jira.
                            </div>
                            <div className={'languagesWrapper'}>
                                    <div>
                                        <h4>
                                            Frontend
                                        </h4>
                                        <div className={'icons'}>
                                            <i className="devicon-html5-plain-wordmark"></i>
                                            <i class="devicon-css3-plain-wordmark"></i>
                                            <i class="devicon-react-original-wordmark"></i>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h4>
                                            Backend
                                        </h4>
                                        <div className={'icons'}>
                                            <i class="devicon-nestjs-plain-wordmark"></i>
                                            {/* <i class="devicon-javascript-plain"></i> */}
                                            <i class="devicon-mysql-plain-wordmark"></i>
                                            <i class="devicon-amazonwebservices-plain-wordmark"></i>
                                        </div>
                                    </div>
                                </div>
                                    <br></br>
                                    <br></br>
                                <a className={'liveSiteButton'}href="http://idsp3-procon-test.herokuapp.com">Link To Hosted Site</a>
                        </div>

                        <br></br>
                        <img src={procon} className={'projectImage'} alt=""></img>
                    </div>
                    <br></br>
                    
                </div>
                
                <div className={'speakifyWrapper'}>
               
                    <div className={'speakifyContentWrapper'}>
                        <div>
                            <h2>
                                Speakify
                            </h2>
                            <div className={'projectDescription'}>
                            Web application designed to allow users to speak to record notes. 
                            Note pad included markdown editor and utilizing azure Text-To-Speech. 
                            Email verification required for account signup. 
                            <br></br>
                            <br></br>
                            Markdown editor allows for images to be uploaded and saved to MySQL database.
                            </div>
                            <div className={'languagesWrapper'}>
                                    <div>
                                        <h4>
                                            Frontend
                                        </h4>
                                        <div className={'icons'}>
                                            <i className="devicon-html5-plain-wordmark"></i>
                                            <i class="devicon-css3-plain-wordmark"></i>
                                            <i class="devicon-csharp-plain-wordmark"></i>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h4>
                                            Backend
                                        </h4>
                                        <div className={'icons'}>
                                            <i class="devicon-azure-plain-wordmark"></i>
                                            <i class="devicon-csharp-line-wordmark"></i>
                                            <i class="devicon-mysql-plain-wordmark"></i>
                                        </div>
                                    </div>
                                </div>
                                    <br></br>
                                    <br></br>
                                
                        </div>


                    
                        <img src={speakify} className={'projectImage'} alt=""></img>
                    </div>
                </div>
            
                <div className={'wtfWrapper'}>
                  
                    <div className={'wtfContentWrapper'}>
                        <div className={'wtfFlex'}>
                            <div >
                            <h2>
                        WTF Is That Noise?!
                    </h2>
                                <div className={'projectDescription'}>
                                    iOS Mobile application designed using Google Teachable Machine to recognize common car issues using the phone microphone. 
                                    Diagnostic connectes to API to provide estimate repair cost. 
                                    <br></br>
                                    <br></br>
                                    Developed in team of 4 developers using scrum. 
                                    Created multiple iterations of Figma designs and workflows.
                                    
                                </div>
                                    <div className={'languagesWrapper'}>
                                            <div>
                                                <h4>
                                                    Frontend
                                                </h4>
                                                <div className={'icons'}>
                                                    <i className="devicon-html5-plain-wordmark"></i>
                                                    <i class="devicon-css3-plain-wordmark"></i>
                                                    <i class="devicon-react-original-wordmark"></i>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <h4>
                                                Backend
                                            </h4>
                                            <div className={'icons'}>
                                                <i class="devicon-mysql-plain-wordmark"></i>
                                                <i class="devicon-androidstudio-plain-wordmark"></i>
                                                <i class="devicon-mysql-plain-wordmark"></i>
                                                <i class="devicon-google-plain"></i>
                                                <i class="devicon-heroku-plain-wordmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                        <br></br>
                                        <br></br>
                            </div>   
                            <div className={'wtfGifOverlay'}>   
                            <img src={wtfgif} className={'wtfGif'} alt=""></img>
                            </div>
                        </div>

               
                        </div>
                </div>
                
            </div>
    </div>
    )
}