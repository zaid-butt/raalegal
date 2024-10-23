"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputPassValue, setInputPassValue] = useState<string>('');

    const [errorMsg, setErrorMsg] = useState("");
    

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === "ztest@test.com" && inputPassValue === "abcd" ){
        window.location.href = "/calendar"
    } else {
        setErrorMsg('incorrect email or password');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassValue(event.target.value);
  };


    return (
        <>
        <div className="sticky">
        <small className="useemail">Credentials.</small>
        <p className="small">
            Email: ztest@test.com <br/>
            Password: abcd
        </p>
        </div>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: "22rem" }}>
                <h3 className="text-center mb-4">
                    <Image
                        src="/RAA-Logo.png"
                        width={204}
                        height={72}
                        alt="logo"
                    />
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" value={inputValue} onChange={handleInputChange} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={inputPassValue} onChange={handlePassChange} />
                    </div>

                    <span className="error_Msg">{errorMsg}</span>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center mt-3">
                        <a href="#0">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
