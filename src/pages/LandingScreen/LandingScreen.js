class LandingScreen {
  constructor() {}

  render() {
    return (
      <div>
        <h1>Welcome To Landing Screen</h1>
        <p>Username:</p>
        <input
          type="text"
          onChange={(event) => this.setState({ username: event.target.value })}
          value={this.state.username}
        />
        <p>Password:</p>
        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
          value={this.state.password}
        />
        <br />
        <input
          style={{ fontFamily: "Helvetica" }}
          type="submit"
          value="Log In"
        />
      </div>
    );
  }
}

export default LandingScreen;
