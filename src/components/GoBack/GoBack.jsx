import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // -1 означає повернення на одну сторінку назад
  };

  return <button onClick={handleGoBack}>Go Back</button>;
}

export default BackButton;
