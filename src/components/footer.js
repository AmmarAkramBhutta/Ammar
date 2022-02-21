import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="section">
        <div className="divider"></div>
        <p>© Copyright – Ammar Akram</p>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  position: relative;
  padding: 30px 0;
  text-align: center;

  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;

export default Footer;
