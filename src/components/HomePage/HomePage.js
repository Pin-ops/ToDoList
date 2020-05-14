import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'
import InputsGroup from '../InputsGroup/InputsGroup'



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



    render() {
        // console.log(this.state.items)

        let newItems = this.state.items.map ( (val, i) =>
            <ListGroup.Item
                key={i}
            >
                {val}
            </ListGroup.Item>
        )


        return (
            <div>
                <InputsGroup
                    pHolder='Enter new item'
                    btnText='Add'
                    itemPipe={this.getItem}
                />
                <ListGroup>
                    {newItems}
                </ListGroup>
            </div>
                )
    }
}


export default HomePage
