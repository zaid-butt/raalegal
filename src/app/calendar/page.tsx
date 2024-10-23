"use client"
import React from "react";
import { Header } from "../../components/components";
import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
    return (
        <>
        <Header />
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
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
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
