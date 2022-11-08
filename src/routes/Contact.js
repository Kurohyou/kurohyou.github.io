import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

import './Contact.scss';

function Contact(){
  const textRef = useRef(null)
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ topic, setTopic ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ sent, setSent ] = useState(false);
  const [ processing, setProcessing ] = useState(false);

  const [ textHeight, setTHeight ] = useState(1);
  
  const stores = {
    name: { value:name, set:setName },
    email: { value:email, set:setEmail },
    topic: { value:topic, set:setTopic },
    message: { value:message, set:setMessage }
  };

  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    if(sent || !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)) return;
    setProcessing(true)
    const data = {
      name,
      email,
      message,
      topic
    };
    // Send email
    const response = await emailjs.send(
      'portfolio_service',
      'template_k679c04',
      data,
      'jbHmTftgxaO1-3OKg'
    );
    setSent(true);
    setProcessing(false);
  };

  /**
   * Stores the form input values in the state
   * @param {ReactEvent} event - The event passed by react
   */
  const handleFormInput = (event) => {
    const storeObj = stores[event.target.id];
    storeObj.set(event.target.value);
  };

  useEffect(()=>{
    textRef.current.style.height = '0px';
    const scrollHeight = textRef.current.scrollHeight;
    textRef.current.style.height = `${scrollHeight}px`;
  },[message])

  return (
    <section className='contact-section' aria-labelledby="contact-header">
      <h3 id="contact-header">Contact Me</h3>
      <p>Got a tabletop RPG that you want to digitize? Need a website? Send me the details and I'll be happy to discuss it with you.</p>
      <form onInput={handleFormInput} onSubmit={handleFormSubmit}>
        <div className="shadow-container">
          <div className="form-control octagon">
            <input name="name" type="text" className="input" id="name" required/>
            <label htmlFor="name" className="label">your name</label>
          </div>
        </div>
        <div className="shadow-container">
          <div className="form-control octagon">
            <input name="email" type="email" className="input" id="email" required />
            <label htmlFor="email" className="label">email</label>
          </div>
        </div>
        <div className="shadow-container">
          <div className="form-control octagon">
            <select id="topic" className="select">
              <option value="">select one</option>
              <option value="roll20">roll20 project</option>
              <option value="web design">web design project</option>
              <option value="employment">employment opportunities</option>
              <option value="general questions">general questions</option>
            </select>
            <label htmlFor="topic" className="label">topic</label>
          </div>
        </div>
        <div className="shadow-container">
          <div className="form-control octagon form-control--stacked">
            <label htmlFor="message" className="label">message</label>
            <textarea ref={ textRef } className='input input--textarea' id="message" required></textarea>
          </div>
        </div>
        <div className="shadow-container">
          <button className={`octagon btn input${processing ? ' loading' : ''}`} type="submit" disabled={processing || sent}>
            <span style={{placeSelf:'center'}}>
              {
                processing ?
                  '' :
                  !sent ?
                    'send' :
                    'message sent'
              }
            </span>
          </button>
        </div>
      </form>
    </section>
  )
};
export default Contact;