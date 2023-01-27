import { useContext, useEffect } from "react";
import { AuthContext } from "./providers/auth";

function App() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    let request = {
      uuid: "1",
      email: "2",
      fullName: "3",
      nickName: "4",
      birthDate: "5",
      genre: "6",
      scheduleUUID: "7",
    };

    setUser(request);
  }, []);

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <h1>{user?.uuid}</h1>
    </div>
  );
}

export default App;
