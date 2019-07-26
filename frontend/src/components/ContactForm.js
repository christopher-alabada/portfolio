import React from 'react';
import Server from '../api/Server';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../styles/contact-form.css';


class ContactForm extends React.Component {
  // set state vars
  state = {
    token: '',
    name: '',
    email: '',
    message: '',
    validated: false,
    showSuccess: false
  };

  // Set state for each character typed
  inputChange = event => {
    const target = event.target;

    this.setState({ [target.name]: target.value });
  };

  // Do validations
  handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();

    // Validate
    if (form.checkValidity() === true) {
      this.setState({ showSuccess: true });
      this.postData();
    } else {
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };

  // Post data
  postData = () => {
    const postData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      _csrf: this.state.token
    };

    Server.post('/api/contacts', postData);
  };

  componentDidMount() {
    Server.get('/api/contacts')
      .then(response => {
        this.setState({ token: response.data.token });
      });
  }

  renderAlert() {
    if (this.state.showSuccess) {
      return (
        <Alert variant="success">
          Thanks for your message. I'll get back to you as soon as I can.
        </Alert>
      );
    }
  }

  render() {
    return(
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="What's your name?"
              value={this.state.name}
              onChange={this.inputChange}
            />
            <Form.Control.Feedback type="invalid">
              You can make up a name if you want to.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="and your email?"
              value={this.state.email}
              onChange={this.inputChange}
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            />
            <Form.Control.Feedback type="invalid">
              Hmmm Email is either empty or invalid.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              name="message"
              placeholder="Say hi! 👋"
              value={this.state.message}
              onChange={this.inputChange}
            />
            <Form.Control.Feedback type="invalid">
              Say hi at least.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <div className="row justify-content-between">
          <div className="col-md-2">
            <Button type="submit" variant="outline-primary">Send</Button>
          </div>
          <div className="col-md-auto">
            {this.renderAlert()}
          </div>
        </div>
      </Form>
    );
  }
}

export default ContactForm;