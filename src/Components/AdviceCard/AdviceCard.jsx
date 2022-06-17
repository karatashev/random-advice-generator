import "./AdviceCard.css"

const AdviceCard = ({ advice, fetchData }) => {


  return (
    <div className="advice-card-container">
      <h2>{advice}</h2>
      <button onClick={fetchData}>random advice</button>
    </div>
  );
};

export default AdviceCard;
