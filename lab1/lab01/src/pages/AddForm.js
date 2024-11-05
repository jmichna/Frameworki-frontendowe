import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';

const AddForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [eyes, setEyes] = useState('');
  const [errors, setErrors] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = [];

    if (name.length < 2 || name.length > 20) {
      validationErrors.push("Name must be between 2 and 20 characters.");
    }
    if (!birth) {
      validationErrors.push("Birth date is required.");
    }
    if (eyes.length < 3 || eyes.length > 15) {
      validationErrors.push("Eye color must be between 3 and 15 characters.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 10000) + 1,
      name,
      birth,
      eyes,
    };
    dispatch({ type: 'add', payload: newItem });

    setName('');
    setBirth('');
    setEyes('');
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Person</h2>
      
      {errors.length > 0 && (
        <div className="text-danger">
          {errors.map((error, index) => <p key={index}>{error}</p>)}
        </div>
      )}

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="20"
          required
        />
      </label>
      <br />
      <label>
        Birth Date:
        <input
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Eye Color:
        <input
          type="text"
          value={eyes}
          onChange={(e) => setEyes(e.target.value)}
          maxLength="15"
          required
        />
      </label>
      <br />
      <button type="submit" disabled={isSending}>Add Person</button>
    </form>
  );
};

export default AddForm;