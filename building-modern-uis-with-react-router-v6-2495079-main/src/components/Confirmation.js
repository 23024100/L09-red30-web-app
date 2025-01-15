import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation(); 
  //Destructure state property - Now we can access state data like state.email
  return (
    <div className="container">
      <h1>Thank You {state.name}!</h1>
      <p>You're now registered for Red30 Tech.</p>
      {state && (
      <p>
        We've sent more details to <strong>{state.email}</strong>
      </p>
      )}
    </div> // Will only render the para if there is a state
  );
}
