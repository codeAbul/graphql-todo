import * as React from "react";
import { Online_Users } from "../../generated/graphql-types";


const OnlineUser = ({ user }: Online_Users) => {
  return (
    <div className="userInfo">
      <div className="userImg">
        <i className="far fa-user" />
      </div>
      <div className="userName">{user?.name}</div>
    </div>
  );
};

export default OnlineUser;
