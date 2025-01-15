import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams(); 
  // Assign to variable catId - Information stored in catId can be used to display info on the page
  const category = getCategory(catId); 
  // function takes catID (which we had access to bc of variable catId)

  return (
    <>
      <h2>{category.name} Sessions</h2>

      <ul className="session-list">
        {category?.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink 
            className={({isActive}) => isActive ? "session-active" : null}
            to={session.id}> {/* to navigate to a certain session */}
            <p className="session-name">{session.name}</p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
