import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import {TRProps, TRState} from "tm-react/src/artifacts/model/tr-model";
import React from "react";
import TRFlashMessage, {Variant} from "./tr-flash-message";
import {Button, ButtonGroup} from "./ui-component";

class DemoState implements TRState{
    public showFlashMessage: boolean = false;
    public flashMessage: string = "This is Flash Message";
    public flashMessageVariant: Variant = Variant.error;
}

interface DemoProps extends TRProps{
    showFlashMessage: boolean;
}


export default class TrUiDemo extends TRReactComponent<DemoProps, DemoState> {

    static defaultProps = {};
    state:DemoState = new DemoState();

    closeFlashMessage(event: any) {
        this.setState({showFlashMessage: false})
    }

    showFlashMessage(event: any, flashMessageVariant: Variant) {
        this.closeFlashMessage(event);
        this.setState({
            showFlashMessage: true,
            flashMessageVariant: flashMessageVariant
        })
    }



    render(){
        return (<React.Fragment>
            <ButtonGroup
                variant="contained"
                color="primary">
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.error)}}>Error Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.info)}}>Info Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.success)}}>Success Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.warning)}}>Warning Flash</Button>
            </ButtonGroup>
            <TRFlashMessage isOpen={this.state.showFlashMessage} message={this.state.flashMessage} variant={this.state.flashMessageVariant} onCloseFunction={(event:any) =>{this.closeFlashMessage(event)}}/>
        </React.Fragment>);
    }




}