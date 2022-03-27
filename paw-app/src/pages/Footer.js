import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  BottomRow,
} from "./CssPages/FooterStyles";

const Footer = () => {
    
  return (
    <Box>
        <hr></hr>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Volunteering</FooterLink>
            <FooterLink href="#">Animal Shelters</FooterLink>
            <FooterLink href="#">Pet Clases</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Pawsible@gmail.com</FooterLink>
            <FooterLink href="#">+1-202-555-0100</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <hr></hr>
        <BottomRow>
          <Column>
            <Heading href="#">Terms & Conditions</Heading>
          </Column>
          <Column>
            <Heading>Private Policy</Heading>
          </Column>
          <Column>
            <Heading rhef="#">Other Policies</Heading>
          </Column>
        </BottomRow>
    </Box>
  );
};
export default Footer;