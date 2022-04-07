import { useState } from "react";
import Form from "react-bootstrap/Form"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Col,Row } from "react-bootstrap";


const DeliveryAdress = (props) => {

    const [validated, setValidated] = useState(false)
    const [needAddress, setNeedAddress] = useState(0)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const flag = form.checkValidity()
        props.setValid(flag)
        if (flag === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(flag);
    };

    const handleNeed = (value) => {
        setNeedAddress(value)
        if (value === 1) {
            props.setValid(false);
            setValidated(false)
        } else {
            setValidated(true)
            props.setValid(true)
        }
    }

    return (
        <div>
            <ButtonGroup className="mb-5">
                <ToggleButton
                    key={1}
                    id={`radio-1`}
                    type="radio"
                    variant={'outline-danger'}
                    name="radio"
                    value={1}
                    checked={needAddress === 1 ? true : false}
                    onChange={(e) => handleNeed(1)}
                >
                    Доставка
                </ToggleButton>
                <ToggleButton
                    key={0}
                    id={`radio-0`}
                    type="radio"
                    variant={'outline-danger'}
                    checked={needAddress === 0 ? true : false}
                    name="radio"
                    value={0}
                    onChange={(e) => handleNeed(0)}
                >
                    Самовывоз
                </ToggleButton>
            </ButtonGroup>
            {needAddress === 1 &&
                <Form className="form" noValidate validated={validated} onChange={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Улица</Form.Label>
                                <Form.Control className='w input' type="text" placeholder="Володарского" required />
                                <Form.Control.Feedback type="invalid">
                                    Нужно ввести улицу
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Дом</Form.Label>
                                <Form.Control className='w input' type="text" placeholder="58" required />
                                <Form.Control.Feedback type="invalid">
                                    Нужно внести дом
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            }
        </div >
    );
};


export default DeliveryAdress