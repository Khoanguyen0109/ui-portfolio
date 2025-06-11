import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PasswordModal } from "./PasswordModal";

export const ProjectCard = ({ id, title, description, imgUrl, requirePassword }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (requirePassword) {
      setShowModal(true);
    } else {
      navigate(`details/${id}`);
    }
  };

  const handleModalSuccess = () => {
    setShowModal(false);
    navigate(`details/${id}`);
  };

  return (
    <>
      <Col className="btn" size={12} sm={12} onClick={handleCardClick}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
      
      <PasswordModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSuccess={handleModalSuccess}
      />
    </>
  );
};
