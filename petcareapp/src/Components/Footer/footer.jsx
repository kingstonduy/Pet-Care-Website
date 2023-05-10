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
                                    <a href="/Home">About us</a>
                                </li>

                                <li>
                                    <a href="/Service">Services</a>
                                </li>

                                <li>
                                    <a href="https://github.com/kingstonduy/Pet-Care-Website/pulse">Our Team</a>
                                </li>

                                <li>
                                    <a href="/Products">Products</a>
                                </li>
                            </div>

                            <div className={cs["body-contact-info"]}>
                                <li>Trường Đại học Quốc Tế - Đại học Quốc gia TP.HCM</li>
                                <li>Địa chỉ: Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</li>
                                <li>Điện thoại: (028) 37244270</li>
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