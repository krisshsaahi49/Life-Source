import React from 'react';
import CustomNavbar from '../CustomNavbar';

const PrivacyPolicy = () => {
    return (
            <div className="body_wrapper">
                <CustomNavbar
                    mClass="menu_four hosting_menu"
                    nClass="w_menu m-auto"
                    slogo="sticky_logo"
                    hbtnClass="event_btn"
                />

                <div id = "Terms">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Privacy Policy</h1>
                    <p>We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information when you use our blood donation website.</p>
                    <ol>
                        <li>
                            <strong>1. Information We Collect</strong>
                            <p> We collect personal information that you voluntarily provide to us when you register as a blood donor or make a blood donation. This may include your name, contact information, blood type, and other medical information relevant to the donation process.
                                We also collect certain information automatically when you use our website, such as your IP address, browser type, and operating system. This information helps us analyze how our website is being used and improve its functionality.</p>
                        </li>
                        <li>
                            <strong>2. Use of Your Information</strong>
                            <p>We use your personal information to facilitate the blood donation process, including contacting you to schedule blood donation appointments and providing you with information about blood donation.
                                We may also use your personal information to improve our website, communicate with you about our services, and comply with legal obligations.
                                We do not sell, trade, or rent your personal information to third parties.</p>
                        </li>
                        <li>
                            <strong>3. Disclosure of Your Information</strong>
                            <p>We may disclose your personal information to third-party service providers who assist us with the operation of our website and the blood donation process, such as appointment scheduling and laboratory testing.
                                We may also disclose your personal information if required by law, such as in response to a court order or subpoena.</p>
                        </li>
                        <li>
                            <strong>4. Security of Your Information</strong>
                            <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.</p>
                        </li>
                        <li>
                            <strong> 5. Retention of Your Information</strong>
                            <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.</p>
                        </li>
                        <li>
                            <strong>6. Your Rights</strong>
                            <p>You have the right to access, correct, and delete your personal information. You may also have the right to object to the processing of your personal information, restrict its processing, or request its portability.
                                To exercise these rights or for any questions or concerns about our privacy practices, please contact us using the contact information provided on our website.</p>
                        </li>
                        <li>
                            <strong>7. Changes to this Privacy Policy</strong>
                            <p>We may update this privacy policy from time to time to reflect changes in our information practices. We will post any changes to our website and indicate the date of the most recent update.</p>
                        </li>
                        <li>
                            <strong>8. Governing Law</strong>
                            <p>This privacy policy shall be governed by and construed in accordance with the laws of [insert governing law]. Any disputes arising out of or in connection with this privacy policy shall be subject to the exclusive jurisdiction of the courts of [insert jurisdiction].</p>
                        </li>
                    </ol>
                    <br />
                    <p>Thank you for reading our privacy policy. By using our website, you consent to the collection, use, and disclosure of your personal information as described in this privacy policy.</p>
                        <br />
                        <br />
                        <br />
                </div>

            </div>
            );
};
            export default PrivacyPolicy;
