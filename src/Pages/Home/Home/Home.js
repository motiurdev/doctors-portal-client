import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;