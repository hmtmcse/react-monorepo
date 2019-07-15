import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import {TRProps, TRState} from "tm-react/src/artifacts/model/tr-model";
import React from "react";
import {
    Button,
    ClickAwayListener,
    Grow,
    IconButton,
    ListIcon,
    MenuItem,
    MenuList,
    MoreVertIcon,
    Paper,
    Popper
} from "./ui-component";
import {TRDropdownDataHelper} from "./tr-ui-data";
import TRDropdown from "./tr-dropdown";

class TRTableActionState implements TRState {
    public anchorRef:any = React.createRef();
    public open:boolean = false;
}

export default class TRTableAction extends TRReactComponent<TRProps, TRTableActionState> {


    state:TRTableActionState = new TRTableActionState();


    render() {
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
        return (<React.Fragment>
            <TRDropdown actions={dropdownList.getList()}/>
        </React.Fragment>);
    }
}