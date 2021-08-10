import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Heading() {
    const { user } = useContext(UserContext);

    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select>
                <option value="light">Light blue</option>
                <option value="dark">Dark green</option>
            </select>
            <hr/>
        </div>
    );
}