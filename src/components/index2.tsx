import { useAppDispatch } from "@/app/store";
import { updateAccount } from "@/redux";
export const ComponentUpdateReduxState = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="homepage">
      <h1>Component update state of redux </h1>
      <input
        style={{ width: "50%" }}
        type="text"
        placeholder="type here to change state of token in redux"
        onChange={(e) => {
          dispatch(
            updateAccount({
              token: e.target.value,
              expiresIn: "9999999",
            })
          );
        }}
      />
    </div>
  );
};
