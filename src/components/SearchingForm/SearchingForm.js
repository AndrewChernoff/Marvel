import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import useMarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';
import './SearchingForm.scss';

const SearchingForm = () => {

    const { getCharacterByName } = useMarvelAPI();


    return <Formik
        validationSchema={Yup.object().shape({
            name: Yup.string().required('This field is required')
        })}
        onSubmit={(values, { resetForm }) => {
            console.log(values);
            getCharacterByName(values.name).then(res => console.log(res))
            resetForm()
        }}

        initialValues={{
            name: ''
        }}
    >
        {({ errors, touched }) => (
            <Form className='form'>
                <h2>Or find a character by name:</h2>
                <div className='formBlock'>
                    <Field name="name" placeholder='Enter name' />
                    <button type="submit" className='form__btn'>Submit</button>
                </div>

                {errors.name && touched.name ? (
                    <div className='error'>{errors.name}</div>
                ) : null}
                {/* <ErrorMessage name="name" className='error' /> */}

            </Form>
        )}
    </Formik>
}

export default SearchingForm;