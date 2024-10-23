"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
    const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    //alert(`Form submitted with: ${inputValue}`);
    // Process the form data here
    if (inputValue === "ztest@test.com"){
       alert(`email is fine`);
    } else {
        alert(`Form submitted with: ${inputValue}`);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


    return (
        <>
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
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={inputValue} onChange={handleInputChange} />
                        <small className="useemail">Use this email ztest@test.com</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
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
