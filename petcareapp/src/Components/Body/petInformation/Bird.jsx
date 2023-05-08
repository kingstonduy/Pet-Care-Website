
import cs from './petInfo.module.css'

import chim1 from '../../../assests/petInformation/chim1.jpg'
import chim2 from '../../../assests/petInformation/chim2.jpg'
import chim3 from '../../../assests/petInformation/chim3.jpg'
import chim4 from '../../../assests/petInformation/chim4.jpg'
import chim5 from '../../../assests/petInformation/chim5.jpg'
import chim6 from '../../../assests/petInformation/chim6.jpg'

export default function Bird(){

    return(
        <div className={cs['body']}>
             <div className='grid'>
                <div className={cs['grid__wrap']}>

                    <div className={cs['heading-des']}>
                        <h2>Common diseases in Birds</h2>
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>1. </span>  Flu</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={chim2} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Due to the temperature difference, the daytime temperature is usually quite high, 
                                but it turns cold at night. Pet birds are often less active, 
                                so their resistance will be weaker, more susceptible to colds and flu. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Fur ruffled, tattered, less active in flight, wheezing, weak appetite, runny nose, 
                                sometimes trembling, lethargic eyes. </p>

                            <h4>Treatment</h4>
                            <p> - When discovered, it is necessary to carefully check the condition. 
                                If the bird has not ruffled its feathers and still combs its feathers normally, it means that the 
                                disease is not very serious. Move the bird cage to a warm, airtight, well-lit place, the temperature 
                                maintained at about 25°C. Use a cotton swab to wipe away the snot to help them breathe easier. For 
                                critically ill birds, use the antibiotic Chlortetracycline. Crush and mix into food, feed 2 times a day, 
                                treat for 3 days. If the bird does not feed on its own, mix it in drinking water and pump it slowly into its 
                                mouth to avoid choking. For large birds, most of them can clear up on their own without the need for medication. 
                                You can bake bananas and pepper to feed the birds. This will help them build their own resistance. </p>
                            
                            <h4>Prevention</h4>
                            <p> - When buying new birds, it is necessary to mix antibiotics into the bird's food and water to kill pathogens. 
                                Supplement with nutrients that support the immune system such as: egg yolk, fish meal, canola oil. 
                                When the weather turns cold, the cage must be moved to a place that is airtight, with lots of light and warmth. </p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>2. </span>  Diarrhea caused by E. coli</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={chim1} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Because the food is not suitable or the cage is unsanitary. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Birds have thin, wet stools, look at the bottom of the cage to see broken feces. If the disease is severe, the bird looks weak, stops eating, sings less and flies and jumps not much. </p>

                            <h4>Treatment</h4>
                            <p> - Give birds 1-2 mg of Ampicillin; 15ml water with 25% sugar. Feed the bird continuously for 3 days. </p>
                            
                            <h4>Prevention</h4>
                            <p> - The cage must be cleaned regularly. Do not change the bird's food often, do not feed the bird with a lot of water, about once a week, or eat on a hot day. </p>
                            
                        </div>
                     
                    </div>

                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>3. </span>  Coccidiosis</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={chim3} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Caused by a single-celled parasite called Eimeria. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - The bird is lethargic, often sleeps during the day, thins quickly, skin color and legs are pale due to anemia, ruffled feathers, 2 wings fall, birds eat abnormally. 
                                Birds drink a lot of water leading to diarrhea, after the disease worsens, 
                                the stools are red-brown and mixed with fresh blood. </p>

                            <h4>Treatment</h4>
                            <p> - Coccidiosis is a very common disease in poultry, so there are many drugs of many different brands both domestically and internationally. After detecting the disease, you should go to the nearest veterinary 
                                medicine facility for advice and instructions on how to use it. Or buy imported drugs like Endocox 2.5%, 
                                Baycox 2.5%, Cocci-Care... </p>
                            
                            <h4>Prevention</h4>
                            <p> - Pathogens in feces can survive independently waiting for the opportunity to infect other birds. 
                                Therefore, it is necessary to clean the cages and take measures 
                                to disinfect and disinfect and use preventive drugs periodically to avoid cross-contamination in the herd.</p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>4. </span>  Inflammatory disease of the sebaceous gland</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={chim4} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Because this gland of the bird is injured, infected or the bird has a cold or a cold... </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Birds show fatigue, tattered feathers, anorexia, red and swollen sebaceous glands with pus. </p>

                            <h4>Treatment</h4>
                            <p> - First use iodine tincture to disinfect the sebaceous glands. 
                                Then use a sterilized needle to puncture the sebaceous gland, squeeze the pus out with your hand 
                                (squeeze when you see fresh blood). Finally, apply iodine tincture again to the bird's sore spot. </p>
                            
                            <h4>Prevention</h4>
                            <p> - Remove sharp objects 
                                in the cage that could injure the bird. Avoid places that are too hot or too cold, 
                                feed the birds with nutrients.</p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>5. </span>  Foot diseases</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={chim5} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Birds kept in paw cages are often easily cut by 
                                sharp objects or bitten by insects and become infected. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Fester, swelling, if severe, can lead to bone necrosis. </p>

                            <h4>Treatment</h4>
                            <p> - Use a disinfected sharp knife to remove the pus, then use physiological saline 
                                (also known as isotonic salt) or use a solution of 0.1% potassium permanganate (potassium permanganate) 
                                to clean the sore, then apply iodine alcohol and anti-infective drugs. </p>
                            
                            <h4>Prevention</h4>
                            <p> - To prevent and prevent these diseases for birds, we should regularly disinfect the cage, and check to remove sharp objects.
                                Thus, there are many common diseases in ornamental birds when raised. To treat these diseases, 
                                you need to make sure   the bird is clean and use the right medicines and treatments. However, 
                                to prevent these diseases is more important, 
                                so you should make sure to keep your birds clean and vaccinate them periodically. 
                                If your bird has any serious symptoms, it is a good idea 
                                to take them to your veterinarian for a prompt diagnosis and treatment.</p>
                            
                        </div>
                     
                    </div>

 
                </div>
            </div>
        </div>
    )
}