import React from "react";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import PageHeader from "../../components/common/PageHeader";
import Spacer from "../../components/common/Spacer";
import TopBar from "../../components/common/TopBar";
import CustomerForm from "../../components/customer/CustomerForm";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useStore } from "../../store";

const CustomerProfilePage = () => {
  const { userState } = useStore();
  const { user } = userState;
  return (
    <div>
      <TopBar />
      <PageHeader image="assets/images/customer.jpg" title="Customer" />
      <Spacer />
      <Container>
        <Row>
          <Col md={2} style={{ textAlign: "center" }}>
            <FaUserCircle size="128" />
            <h5>
              {user.firstName} {user.lastName}
            </h5>
            <em>{user.email}</em>
          </Col>
          <Col md={1}></Col>
          <Col md={4} className="mt-5 mt-md-0">
            <h3>Profile</h3>

            <CustomerForm user={user} />
          </Col>
          <Col md={1}></Col>
          <Col md={4} className="mt-5 mt-md-0">
            <h3>Update Password</h3>

            <CustomerForm user={user} />
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Footer />
    </div>
  );
};

export default CustomerProfilePage;
