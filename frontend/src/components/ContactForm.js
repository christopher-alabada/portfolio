import React from 'react';
import Server from '../api/Server';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Contact extends React.Component {
  state = { token: '', name: '', email: '', message: '' };

  inputChange = event => {
    console.log(event);
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
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="What's your name?" value={this.state.name} onChange={this.inputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="and your email?" value={this.state.email} onChange={this.inputChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" name="message" placeholder="Say hi! 👋" value={this.state.message} onChange={this.inputChange} />
          </Form.Group>
        </Form.Row>

        <Button onClick={this.submitForm} variant="primary">Send Message</Button>
      </Form>
    );
  }
}

export default Contact;