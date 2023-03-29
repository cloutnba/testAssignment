import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please, enter your first name'),
    lastName: Yup.string().required('Please, enter your last name'),
    phone: Yup.string()
        .matches(/^\+?\d{10,12}$/, 'Please, enter correct phone number')
        .required('Please, enter correct phone number'),
    email: Yup.string()
        .email('Please, enter correct email')
        .required('Please, enter correct email'),
    message: Yup.string().required('Please, enter your message'),
    radio: Yup.string().required("It's required"),

})