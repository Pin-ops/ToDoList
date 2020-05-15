import React, {Component} from 'react'
import { Accordion, Card, Button} from 'react-bootstrap'
import InputsGroup from '../InputsGroup/InputsGroup'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'



class HomePage extends Component {

    state = {
            items: []

    }

    getItem = (e , date) => {
        let itemlList = [...this.state.items];
        itemlList.push(e.target.item.value)
        this.setState({
            items: itemlList
        } )
    }

    ExampleCustomInput = ({ onClick }) => (
            <button className="example-custom-input" onClick={onClick}>
               <span role="img"></span>📅
            </button>
    );
    render() {

        // console.log(this.state.items)

        let addItemList = this.state.items.map ( (val, i) =>
           <Card key={i}>
                <Card.Header className="text-left">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={date => this.setState ({ startDate : date} )
                        }
                        customInput={< this.ExampleCustomInput />}
                    />
                    <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                        {val}
                    </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey={i} >
                    <Card.Body className="p-0" >

                    <textarea
                        rows="10"
                        value={this.state.startDate}
                        className="w-100 pl-5 pt-3 border border-0 "
                        placeholder="Please give me detail ..."
                        />
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        )


        return (
            <div>

                <InputsGroup
                    pHolder='Enter new item'
                    btnText='Add'
                    itemPipe={this.getItem}
                />

                <Accordion>
                    {addItemList}

                </Accordion>

            </div>
                )
    }
}


export default HomePage
