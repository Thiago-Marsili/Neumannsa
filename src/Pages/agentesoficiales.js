import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

const Card = ({ title, imageUrl }) => (
  <div style={cardStyle}>
    <img src={imageUrl} alt={title} style={imageStyle} />
    <h2>{title}</h2>
  </div>
);

const AgentesOficiales = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
    <Card title="Agente 1" imageUrl="https://yt3.googleusercontent.com/ytc/AIf8zZSFQaEug61fzRR1bVs5QAxHrELburTQ23c7iWgu=s900-c-k-c0x00ffffff-no-rj" />
    <Card title="Agente 2" imageUrl="https://via.placeholder.com/150" />
  </div>
);

export default AgentesOficiales;
