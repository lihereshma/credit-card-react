import React, { useState } from 'react';
import './App.css';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

toast.configure()

function App() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  const handleSubmit = (e) => {
    if(number === '' || name === '' || expiry === '' || cvc === '') {
      toast.error("All fields required.", { position: toast.POSITION.TOP_CENTER, autoClose: false })
    } else {
      toast.success("Submitted Successfully.", { position: toast.POSITION.TOP_CENTER, autoClose: false })
    }
    e.preventDefault();
  }

  const handleReset = (e) => {
    setNumber('')
    setName('')
    setExpiry('')
    setCvc('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="credit-card col-md-5">
          <Cards 
            number = { number }
            name = { name }
            expiry = { expiry }
            cvc = { cvc }
            focused = { focus }
          />
        </div>
      
        <form onSubmit={ handleSubmit } onReset={ handleReset } className="col-md-5">
          <div className="form-group">
            <label htmlFor="number">card number</label>
            <input 
              type='tel' 
              className="form-control"
              name='number' 
              placeholder='Number' 
              value={ number } 
              maxLength = '16'
              onChange={ e => setNumber(e.target.value)} 
              onFocus={ e => setFocus(e.target.name)}
            />
          </div>
            
          <div className="form-group">
            <label htmlFor="name">card holder name</label>
            <input 
              type='text' 
              className="form-control"
              name='name' 
              placeholder='Name' 
              value={ name } 
              onChange={ e => setName(e.target.value)} 
              onFocus={ e => setFocus(e.target.name)}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="expiry">expiration date</label>
              <input 
                type='tel' 
                className="form-control"
                name='expiry' 
                placeholder='MM/YY' 
                value={ expiry } 
                onChange={ e => setExpiry(e.target.value)} 
                onFocus={ e => setFocus(e.target.name)}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="cvc">security code</label>
              <input 
                type='tel'
                className="form-control" 
                name='cvc' 
                placeholder='cvc' 
                value={ cvc } 
                onChange={ e => setCvc(e.target.value)} 
                onFocus={ e => setFocus(e.target.name)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-sm mr-2">Submit</button>
          <button type="reset" className="btn btn-secondary btn-sm">Reset</button>
        </form>
      </div>      
    </div>
  );
}

export default App;
