import { useState, useEffect } from 'react';
import Input from '../Input';
import Textarea from '../Textarea';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((pre) => {
      return { ...pre, [name]: value };
    });
  };

  useEffect(() => {
    const { name, email } = values;
    if (name.length > 0) {
      setError((pre) => {
        return { ...pre, name: 'Name is required' };
      });
    }
    if (email.length > 0) {
      setError((pre) => {
        return { ...pre, email: 'Email is required' };
      });
    }
    if (message.length > 0) {
      setError((pre) => {
        return { ...pre, message: 'Message is required' };
      });
    }
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setFilled(true);
    }
  }, [values]);

  const handleSubmit = () => {
    console.log(values, error);
    // send if by mail or text to tal
  };

  return (
    <div className="bg-white rounded p-4">
      <div className="text-center">
        <h3>צור קשר!</h3>
        <p>תשאיר פרטים אחזור אליך בהקדם</p>
      </div>
      <div className="md:border-2 border-red-500 md:flex md:mb-2">
        <div className="md:flex-1">
          <Input
            label="שם"
            value={values.name}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
          <Input
            label="איימיל"
            type="email"
            value={values.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="border-2 border-sand-200 md:flex-1 md:mr-4">
          <Textarea
            label="הודעה"
            type="text"
            value={values.message}
            id="message"
            name="message"
            // col="33"
            // row="10"
            className="h-full"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        disabled={filled}
        onClick={handleSubmit}
        className={`w-full ${
          filled
            ? 'border-orange-400 bg-orange-400 text-sand-100'
            : 'border-gray-400 bg-gray-400 text-sand-100'
        }  border-2 rounded  text-lg font-bold mt-2`}
      >
        שלח
      </button>
    </div>
  );
};

export default ContactForm;
