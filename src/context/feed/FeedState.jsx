import { useReducer } from "react";
import FeedContext from "./FeedContext";
import FeedReducer from "./FeedReducer";
import { Card, Container } from "react-bootstrap";
import { PostHeader } from "../../components/post-header/header";
import { PostPicture } from "../../components/post-picture/picture";
import { PostBody } from "../../components/post-info/body";
const FeedState = (props) => {
  const timelineFeed = [
    {
      uid: 1,
      user: {
        uid: 1,
        username: "Elza Nahoria Gourmet",
        thumbnail:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      likes: 999,
      description: "My favorite pizza!",
      location: "Puntarenas, Costa Rica",
      pictures: [
        {
          url: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        },
        {
          url: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_1280.jpg",
        },
        {
          url: "https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg",
        },
      ],
    },
    {
      uid: 2,
      user: {
        uid: 2,
        username: "Juan Frustrante",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      likes: 44,
      description: "About Last Night!",
      location: "Las Vegas, Nevada",
      pictures: [
        {
          url: "https://cdn.pixabay.com/photo/2016/09/10/11/11/musician-1658887_1280.jpg",
        },
      ],
    },
    {
      uid: 3,
      user: {
        uid: 3,
        username: "Rita",
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      likes: 6000,
      description: "About Last Night!",
      location: "Las Vegas, Nevada",
      pictures: [
        {
          url: "https://cdn.pixabay.com/photo/2017/12/20/10/48/portugal-3029665_1280.jpg",
        },
        {
          url: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
        },
      ],
    },
  ];
  const initialState = {
    timelineFeed,
    likes: 0,
    location: "",
    description: "",
  };
  const [state, dispatch] = useReducer(FeedReducer, initialState);
  function showPost() {
    return timelineFeed.map((element) => (
      <Container className="post" key={element.uid}>
        <Card>
          <PostHeader />
          <PostPicture pictures={element.pictures} />
          <PostBody
            location={element.location}
            description={element.description}
            countLikes={element.likes}
          />
        </Card>
      </Container>
    ));
  }
  function onLike(count) {
    dispatch({
      type: "like",
      payload: count + 1,
    });
  }
  function onDislike(count) {
    dispatch({
      type: "dislike",
      payload: count - 1,
    });
  }
  return (
    <FeedContext.Provider
      value={{
        timelineFeed: state.timelineFeed,
        likes: state.likes,
        showPost,
        onLike,
        onDislike,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};
export default FeedState;
