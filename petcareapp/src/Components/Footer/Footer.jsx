import { Link } from 'react-router-dom'
import cs from './Footer.module.css'

const Footer = () => {
    return(
        <>
            <div className={cs["body"]}>
                


                <div className={cs["container"]}>
                    <div className={cs["container-header"]}>
                        <div className={cs["container-row"]}>
                            <div className="nav_wrap_left_logo">
                                <h2 className="nav_logo">
                                    Pet Care
                                </h2>
                            </div>
                            <div className={cs["header-links"]}>
                                Useful links
                            </div>

                            <div className={cs["header-explore"]}>
                                Explore
                            </div>
                            
                            <div className={cs["header-contact-info"]}>
                                Contact Info
                            </div>
                        </div>
                    </div>

                    <div className={cs["container-body"]}>
                        <div className={cs["container-row"]}>
                            <div className={cs["information"]}>
                            Our website is designed to provide a hassle-free shopping experience for pet owners,
                            with a user-friendly interface that makes it easy to find the products you need. 
                            We offer an extensive product range that includes pet food, toys, grooming products,
                            accessories, and much more. Our products are sourced from trusted suppliers 
                            who share our passion for pets and quality.
                            </div>

                            <div className={`${cs["body-links"]} ${cs["cursorable"]} 1`}>
                                <li>FAQs</li>
                                <li>Shop</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Site Map</li>
                            </div>

                            <div className={cs["body-explore"]}>
                                
                                <li>
                                    <Link  className={cs['link']} to="/About">About us</Link>
                                    
                                </li>

                                <li>
                                <Link  className={cs['link']} to="/Service">Services</Link>
                                    
                                </li>

                                <li>
                                    <a className={cs['link']} href="https://github.com/kingstonduy/Pet-Care-Website/pulse">Our Team</a>
                                </li>

                                <li>
                                    <Link  className={cs['link']} to="/Products/all">Products</Link>
                                    
                                </li>
                            </div>

                            <div className={cs["body-contact-info"]}>
                                <li>International University - Vietnam National University HCM City</li>
                                <li>Address: Quarter 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh City</li>
                                <li>Phone: (028) 37244270</li>
                                <li>Fax: (028) 37244271</li>
                                <li>Email: info@hcmiu.edu.vn</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
