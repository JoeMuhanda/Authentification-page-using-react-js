
  }

  if (isLoggedIn) {
    return <Redirect to='/home' />
  }

  return (
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
