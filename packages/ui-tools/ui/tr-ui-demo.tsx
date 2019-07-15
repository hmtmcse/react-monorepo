import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import {TRProps, TRState} from "tm-react/src/artifacts/model/tr-model";
import React from "react";
import TRFlashMessage, {Variant} from "./tr-flash-message";
import {Button, ButtonGroup, Divider} from "./ui-component";
import {TRDropdownDataHelper} from "./tr-ui-data";
import TRDropdown from "./tr-dropdown";
import TRDialog from "./tr-dialog";

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


    private title(title: string) {
        return (<React.Fragment>
            <br/><br/>
            <h3>{title}</h3>
        </React.Fragment>);
    }

    render(){

        // Dropdown
        let dropdownList = new TRDropdownDataHelper();
        dropdownList.add("A", "Item A");
        dropdownList.add("B", "Item B", {
            click(event: any, onClickData: any): void {
                console.log("Clicked")
            }
        });
        dropdownList.add("C", "Item C", {
            click(event: any, onClickData: any): void {
                console.log(onClickData)
            }
        }, {name: "C"});
        // Dropdown


        return (<React.Fragment>

            {this.title("Flash Message")}
            <ButtonGroup
                variant="contained"
                color="primary">
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.error)}}>Error Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.info)}}>Info Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.success)}}>Success Flash</Button>
                <Button onClick={(event:any) =>{this.showFlashMessage(event, Variant.warning)}}>Warning Flash</Button>
            </ButtonGroup>
            <TRFlashMessage isOpen={this.state.showFlashMessage} message={this.state.flashMessage} variant={this.state.flashMessageVariant} onCloseFunction={(event:any) =>{this.closeFlashMessage(event)}}/>



            {this.title("Dropdown")}
            <TRDropdown actions={dropdownList.getList()}/>


            {this.title("Dialog")}
            <TRDialog isOpen={true} children={<h1>This is Body Content of the Dialog Box</h1>}  title="Hmm Title" autoClose={true}/>
            {this.title("Alert Dialog")}

            {this.title("Table Action")}
            {this.title("Table Header")}
            {this.title("Table")}

        </React.Fragment>);
    }




}