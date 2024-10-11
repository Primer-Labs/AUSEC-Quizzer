// src/emails/score-email.tsx
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";
  
  interface ScoreEmailProps {
    score: number | null;
  }
  
  const ScoreEmail = ({ score }: ScoreEmailProps) => (
    <Html>
      <Head />
      <Preview>Your Quiz Score from AUSEC Quizzer</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Heading style={styles.h1}>Thank You for Playing!</Heading>
          <Text style={styles.subText}>
            Your score: {score !== null ? score : "Not available"}.
          </Text>
          <Text style={styles.footerText}>
            If you have any questions, feel free to contact us.
          </Text>
          <Text style={styles.footerNote}>
            AUSEC Quizzer &mdash; Empowering minds with knowledge.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  const styles = {
    main: {
      backgroundColor: "#f4f4f4",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    container: {
      padding: "40px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center" as const,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    h1: {
      color: "#333",
      fontSize: "28px",
      marginBottom: "20px",
      fontWeight: "700",
    },
    subText: {
      color: "#555",
      fontSize: "16px",
      marginBottom: "30px",
    },
    footerText: {
      color: "#999",
      fontSize: "14px",
      marginTop: "20px",
    },
    footerNote: {
      color: "#666",
      fontSize: "12px",
      marginTop: "30px",
      fontStyle: "italic" as const,
    },
  };
  
  export default ScoreEmail;
  