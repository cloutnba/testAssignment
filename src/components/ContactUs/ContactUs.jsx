
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {ReactComponent as DiscordIcon} from "./icons/discord-icon-svgrepo-com.svg";
import {useFormik} from 'formik';
import './ContactUs.scss';
import {TextField} from "@mui/material";

import {validationSchema} from "./validationSchema";
import {useState} from "react";
import Contacts from "../Contacts/Contacts";

const ContactUs = () => {

    // I used formik for controlled component
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
            radio: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values,{ resetForm }) => {
            console.log(values);
            resetForm();
        },
    });



    return (
        <section className="contact-us">
            <div className="container">
                <div className="contact-us__wrapper">
                    <div className="contact-us__title-wrapper">
                        <h2 className="contact-us__title title">Contact Us</h2>

                        <div className="contact-us__desc-wrapper">
                            <p className="contact-us__desc">Any question or remarks? Just write us a message!</p>
                        </div>
                    </div>

                    <div className="contact-us__form-wrapper">
                        <div className="contact-us__form-info">
                            <h4 className="contact-us__form-title">Contact Information</h4>
                            <div className="contact-us__form-desc">Say something to start a live chat!</div>
                            <div className="contact-us__contacts">
                                <Contacts componentOwner="contact-us"/>
                            </div>


                            <div className="contact-us__form-pages">
                                <div className="contact-us__form-page">
                                    <TwitterIcon className="contact-us__form-page-icon"/>
                                </div>

                                <div className="contact-us__form-page">
                                    <InstagramIcon className="contact-us__form-page-icon"/>
                                </div>

                                <div className="contact-us__form-page">
                                    <DiscordIcon className="contact-us__form-page-icon"/>
                                </div>
                            </div>

                            <div className="first-eclipse"></div>
                            <div className="second-eclipse"></div>
                        </div>
                        <div className="contact-us__form-fields">
                                <form className="contact-us__form-inputs" onSubmit={formik.handleSubmit}>
                                    <TextField
                                        name="firstName"
                                        id="standard-basic"
                                        label="First Name"
                                        variant="standard"
                                        type="text"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    />
                                    <TextField
                                        name="lastName"
                                        id="standard-basic"
                                        label="Last Name"
                                        variant="standard"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                    />

                                    <TextField
                                        name="email"
                                        id="standard-basic"
                                        type="email"
                                        label="Email"
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                    <TextField
                                        name="phone"
                                        id="standard-basic"
                                        label="Phone Number"
                                        variant="standard"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                    />


                                    <div className="contact-us__radio-btns-container">
                                        <h4 className="radio-title">Select Subject?</h4>
                                        <div className="contact-us__radio-btns" >
                                            <label className="radio-container">
                                                <input
                                                    name="radio"
                                                    type="radio"
                                                    value="option1"
                                                    checked={formik.values.radio === 'option1'}
                                                    onChange={formik.handleChange}
                                                    className="radio-button"
                                                />
                                                General Inquiry
                                            </label>

                                            <label className="radio-container">
                                                <input
                                                    name="radio"
                                                    type="radio"
                                                    value="option2"
                                                    checked={formik.values.radio === 'option2'}
                                                    onChange={formik.handleChange}
                                                    className="radio-button"
                                                />
                                                General Inquiry
                                            </label>

                                            <label className="radio-container">
                                                <input
                                                    name="radio"
                                                    type="radio"
                                                    value="option3"
                                                    checked={formik.values.radio === 'option3'}
                                                    onChange={formik.handleChange}
                                                    className="radio-button"
                                                />
                                                General Inquiry
                                            </label>

                                            <label className="radio-container">
                                                <input
                                                    name="radio"
                                                    type="radio"
                                                    value="option4"
                                                    checked={formik.values.radio === 'option4'}
                                                    onChange={formik.handleChange}
                                                    className="radio-button"
                                                />
                                                General Inquiry
                                            </label>
                                        </div>
                                        {formik.touched.radio && formik.errors.radio && (
                                            <div className="error">{formik.errors.radio}</div>
                                        )}
                                    </div>

                                    <TextField
                                        name="message"
                                        id="standard-basic"
                                        label="Message"
                                        placeholder="Write your message.."
                                        variant="standard"
                                        type="text"
                                        className="form-message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                        helperText={formik.touched.message && formik.errors.message}
                                    />

                                    <button type="submit" className="submit-btn">Send Message</button>
                                </form>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;