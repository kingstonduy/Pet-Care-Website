import { useEffect } from 'react'
import BookingHistory from '../../HiddenWrapContainer/BookingHistory'
import cs from './About.module.css'
const About = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },[])
    return (
        <>
            <div className={cs["body"]}>

                <div className={cs["container"]}>

                    <div className={cs["upper-part"]}>
                        <div className={cs["upper-left"]}>
                            <div className={cs["upper-header"]}>
                                <h1>Meow is:</h1>
                            </div>

                            <div className={cs["upper-body"]}>
                                <div className={cs["upper-body-1"]}>
                                    Welcome to our website, where we cater to all your pet-related needs. 
                                    We are passionate about pets and understand how important they are to you. 
                                    We believe that pets are not just animals, but members of the family. 
                                    That's why we offer a wide range of high-quality pet products and services 
                                    that meet the needs of pet owners, ensuring that their pets stay healthy and happy.
                                </div>


                                <div className={cs["upper-body-2"]}>
                                    Our website is designed to provide a hassle-free shopping experience for pet owners,
                                    with a user-friendly interface that makes it easy to find the products you need. 
                                    We offer an extensive product range that includes pet food, toys, grooming products, 
                                    accessories, and much more. Our products are sourced from trusted suppliers who share 
                                    our passion for pets and quality.
                                </div>
                            </div>
                        </div>

                        <div className={cs["upper-right"]}>
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                    </div>

                    <div className={cs["lower-part"]}>
                        <div className={cs["lower-left"]}>
                            <div className={cs["lower-left-header"]}>
                                <h2>Mission:</h2>
                            </div>
                            <div className={cs["lower-left-body"]}>
                                <div className={cs["lower-left-1"]}>
                                    Our mission is to provide pet owners with the best possible 
                                    shopping experience and the highest quality products and services. 
                                    We believe that pets deserve the best care, and we are committed to
                                    ensuring that pet owners have access to everything they need to take care of their furry friends.
                                </div>

                                <div className={cs["lower-left-2"]}>
                                    At our website, we strive to offer exceptional customer service, 
                                    ensuring that every customer is satisfied with their purchase. 
                                    We believe that a happy customer is a loyal customer, and we work hard to 
                                    build long-lasting relationships with our customers.
                                </div>

                                <div className={cs["lower-left-3"]}>
                                    We are also committed to providing our customers with affordable prices, 
                                    ensuring that every pet owner can access the products and services they need without breaking 
                                    the bank.
                                </div>
                            </div>
                            
                        </div>

                        <div className={cs["lower-right"]}>
                            <div className={cs["lower-right-header"]}>
                                <h2>Vision:</h2>
                            </div>
                            <div className={cs["lower-right-body"]}>
                                <div className={cs["lower-right-1"]}>
                                    Our vision is to become the leading provider of pet products and services globally. 
                                    We want to be recognized as a company that cares about the well-being of pets and their owners. 
                                    We believe that we can achieve this by continuously improving our product range, expanding our services, and creating a sense of community among pet owners.
                                </div>

                                <div className={cs["lower-right-2"]}>
                                    We aim to offer innovative products that cater to the specific needs of pets, 
                                    ensuring that pet owners have access to everything they need to take care of their furry friends. 
                                    We also want to create a platform where pet owners can connect with each other, 
                                    share their experiences, and seek advice on various pet-related topics.
                                </div>

                                <div className={cs["lower-right-3"]}>
                                    At our website, we believe that we can make a difference in the lives of pets
                                    and their owners. We are committed to working towards our vision every day, 
                                    ensuring that we provide the best possible products and services to our customers.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default About