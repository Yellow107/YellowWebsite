import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import * as React from "react";

const CareerDetails = ({
  userName,
  userEmail,
  userNumber,
  userSocial,
  userQuestionA,
  userQuestionB,
  userQuestionC,
  userRole,
  userCurrentRole,
  userMedium,
  userFirstTextArea,
  userSecondTextArea,
  userThirdTextArea,
  userFourthTextArea,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Someone just filled Career Details on Yellow Website.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={
              "https://welcometoyellow.com/logo-black.png"
            }
            width="140"
            height="50"
            alt="Logo"
            style={logo}
          />
          <Text style={text}>Hi,</Text>
          <Text style={text}>
            You have a new career form submission on the Yellow website.
            <br />
            Below are the details.
          </Text>
          <Section>
          <Section style={querySection}>
              <Heading style={h1}>Which role are you applying for?:</Heading>
              <Text style={paragraph}>{userRole}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Name:</Heading>
              <Text style={paragraph}>{userName}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Email:</Heading>
              <Text style={paragraph}>{userEmail}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Phone:</Heading>
              <Text style={paragraph}>{userNumber}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Your website / blog / Instagram / Facebook (basically, how can we stalk you?) :</Heading>
              <Text style={paragraph}>{userSocial}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Let&apos;s forget about propriety and talk money - what&apos;s the bare minimum you can survive on monthly? :</Heading>
              <Text style={paragraph}>{userQuestionA}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Why Yellow?(write a short paragraph on makes you want to work with us) :</Heading>
              <Text style={paragraph}>{userFirstTextArea}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Tell us about your past - just the work part, for now! :</Heading>
              <Text style={paragraph}>{userSecondTextArea}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Which one of these best describes your current role?</Heading>
              <Text style={paragraph}>{userCurrentRole}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>How do you keep up with what&apos;s going on in the world?</Heading>
              <Text style={paragraph}>{userMedium}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>If you could work on any brand or client in the world, which would it be and why? </Heading>
              <Text style={paragraph}>{userThirdTextArea}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>What&apos;s the coolest thing you&apos;ve ever done? :</Heading>
              <Text style={paragraph}>{userFourthTextArea}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>When you&apos;re not hailing Helvetica as the second coming, which typeface do you champion? :</Heading>
              <Text style={paragraph}>{userQuestionB}</Text>
            </Section>
            <Section style={querySection}>
              <Heading style={h1}>Which is your favourite film ever?</Heading>
              <Text style={paragraph}>{userQuestionC}</Text>
            </Section>
          </Section>
          <Text style={footer}>
            This form is submitted from <Link style={link} href="/careers">Career Page.</Link>
          </Text>
          <Text style={h1}>- Team Yellow</Text>
          <Hr style={hr} />
          <Text style={footer}>
          Loft offices 2, Office 107, Dubai Media City, Dubai UAE
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CareerDetails;

const main = {
  backgroundColor: "#ffffff",
  color: "#f9f9f9",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  border:"1px solid #f2f2f2",
  backgroundColor: "#ffffff",
  maxWidth: "50em",
  
};
const logo = {
  margin: "0 auto",
};

const querySection ={
  paddingBottom:"12px"
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color:"#6a6a6a"
};
const h1 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "500",
};

const link = {
  color: "#2754C5",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontSize: "14px",
  margin: "24px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};