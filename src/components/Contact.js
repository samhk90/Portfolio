import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tspfgkdycobywmywxfrw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcGZna2R5Y29ieXdteXd4ZnJ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTkyNDgyMiwiZXhwIjoyMDExNTAwODIyfQ.qdpDpv5ZyUNP8GzVa9CbH4jZj3ujrlC5NjJccXGhPao';
const supabase = createClient(supabaseUrl, supabaseKey);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('contact')
      .insert([{ name, email, message }]);

    if (error) {
      setStatus('Error submitting form. Please try again.');
    } else {
      setStatus('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact-container">
      <h2 className='px-5'>Contact Me</h2>
      <div className="row p-5">

        <div className="col-sm-6 p-3 contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
          {status && <p>{status}</p>}
        </div>
        <div className="col-sm-6 mx-2 contact-details">
          <p>Email: mdsami9022@gmail.com</p>
          <p>Phone: +91 9022094510</p>
          <p>Address: Pune,India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
