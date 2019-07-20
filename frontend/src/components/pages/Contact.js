import React from 'react';
import Server from '../../api/Server';


class Contact extends React.Component {
  state = { token: '', name: 'test', email: 'test', message: 'test' };

  inputChange = event => {
    const target = event.target;

    this.setState({ [target.name]: target.value });
  };

  submitForm = event => {
    event.preventDefault();

    const postData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      _csrf: this.state.token
    };

    Server.post('/api/contacts', postData)
      .then(response => console.log('response: ', response))
      .catch(err => console.log('err: ', err));
  };

  componentDidMount() {
    Server.get('/api/contacts')
      .then(response => {
        this.setState({ token: response.data.token });
      });
  }

  render() {
    console.log('render: ', this.state);
    return(
      <div className="main-content">
        <h2>Contact</h2>
        <div>
          <form>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.inputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.inputChange}
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.inputChange}
                />
              </label>
              <button onClick={this.submitForm}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;