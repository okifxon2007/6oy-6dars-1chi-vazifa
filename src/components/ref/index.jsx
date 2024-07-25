import React, { useState, useRef } from 'react';
import '../ref/index.css';

const InputRef = () => {
  const nameRef = useRef('');
  const lastRef = useRef('');
  const emailRef = useRef('');
  const companyRef = useRef('');
  const monthRef = useRef('');
  const dayRef = useRef('');
  const yearRef = useRef('');

  function validates() {
    const refs = [nameRef, lastRef, emailRef, companyRef, monthRef, dayRef, yearRef];
    for (let i = 0; i < refs.length; i++) {
      if (!refs[i].current.value) {
        alert('Barcha maydonlarni toldiring');
        return false;
      }
    }
    return true;
  }

  function handlsave(e) {
    e.preventDefault();
    if (!validates()) {
      return;
    }

    const logref = {
      name: nameRef.current.value,
      last: lastRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      month: monthRef.current.value,
      day: dayRef.current.value,
      year: yearRef.current.value
    };

    localStorage.setItem('logref', JSON.stringify(logref));
    console.log(logref);
  }

  return (
    <div>
      <div className="box">
        <div className="boxing">
          <h1>Online Registration</h1>
          <div className="onein">
            <form>
              <div className="oneini">
                <label>First name</label> <br />
                <input ref={nameRef} type="text" placeholder='Firstname' />
              </div>
              <div className="oneini">
                <label>Last name</label> <br />
                <input ref={lastRef} type="text" placeholder='Lastname' />
              </div>
            </form>
          </div>
          <div className="twoin">
            <label>Email address</label> <br />
            <input ref={emailRef} type="email" placeholder='Email' /> <br />
            <label>Company</label> <br />
            <input ref={companyRef} type="text" placeholder='Company' />
          </div>
        </div>
        <div className="datebirth">
          <label>Date of Birth</label>
          <div className="datedf">
            <input ref={monthRef} type="text" placeholder='Month' />
            <input ref={dayRef} type="number" placeholder='Day' />
            <input ref={yearRef} type="number" placeholder='Year' />
          </div>
        </div>
        <button onClick={handlsave} className='but'>Save</button>
      </div>
    </div>
  );
};

export default InputRef;
