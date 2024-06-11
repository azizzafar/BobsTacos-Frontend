import "../footer/FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Bobs Taco!</h1>
                    <p>Your Taste Our Service</p>
                </div>
                
                <div>
                    <a href="#">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>Bobs Taco! <br></br>Norway</p>
                   
                    <h4>Contact Us</h4>
                    <p>Tel No.4324242423</p>    
                </div>
                
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;