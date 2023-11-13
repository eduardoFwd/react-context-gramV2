import { useContext, useEffect, useReducer, useState } from "react";
import { CardImg, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserContext from "../../context/user/UserContext";

export const FollowedAccountsModal = (props) => {
  const { followedAccounts,unFollow} = useContext(UserContext);
  const { displayModalFollowed, onClose } = props;

  const [show, setShow] = useState(displayModalFollowed || false);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Followed Accounts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {!!followedAccounts &&
              followedAccounts.map((account, index) => {
                return (
                  <>
                    <Row key={`followed-account${index}`}>
                      <Col>
                        <CardImg
                          src={account.thumbnail}
                          className="post-avatar rounded-3"
                          style={{ width: "60px" }}
                        ></CardImg>
                      </Col>
                      <Col xs={6}>
                        <strong>{account.username}</strong>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                           unFollow(account.uid)
                          }}
                        >
                          Unfollow
                        </Button>
                      </Col>
                    </Row>
                    <br />
                  </>
                );
              })}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
