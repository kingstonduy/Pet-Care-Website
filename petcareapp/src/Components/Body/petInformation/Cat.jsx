import cs from './petInfo.module.css'
import meo1 from '../../../assests/petInformation/meo1.jpg'
import meo2 from '../../../assests/petInformation/meo2.jpg'
import meo3 from '../../../assests/petInformation/meo3.jpg'
import meo4 from '../../../assests/petInformation/meo4.jpg'
import meo5 from '../../../assests/petInformation/meo5.jpg'




export default function Cat(){

    return(
        <div className={cs['body']}>
            <div className='grid'>
                <div className={cs['grid__wrap']}>
                <div className={cs['heading-des']}>
                        <h2>Common diseases in Cats</h2>
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>1. </span>  Cat fungal disease</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={meo1} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - The reason is that cats are not warmed, do not dry after bathing, play dirty, 
                                are not cleaned, and the environment is humid. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> -When infected with fungus, the fungus is often itchy, uncomfortable, and falls out in patches. 
                                The plaque may be scaly, foul-smelling, irritated, red in color. If it is more severe, 
                                it can spread throughout the body, spread to the whole cat and can even be transmitted to humans.</p>
                               
                            <h4>Treatment</h4>
                            <p> - We quickly shave the hair to avoid widespread spread and control the disease in time. First, clean the fungal area, 
                                then apply Nizoral, Kentax, Ketoconazole, Fungikur, Biopirox, zinc Oxid ointment. 
                                Severe cases can be combined with oral and liver supplements to 
                                increase the effectiveness of treatment and bring to the veterinary clinic for the best treatment. </p>
                            
                        </div>
                     
                    </div>

                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>2. </span>  Cat flea disease</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={meo2} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - It is caused by flea saliva, not by bites. Flea saliva contains certain protein components 
                                that cause allergic reactions, where an overreaction leads to inflammation. This condition will cause the cat 
                                to itch and scratch excessively, shedding patches, rough skin, swelling, and scabs. </p>
                        

                               
                            <h4>Treatment</h4>
                            <p> - The simplest way to treat flea-bite dermatitis is to get rid of the fleas. Refer to methods to chase 
                                and kill fleas such as: using topical medications, sprays, nappy drops or flea collars... 
                                In more severe cases, you must bring them to the veterinary clinic for the best treatment. </p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>3. </span>  Cat is vomiting</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={meo3} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - By eating too much or running too soon after eating. 
                                Besides, there are cats vomiting related to stomach, intestines and internal organs.</p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - So to recognize abnormal vomiting, it is based on the following signs: the cat will 
                                vomit intermittently and for a long time, vomiting accompanied by anorexia or lethargy, inactivity ....</p>

                               
                            <h4>Treatment</h4>
                            <p> - To avoid the cat vomiting, we should deworm the kittens; pay attention to diet and nutrition; 
                                If the condition is critical, take the cat to the veterinarian immediately. </p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>4. </span>  Cat refuses to eat</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={meo4} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - The cause can be mentioned about the cat's anorexia due to habit, psychological or also due to disease. </p>
                            
                               
                            <h4>Treatment</h4>
                            <p> - To overcome this situation, you should find out why they stop eating to 
                                find an effective treatment. If it is related to habits and psychology, 
                                go back to the old diet or choose attractive foods, periodically deworm or not indulge 
                                them to eat well from the beginning. If it is related to a medical condition, you should seek 
                                medical attention immediately. </p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>5. </span>  Cat panting</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={meo5} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Cat panting is a condition in which a cat breathes very quickly, breathing is very labored when 
                                it is sleeping compared to usual and this is a symptom of their stress leading to lack of oxygen. A hot, stressed, 
                                or active cat may also experience hyperventilation, but this should go away in a few minutes. 
                                If the cat is breathing rapidly, this is a sign that the cat is suffering from respiratory diseases. </p>
                            

                               
                            <h4>Treatment</h4>
                            <p> - To overcome this situation, you should see their signs for treatment, 
                                and if you experience shortness of breath or pulmonary effusion leading to 
                                shortness of breath, you should find a doctor to solve.
                                 </p>
                            
                        </div>
                     
                    </div>





                </div>
            </div>
        </div>
    )
}