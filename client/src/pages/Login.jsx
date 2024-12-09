import React, { useState } from 'react'
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`http://localhost:9000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            let res = await response.json();
            if (res.success) {
                localStorage.setItem('auth', JSON.stringify(res));
                toast.success(res.message)
            } else {
                toast.error(res.message)
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-md-8 mx-auto">
                        <div className="card">
                            <h5 className="card-header">Register User</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default Login
