import React, { useRef } from 'react'

function Signup() {

let firstNameInputRef = useRef();
let lastNameInputRef = useRef();
let ageInputRef = useRef();
let emailInputRef = useRef();
let passwordInputRef = useRef();
let mobileNoInputRef = useRef();
let profilePicInputRef = useRef();

let onSignupUsingJSON = async ()=>{

    let dataToSend = {
        firstName:firstNameInputRef.current.value,
        lastName:lastNameInputRef.current.value,
        age:ageInputRef.current.value,
        email:emailInputRef.current.value,
        password:passwordInputRef.current.value,
        mobileNo:mobileNoInputRef.current.value,

    };

    console.log(dataToSend);

     let dataToSendJSON = JSON.stringify(dataToSend);
     console.log(dataToSendJSON);


     let myHeaders = new Headers();
     myHeaders.append("content-type","application/json");


    let reqOptions = {
    method:"POST",
    body: dataToSendJSON,
    headers: myHeaders,

};

let JSONData = await fetch("http://localhost:2222/signup",reqOptions);

let JSOData = await JSONData.json();
console.log(JSOData);

};

  return (
    <div>
        <form>
            <h2>Sign Up</h2>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Age</label>
                <input ref={ageInputRef}></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Mobile No</label>
                <input ref={mobileNoInputRef}></input>
            </div>
            <div>
                <label>Profile Pic</label>
                <input ref={profilePicInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    onSignupUsingJSON();
                }}>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default Signup