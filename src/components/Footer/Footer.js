import React from 'react';
import './Footer.css';

const Footer= () =>{
    return(
        <React.Fragment>
        <div className="Footer-div">
            <div>
            <h3>FOLLOW US ON</h3>
            <p><a href="https://www.facebook.com/dscAKGEC/" target="_blank" rel="noreferrer" ><i className="fab fa-facebook ic fa-2x"></i></a>   <a href="https://www.instagram.com/dsc_akgec/?hl=en" target="_blank" rel="noreferrer"><i className="fab fa-instagram ic fa-2x"></i></a>
            <a href="https://www.linkedin.com/company/developer-student-club-akgec" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin ic fa-2x"></i></a><a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a><br/></p>
            <p><a href="https://www.facebook.com/dscAKGEC/" target="_blank" rel="noreferrer" >facebook</a><a href="https://www.instagram.com/dsc_akgec/?hl=en" target="_blank" rel="noreferrer">instagram</a>
            <a href="https://www.linkedin.com/company/developer-student-club-akgec" target="_blank" rel="noreferrer" >linkedin</a><a href="https://www.youtube.com/channel/UCZvNkM_UNgR4_2fQpBqvWUw" target="_blank" rel="noreferrer">youtube</a></p><a href="#"><button><i className="fas fa-arrow-up"></i></button></a><br/>
            </div>      
        </div>
        </React.Fragment>
    );
}

export default Footer;