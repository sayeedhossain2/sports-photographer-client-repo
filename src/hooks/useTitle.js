import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Sports Photographer`;
  }, [title]);
};

export default useTitle;
