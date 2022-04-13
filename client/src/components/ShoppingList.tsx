import { useContext, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { observer } from "mobx-react-lite";
import ItemStore from "../store";

const ShoppingList = () => {
  const itemStore = useContext(ItemStore);
  const { items, deleteItemDb, getAllItems } = itemStore;

  useEffect(() => {
    getAllItems();
  });

  return (
    <>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    onClick={(_) => {
                      deleteItemDb(_id)
                      window.location.reload();
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </>
  );
};

export default observer(ShoppingList);
