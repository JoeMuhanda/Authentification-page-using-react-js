import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegistrationPage() {
  const { register, handleSubmit, errors } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = data => {
    // handle registration logic here
    setIsRegistered(true);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return {
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      {isRegistered ? (
        <Redirect to="/registration" />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && <p>This field is required</p>}
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              ref={register({
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
              })}
              onChange={handlePasswordChange}
            />
            {errors.password && <p>Password must be at least 6 characters with one letter, one number, and one special character</p>}
          </label>
          <br />
          <input type="submit" value="Register" />
        </form>
      )}
      <footer>Copyright © {new Date().getFullYear()}</footer>
    </div>

  )
}
export default RegistrationPage;
