import cs from './petInfo.module.css'

import cho1 from '../../../assests/petInformation/cho1.jpg'
import cho2 from '../../../assests/petInformation/cho2.jpg'
import cho3 from '../../../assests/petInformation/cho3.jpg'
import cho4 from '../../../assests/petInformation/cho4.jpg'
import cho5 from '../../../assests/petInformation/cho5.jpg'
import cho6 from '../../../assests/petInformation/cho6.jpg'

export default function Dog(){

    return(
        <div className={cs['body']}>
            <div className='grid'>
                <div className={cs['grid__wrap']}>

                    <div className={cs['heading-des']}>
                        <h2>Common diseases in Dogs</h2>
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>1. </span>  Infectious hepatitis</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho1} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Infectious hepatitis is mainly caused by the canine adenovirus-1 (CAV-1) virus, 
                                which penetrates the oral route, 
                                then enters the gastrointestinal tract through the tissues of most organs of the dog's body. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - In the first 4-7 days, the dog will often stop eating and then go into a coma.</p>

                            <p>- If the dog suddenly stops eating, the bloody diarrhea is too acute and usually dies within a few hours, 
                                the puppy will be more likely to die even though no symptoms have occurred.</p>

                            <p> - In the acute form, the dog will have a high fever (above 39 degrees Celsius), besides that, 
                                they will also stop eating, diarrhea and vomiting blood, the dog will often bend, writhe in pain, 
                                have bleeding spots under the skin, which are easy to see. especially in the abdomen. 
                                If the dog has symptoms of jaundice, it is difficult to survive. </p>

                               
                            <h4>Treatment</h4>
                            <p> - If the dog is too acute, it is difficult to treat, usually it will die in about 2-3 days. Besides, 
                                this disease has no specific treatment, mainly treated with a number of measures such as: 
                                Rehydration, electrolyte balance, glucose infusion, lactated ringer, vitamins,... 
                                Do not give food containing food. fat. Use antiseptic antibiotics and take care as prescribed by 
                                your doctor. </p>
                            
                            <h4>Prevention</h4>
                            <p>- Vaccinate dogs against infectious hepatitis.</p>
                            <p>- Puppies must be vaccinated from 6 to 8 weeks of age, to 12 weeks of age, to be vaccinated again, 
                                once a year.</p>
                            <p>- When a dog is suspected of being sick, it is necessary to isolate it immediately and clean 
                                the place where the dog is kept and the area where the dog is raised.</p>
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>2. </span>  Gastritis in dogs</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho2} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Due to hookworm, parvo virus, virus that causes disease or 
                                eating food and drinking water containing typhoid bacteria (Salmonella), 
                                anaerobic bacteria (Clostridium), E.Coli bacteria,... </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Infected dogs will have a fever, refuse to eat, sometimes accompanied by tremors, 
                                continuous vomiting, severe diarrhea, transition to the last stage, the feces will be dark brown, 
                                very fishy, ​​this period the dog cannot walk, only stay in one place. If care is not attentive and timely,
                                 dogs can die from 2-4 days after infection.</p>

                           

                               
                            <h4>Treatment</h4>
                            <p> - If the dog is infected, the dog should stop eating for the first 24 hours, just give the dog enough water. 
                                If the dog is vomiting, anticholinergics and chlorpromazine or metoclopramide 
                                can be used to make the dog more comfortable.
                                 </p>
                            
                            <h4>Prevention</h4>
                            <p>- Feed the dog cooked food, do not let it eat raw meat, 
                                regularly deworm the dog every 3-4 months and vaccinate against Care, Parvovirus.</p>
                            
                            
                        </div>
                     
                    </div>

                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>3. </span>  Bronchitis</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho3} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Due to infection with the following bacteria: Streptococcus (streptococcus), 
                                staphylococcus aureus (staphylococcus aureus) or parasitic infection, it can also be caused by weather, 
                                inhalation of dust, chemicals,... In addition to food and water Choking into the respiratory 
                                tract also causes bronchitis. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Cough, difficulty breathing especially in the morning, wheezing, crackles, or persistent watery eyes and nose.
                                Dogs may have a high fever, fatigue, loss of appetite, and coughing up mucus.</p>
                               
                            <h4>Treatment</h4>
                            <p> - Antibiotics and bronchodilators as well as anti-inflammatory drugs 
                                can be used to treat acute bronchitis in dogs.As for chronic bronchitis, 
                                anti-inflammatory and antitussive drugs will make your dog more comfortable.
                            </p>
                            
                            <h4>Prevention</h4>
                            <p>- Clean the dog's place, the place must be warm in the winter and cool in the summer. 
                                At the same time, it is necessary to vaccinate against vaccines: rabies, caraway, infectious hepatitis, 
                                cough for dogs to create a strong resistance for your pet.</p>
                            
                            
                        </div>
                     
                    </div>

                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>4. </span>Pneumonia</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho4} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Due to respiratory viruses or bacteria entering the dog's 
                                respiratory system such as: Pneumococcus, streptococcus, klebsiella, bordetella ... 
                                Or due to a larva of parasites in the bronchi such as: Filaroides, actu strongylus, 
                                paragonimus also cause pneumonia. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Fatigue, loss of appetite, high fever, red mucous membranes, 
                                frequent coughing at night and early morning, shortness of breath, dark red mouth, 
                                congestion, cyanosis or lying in one place, weakness and rapid and shallow breathing.</p>

                           

                               
                            <h4>Treatment</h4>
                            <p> - If your dog suddenly stops eating, loses water, has a high fever, ... should be hospitalized immediately.
                                Dogs with difficulty breathing or breathing, give the dog oxygen, intravenous fluids are needed
                                 to replenish water and electrolytes to rehydrate.
                                 </p>
                            
                            <h4>Prevention</h4>
                            <p>- Sanitize your pet and its environment to ensure that your pet has a clean, healthy space.

                        Next is to periodically vaccinate such as: Care, parvovirus, rabies, infectious hepatitis, lepto, ... 
                        Periodically deworming many times is also one of the effective ways to treat pneumonia.</p>
                            
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>5. </span>  Rabies</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho5} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Rabies can be transmitted when your dog is injured by other infected animals. 
                                Or another cause is due to the virus entering through an open, 
                                unhealed wound that is exposed to fluid or saliva containing Lyssavirus. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Unusual biting and barking in the early stages. The next stage when the dog becomes uncontrollable 
                                is also when the dog is in the most severe stage of rabies, 
                                it is easy to notice the dog's bad appearance such as delayed jaw, bloodshot eyes, drooling. 
                                and white foam.</p>

                           

                               
                            <h4>Treatment</h4>
                            <p> -There is no specific drug to treat rabies for dogs, when detecting signs of rabies, 
                                the dog should not be let loose, it should be promptly taken to a veterinary facility for examination.
                                 Disinfect the area around the dog suspected or infected with rabies (especially with saliva) diluted in a 
                                 ratio of 1:32 (150g / 4 liters) of household bleach solution.
                                 </p>
                            
                            <h4>Prevention</h4>
                            <p>- Routine rabies vaccination once a year from the time your dog is 3 months old.</p>
                            
                            
                        </div>
                     
                    </div>


                    <div className={cs['intro__wrap']}>
                        <div className={cs['intro__heading']}>
                            <h3> <span>6. </span>  Diarrhea, Vomiting</h3>
                        </div>
                        <img className={cs['intro__wrap-image']} src={cho6} alt=""/>
                        <div className={cs['intro__des1']}>
                            <h4>Cause</h4>
                            <p> - Due to abnormal eating such as eating too much meat, 
                                junk food is not good for the intestines, or it can also be caused by bacteria and germs in food. </p>
                            
                          
                            <h4>Symptom</h4>
                            <p> - Skipping food, lying in one place, easily nauseated, 
                                stools with an unpleasant fishy smell. Followed by abdominal pain, vomiting, bloody stools, fever, 
                                dehydration.</p>

                           

                               
                            <h4>Treatment</h4>
                            <p> - Give your dog water to drink crushed squid grass mixed with ½ bowl of water, ¼ teaspoon of salt to eat 2-5 
                                times a day, ¼ cup each time or you can use oresol diarrhea medicine, if you have free time, 
                                you can cook roasted rice porridge This also helps in treating diarrhea effectively.
                                 </p>
                            
                            <h4>Prevention</h4>
                            <p>- Do not let the dog have a hungry meal or a full meal to avoid disturbing the stomach 
                                and causing diarrhea. Bones, especially chicken bones, should not be given to puppies. 
                                In addition, you need to give your dog clean water to drink. Keep the living space clean and regularly 
                                vaccinated and dewormed periodically.</p>
                            
                            
                        </div>
                     
                    </div>


                </div>
            </div>
        </div>
    )
}