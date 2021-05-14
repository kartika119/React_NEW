import React, { useState } from 'react';
import './About.css';

const Form = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [Items, setItems] = useState([]);

  const changeHandle = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitHandle = e => {
    e.preventDefault()
    console.log(inputs)
  }

  const listofUsers = () => {
    setItems((oldUser) => {
      return [...oldUser, inputs];
    },
    //setInputs("")

    );


}

const deleteItems=(id)=>{
console.log("byeb");

// setItems((oldUser)=>
// {
//   return oldUser.filter((arrElem,index)=>{
//     return index!==id;
//   })

// });
}


  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" value={inputs.name} onChange={changeHandle} />
        <input type="email" name="email" value={inputs.email} onChange={changeHandle} />
        <input type="number" name="phone" value={inputs.phone} onChange={changeHandle} />


        <button type="submit" onClick={listofUsers}>Submit</button>


      </form>


      <div>
        {Items.map((itemval) => {
          return (
            <>
              <div className="user_div">
               
                <p>{itemval.name}</p>
                <p>{itemval.email}</p>
                <p>{itemval.phone}</p>
                <button   onClick={deleteItems}> delete </button>
                </div>
             

            </>
          )
        })}
      </div>




    </>
  );
}

export default Form;