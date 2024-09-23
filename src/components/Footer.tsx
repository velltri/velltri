import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Velltri. CNPJ: 50.598.331/0001-43</p>
      <p style={addressStyle}>
        PC Misael Tavares, 472 - Cidade Nova, Ilhéus - BA, 45652-120
      </p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#f8f8f8',
  textAlign: 'center',
  padding: '20px',
  fontSize: '12px',
  color: '#333',
  borderTop: '1px solid #ccc',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const addressStyle: React.CSSProperties = {
  marginTop: '10px',
};

export default Footer;
