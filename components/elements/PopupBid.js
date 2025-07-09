'use client'
import { useState } from "react"
import Link from "next/link"

export default function PopupBid({ isConnect, handleConnect }) {
    const [tab, setTab] = useState('login')

    return (
        <>
            <div className={`modal fade popup ${isConnect ? "d-block show" : ""}`} id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="close icon" onClick={handleConnect} aria-label="Close">
                            <img src="/assets/images/backgroup/bg_close.png" alt="Close" />
                        </div>

                        <div className="header-popup text-center">
                            <div className="tab-header">
                                <button
                                    className={`tab-btn ${tab === 'login' ? 'active' : ''}`}
                                    onClick={() => setTab('login')}
                                >Login</button>
                                <button
                                    className={`tab-btn ${tab === 'register' ? 'active' : ''}`}
                                    onClick={() => setTab('register')}
                                >Register</button>
                            </div>
                        </div>

                        <div className="modal-body center">
                            {tab === 'login' ? (
                                <form className="form-auth">
                                    <div className="form-group">
                                        <label htmlFor="loginEmail">Email</label>
                                        <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginPassword">Password</label>
                                        <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" />
                                    </div>
                                    <button type="submit" className="tf-button style2 w-full mt-3">Login</button>
                                </form>
                            ) : (
                                <form className="form-auth">
                                    <div className="form-group">
                                        <label htmlFor="regName">Full Name</label>
                                        <input type="text" className="form-control" id="regName" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regEmail">Email</label>
                                        <input type="email" className="form-control" id="regEmail" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regPassword">Password</label>
                                        <input type="password" className="form-control" id="regPassword" placeholder="Enter password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="wallet">Wallet Link</label>
                                        <input type="url" className="form-control" id="wallet" placeholder="https://wallet-link.com/yourwallet" />
                                    </div>
                                    <button type="submit" className="tf-button style2 w-full mt-3">Register</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isConnect &&
                <div className="modal-backdrop fade show" onClick={handleConnect} />
            }
        </>
    )
}
