import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import ItemStore from "../store";


function ItemModel() {
  const itemStore = useContext(ItemStore);
  const { addItemDb } = itemStore;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const [textInput, setTextInput] = useState('');

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} variant="primary" onClick={toggle}>
        add Item
      </Button>

      <Modal toggle={toggle} isOpen={modal}>
        <ModalHeader toggle={toggle}>Add to Shopping list</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"   
                placeholder="Add shopping item"
                onChange={handleChange}
              ></Input>
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} 
                onClick={(_) => {
                    if (textInput) {
                        addItemDb({
                            _id: uuidv4(),
                            name: textInput,
                        })
                    }
                    toggle()
                  }}
            block>
              Add Item
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default observer(ItemModel);
