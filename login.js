

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

  if (isLoggedIn) {
    return <Redirect to='/home' />
  }


  );

}

export default LoginPage;
