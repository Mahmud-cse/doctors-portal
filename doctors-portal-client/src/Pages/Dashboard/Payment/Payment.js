import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Jqbs3CiEmFXSM8z861DlPVP7KLNDFYeyNxcYvC8pCSkI5zi7kPcKy4wVo3HANCvUjkEbN9aEUpWrc3KfFkuuvEA00GMrQtVhx');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);

    return (
        <div>
            <h2>Please pay for:{appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;