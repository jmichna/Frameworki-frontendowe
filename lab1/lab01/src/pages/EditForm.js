import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppContext from '../data/AppContext';

const EditForm = () => {
  const { items, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const itemToEdit = items.find((item) => item.id === parseInt(id));

  const formik = useFormik({
    initialValues: {
      id: itemToEdit ? itemToEdit.id : '',
      name: itemToEdit ? itemToEdit.name : '',
      birth: itemToEdit ? itemToEdit.birth : '',
      eyes: itemToEdit ? itemToEdit.eyes : ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      birth: Yup.date().required('Required'),
      eyes: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required')
    }),
    onSubmit: (values) => {
      dispatch({
        type: 'edit',
        payload: {
          id: parseInt(id),
          updatedData: {
            name: values.name,
            birth: values.birth,
            eyes: values.eyes
          }
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Edit Person</h2>

      <input type="hidden" name="id" value={formik.values.id} />

      <label>
        Name:
        <input
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </label>
      <br />

      <label>
        Birth Date:
        <input
          type="date"
          {...formik.getFieldProps('birth')}
        />
        {formik.touched.birth && formik.errors.birth ? (
          <div className="text-danger">{formik.errors.birth}</div>
        ) : null}
      </label>
      <br />

      <label>
        Eye Color:
        <input
          type="text"
          {...formik.getFieldProps('eyes')}
        />
        {formik.touched.eyes && formik.errors.eyes ? (
          <div className="text-danger">{formik.errors.eyes}</div>
        ) : null}
      </label>
      <br />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditForm;