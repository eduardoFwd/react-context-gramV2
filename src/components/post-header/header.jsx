import { CardHeader, CardImg } from "react-bootstrap";
import { useUser } from "../../context/UserContext";

export const PostHeader = () => {

    const user = useUser();

    return (
      <CardHeader>
        <CardImg
          src="https://discourse.disneyheroesgame.com/uploads/default/original/3X/e/8/e8b4cd21287dfa781e1cd50caac05b8bd4baf4e1.png"
          className="post-avatar rounded-3"
          style={{width: '80px'}}
        >  
        </CardImg>
        <strong>{user.username}</strong> 
      </CardHeader>
    );
};