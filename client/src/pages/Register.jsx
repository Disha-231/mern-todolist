import React, { useState } from 'react'
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !city || !contact) {
            toast.error("All field is required");
            return false;
        }
        try {
            let users = await fetch(`http://localhost:9000/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    city: city,
                    contact: contact
                })
            })
            const res = await users.json();
            if (res.success) {
                toast.success(res.message);
                navigate('/')
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
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                        <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
                                        <input type="text" className="form-control" onChange={(e) => setContact(e.target.value)} />
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

export default Register
