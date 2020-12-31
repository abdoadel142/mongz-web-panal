import React, { useRef, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../components/Contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to Signup in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Signup</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-group">
              <label htmlFor="email">Enter Email</label>
              <input
                id="email"
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter Password</label>
              <input
                id="password"
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Confirm password">Enter Password</label>
              <input
                id="password"
                type="password"
                ref={confirmPasswordRef}
                name="confirmPassword"
                placeholder="confirmPassword"
                required
              />
            </div>
            <input type="submit" value="Login" disabled={loading} />
          </div>
        </form>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
