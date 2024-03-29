import { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error,setError] = useState('');
    const {signIn,googleLogin} = useContext(AuthContext);
    const location = useLocation();
    //console.log('login page',location)
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
           const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            
            navigate(from, { replace: true })
        })
        .catch(error=>{
            
        setError(error.message)
        })
        form.reset();
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error=>console.log(error))
    }
    
    return (
        <div>
            <Container className='w-25 mx-auto'>

                <h3>Please Login</h3>
                <form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account <Link className='text-info' to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </form>
                <p className='text-danger'>{error}</p>
                <button onClick={handleGoogleLogin} className='mb-2 mt-2' variant="outline-info"> <FaGoogle></FaGoogle> Login with Google</button>
            </Container>
        </div>
    );
};

export default Login;