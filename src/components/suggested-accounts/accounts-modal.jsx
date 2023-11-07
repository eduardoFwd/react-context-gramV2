import { useState } from 'react';
import { CardImg, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const SuggestedAccountsModal = (props) => {

  const {displayModal, onClose, suggestedAccounts} = props;

  const [show, setShow] = useState(displayModal || false);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  }

  console.log(suggestedAccounts);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Suggested Accounts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {
                !!suggestedAccounts && suggestedAccounts.map((account, index) => {

                  return (
                    <>
                      <Row key={`suggested-account-i${index}`}>
                        <Col>
                        <CardImg
                          src={account.thumbnail}
                          className="post-avatar rounded-3"
                          style={{width: '60px'}}
                        >  
                        </CardImg>
                        </Col>
                        <Col xs={6}>
                          <strong>
                            {account.username}
                          </strong>
                        </Col>
                        <Col>
                          <Button>
                            Follow
                          </Button>
                        </Col>              
                      </Row>
                      <br />              
                    </>
                  );
                })
              }
            </Container>
          </Modal.Body>
        </Modal>    
    </>
  );
}