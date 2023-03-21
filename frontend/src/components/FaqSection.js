import React from 'react';

const FaqSection =()=>{
    return(
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr_50">
                        <div className="faq_tab">
                            <h4 className="f_p t_color3 f_600 f_size_22 mb_40">Quick Navigation</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="purchas-tab" data-toggle="tab" href="#purchas" role="tab" aria-controls="purchas" aria-selected="true">Blood Donation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="returns-tab" data-toggle="tab" href="#returns" role="tab" aria-controls="returns" aria-selected="false">Donors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#price" role="tab" aria-controls="price" aria-selected="false">Recepients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="care-tab" data-toggle="tab" href="#care" role="tab" aria-controls="care" aria-selected="false">Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="purchas" role="tabpanel" aria-labelledby="purchas-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Blood donation</h3>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Who is eligible to donate blood?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                            To donate blood, you must be at least 17 years old (or 16 years old with parental consent in some states), weigh at least 110 pounds, be in good health, and meet other eligibility criteria. Some restrictions may apply based on factors such as recent travel, medications, and medical conditions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How often can I donate blood?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                            In most cases, you can donate blood every 56 days (or 8 weeks). This allows your body enough time to replenish the blood cells that were donated.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How long does the blood donation process take?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                            The entire process, including registration, screening, donation, and refreshments, typically takes about an hour.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                How is donated blood used?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                            Donated blood is used to help patients who have lost blood due to surgery, accidents, or medical conditions such as cancer and anemia. Blood can also be used to treat blood disorders and to support patients undergoing chemotherapy and other medical treatments.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                Is it safe to donate blood during the COVID-19 pandemic?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                            <div className="card-body">
                                            Yes, it is safe to donate blood during the pandemic. Blood donation centers are following strict safety protocols, such as requiring face masks, social distancing, and frequent disinfection of surfaces and equipment. Donors are also screened for COVID-19 symptoms and potential exposure before donation.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="tab-pane fade" id="returns" role="tabpanel" aria-labelledby="returns-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Donor</h3>
                                <div id="accordion3">
                                    <div className="card">
                                        <div className="card-header" id="heading10">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
                                                What should I do to prepare for blood donation?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse10" className="collapse show" aria-labelledby="heading10" data-parent="#accordion3">
                                            <div className="card-body">
                                            To prepare for blood donation, drink plenty of fluids, eat a nutritious meal, and get a good night's sleep. Avoid alcohol and caffeine before donation, and bring a photo ID and a list of any medications you are currently taking.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading11">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                Can I donate blood if I have a tattoo or piercing?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion3">
                                            <div className="card-body">
                                            Depending on the country and the organization where the blood donation is taking place, you may be asked to wait for a certain period after getting a tattoo or piercing before you can donate blood.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading12">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                Will donating blood affect my athletic performance?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordion3">
                                            <div className="card-body">
                                            Generally, donating blood will not significantly affect athletic performance. However, it is recommended to avoid strenuous exercise or heavy lifting for a few hours after donating.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading13">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                Will donating blood affect my job or daily activities?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion3">
                                            <div className="card-body">
                                            Donating blood should not affect your job or daily activities. However, it is recommended to avoid driving or operating heavy machinery immediately after donating.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading14">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                Will donating blood hurt?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordion3">
                                            <div className="card-body">
                                            You may feel a pinch when the needle is inserted, but the actual donation process is relatively painless. Most donors feel fine after donating blood, although some may experience mild dizziness or lightheadedness.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="price" role="tabpanel" aria-labelledby="price-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Recipient</h3>
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="heading15">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15">
                                                What types of blood transfusions are available?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse15" className="collapse show" aria-labelledby="heading15" data-parent="#accordion4">
                                            <div className="card-body">
                                            There are several types of blood transfusions, including whole blood, red blood cells, platelets, and plasma. The type of transfusion required depends on the medical condition of the patient.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading16">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                Is there a risk of infection from a blood transfusion?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordion4">
                                            <div className="card-body">
                                            The risk of infection from a blood transfusion is very low. All donated blood is tested for infectious diseases before being used in a transfusion.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading17">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                How long does a blood transfusion take?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordion4">
                                            <div className="card-body">
                                            The length of a blood transfusion can vary depending on the type of transfusion and the medical condition of the patient. A simple transfusion of red blood cells usually takes 2-4 hours.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading18">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                What are the risks of a blood transfusion?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordion4">
                                            <div className="card-body">
                                            The risks of a blood transfusion are very low. However, there is a small risk of a transfusion reaction, which can cause fever, chills, and shortness of breath. In rare cases, a transfusion reaction can be life-threatening.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading19">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                Can I receive blood from someone who is not a family member or a blood type match?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordion4">
                                            <div className="card-body">
                                            In some cases, a blood transfusion from a non-family member or a blood type mismatch may be necessary. However, the medical team will carefully consider the risks and benefits before proceeding with the transfusion. In some cases, special measures such as cross-matching may be used to ensure compatibility between the donor and recipient.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Website</h3>
                                <div id="accordion6">
                                    <div className="card">
                                        <div className="card-header" id="heading24">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24">
                                                How do I find a blood donation center or blood drive near me?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse24" className="collapse show" aria-labelledby="heading24" data-parent="#accordion6">
                                            <div className="card-body">
                                            Most blood donation websites have a location search feature where you can enter your zip code or city to find blood donation centers or blood drives near you. You can also contact the blood donation organization in your area for information on donation sites and events.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading25">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                Do I need an appointment to donate blood?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordion6">
                                            <div className="card-body">
                                            It depends on the blood donation center or organization. Some may accept walk-ins, while others require an appointment. It is recommended to check the blood donation website or contact the center or organization to find out their specific requirements.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading26">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                How do I schedule a blood donation appointment?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion6">
                                            <div className="card-body">
                                            Our blood donation websites allow you to schedule an appointment online. Simply select the date, time, and location that works best for you. You can also call the blood donation center or organization to schedule an appointment.
                                           </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading27">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                Can I reschedule or cancel my blood donation appointment?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordion6">
                                            <div className="card-body">
                                            Yes, most blood donation websites allow you to reschedule or cancel your appointment online. Simply log in to your account and select the option to reschedule or cancel. You can also contact the blood donation center or organization to make changes to your appointment.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading28">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                What should I bring with me to my blood donation appointment?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordion6">
                                            <div className="card-body">
                                            It is recommended to bring a government-issued photo ID, such as a driver's license or passport. You may also need to provide your social security number or other personal information. It is recommended to check the blood donation website or contact the center or organization to find out their specific requirements.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqSection;