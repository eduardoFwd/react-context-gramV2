import { useContext, useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { SuggestedAccountsModal } from "../suggested-accounts/accounts-modal";
import {FollowedAccountsModal} from "../follow-accounts/follows-modal"
import UserContext from "../../context/user/UserContext";

export const NavHeader = () => {
  const [display, setDisplay] = useState(false);
  const [displayFollowed, setDisplayFollowed] = useState(false);
  const {getUser,currentUser} = useContext(UserContext);
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Current User:{currentUser.username}</h1>

            <h2>Followers:{currentUser.followers}</h2>
          </Navbar.Brand>
        </Container>
        <Button
          variant="outline-success"
          onClick={() => {
            if (!display) {
              setDisplayFollowed(true);
            } else {
              setDisplayFollowed(false);
            }
          }}
        >
          Followed Accounts
        </Button>

      {!!displayFollowed && (
        <FollowedAccountsModal
          displayModalFollowed={true}
          onClose={() => setDisplayFollowed(false)}
        />
      )}
        <Button
          variant="outline-success"
          onClick={() => {
            if (!display) {
              setDisplay(true);
            } else {
              setDisplay(false);
            }
          }}
        >
          Suggested Accounts
        </Button>
      </Navbar>

      {!!display && (
        <SuggestedAccountsModal
          displayModal={true}
          onClose={() => setDisplay(false)}
        />
      )}
    </>
  );
};
