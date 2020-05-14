import React from 'react'
import {InputGroup ,FormControl, Button} from 'react-bootstrap'




function InputsGroup( {btnText, pHolder,itemPipe } ) {


    const  itemSendHandler =(e) => {
        e.preventDefault();
        itemPipe(e, new Date())

    }


    return (
        <div>
    <form onSubmit={itemSendHandler}>
            <InputGroup className="mb-3">
                <FormControl
                    name="item"
                    placeholder={pHolder}
                    aria-label={pHolder}
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button
                        variant="dark"
                        type="submit"
                    > {btnText}
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            </form>
        </div>
    )
}

export default InputsGroup
