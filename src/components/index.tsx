import { selectToken } from "@/redux";
import { useSelector } from "react-redux";

export const ComponentGetReduxState = () => {
  const token = useSelector(selectToken);
  return (
    <div className="homepage">
      <h1>Component get state of redux </h1>
      <div>token : {token}</div>
    </div>
  );
};
