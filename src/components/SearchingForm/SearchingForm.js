import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useMarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import "./SearchingForm.scss";
import { NavLink } from "react-router-dom";

const SearchingForm = () => {
  const { getCharacterByName } = useMarvelAPI();
  const [character, setCharacter] = useState(null);

  return (
    <Formik
      validationSchema={Yup.object().shape({
        name: Yup.string().required("This field is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        setCharacter(null);
        getCharacterByName(values.name).then((res) => {
          setCharacter(res);
        });
        resetForm();
      }}
      initialValues={{
        name: "",
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <h2>Or find a character by name:</h2>
          <div className="formBlock">
            <Field name="name" placeholder="Enter name" />
            <button type="submit" className="form__btn">
              Submit
            </button>
          </div>

          {errors.name && touched.name ? (
            <div className="error">{errors.name}</div>
          ) : null}

          {!character ? null : character.length > 0 ? (
            <div className="form__result">
              <div className="found">
                There is! Visit {character[0].name} page?
              </div>
              <NavLink
                to= "/formCharacter"
                state={{charInfo: character}}
                className="form__result_btn"
              >
                TO PAGE
              </NavLink>
            </div>
          ) : character.length === 0 ? (
            <div className="error">There's no such character</div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default SearchingForm;
