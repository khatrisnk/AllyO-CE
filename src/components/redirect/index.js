import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const Redirect = () => {
  const params = useParams();
  useEffect(() => {
    window.location.href = `https://www.${params.site}.com`;
  }, []);
  return (<section>Redirecting...</section>);
}

export default Redirect;