import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Userid } from "../../../../Redux/Action";

function SearchedUser({ users }) {
  const img = users.user_picture;
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div
      className="chatUser"
      onClick={() => {
        history.push("/user");
        dispatch(Userid(users));
      }}
    >
      <div className="chatUser__picture">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/userpicture/${img}`}
        />
      </div>
      <div className="chatUser__details">
        <h3>{users.user_name}</h3>
      </div>
    </div>
  );
}

export default SearchedUser;
