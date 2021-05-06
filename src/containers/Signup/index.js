import "./style.signup.scss";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("hello");
};

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Sign up</h2>
        <form
          action="#"
          className="signup-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            placeholder="username"
            className="signup-form-input"
          />
          <input
            type="email"
            placeholder="email adress"
            className="signup-form-input"
          />
          <input
            type="password"
            placeholder="password"
            className="signup-form-input"
          />
        </form>
        <input type="submit" value="Validate" className="signup-form-submit" />
      </div>
    </div>
  );
};

export default Signup;
