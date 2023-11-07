import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { SuggestedAccountsModal } from "../suggested-accounts/accounts-modal";

export const NavHeader = ({suggestedAccounts}) => {
    const [display, setDisplay] = useState(false);

    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-ContexGram</Navbar.Brand>
        </Container>
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
      
      { 
        !!display && <SuggestedAccountsModal
          displayModal={true}
          onClose={() => setDisplay(false)}
          suggestedAccounts={suggestedAccounts}
        />
      }
      
      </>
    );
};