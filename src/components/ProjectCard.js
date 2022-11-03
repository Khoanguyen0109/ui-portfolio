import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = ({ id, title, description, imgUrl }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`details/${id}`);
  };
  return (
    <Col  className='btn' size={12} sm={6} md={4} onClick={onClick} >
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
