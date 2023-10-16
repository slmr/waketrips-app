import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "localhost:3000";

export const ContactUsEmail = (data: any) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    budgetPerPerson,
    partySize,
    message,
  } = data;

  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());

  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${baseUrl}/assets/images/logo.png`} />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Berikut informasi yang dimasukan pada form kontak di website
                  waketrips:
                </Heading>

                <Text style={paragraph}>
                  <b>Waktu submit: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Nama Depan: </b>
                  {firstName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Nama Belakang: </b>
                  {lastName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email</b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>No. Telepon: </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Jumlah Orang: </b>
                  {partySize}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Budget Per Orang: </b>
                  {`Rp.${budgetPerPerson?.[0].toLocaleString()} - Rp.${budgetPerPerson?.[1].toLocaleString()}`}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Pertanyaan: </b>
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/static/yelp-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | Waketrips, Belitung, Air Selumar, Indonesia |
            https://waketrips-frontend.vercel.app
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
