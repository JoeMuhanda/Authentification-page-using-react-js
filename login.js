

function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setIsLoggedIn(true);
    } else {
      setError('Password must be at least 6 characters long and contain at least one symbol');
    }
  }

  i
    <div>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
      <Footer />
    </div>

  );

}

export default LoginPage;
