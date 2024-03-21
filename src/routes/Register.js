import React, { useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/header/Navbar";

const Register = () => {
    const [firstName, setFristName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://localhost:7027/api/users/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    username: username,
                    password: password,
                    role: role
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Store the user ID in session storage
            sessionStorage.setItem('userId', data.id);
            toast.success('User registered successfully!');
            console.log(data); // Log the response data if needed
            // Redirect to homepage after successful registration
            navigate('/login')
        } catch (error) {
            toast.error('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="row">
     <Navbar />
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={handleRegister} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Registration</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>firstName</label>
                                <input
                                    type="firstName"
                                    value={firstName}
                                    onChange={(e) => setFristName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>lastName</label>
                                <input
                                    type="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;