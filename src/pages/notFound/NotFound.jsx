import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return <div>erro</div>;
};

export default NotFound;
