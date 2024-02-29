import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Contact = () => {


  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <h1 style={{textAlign:"center"}}>Give us your opinion</h1>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
       
                <br />
                <label htmlFor="">what do you think about us?</label>
                <textarea name="" id="" cols="30" rows="10"></textarea><br /><br /><button type="submit" className="addTOCart__btn">
                  Send
                </button>    <br />     
              </form>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;