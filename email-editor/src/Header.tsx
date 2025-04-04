import { useAuth } from "./hooks/useAuth.js";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>{isLoggedIn ? <h3>Привіт, Ростік</h3> : <h3>Спочатку зайдіть</h3>}</>
  );
};
