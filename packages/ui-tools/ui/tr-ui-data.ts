import {StopIcon} from "./ui-component";
import {TRAlertDialogProps} from "./tr-alert-dialog";

export interface OnActionFunction {
    click(event: any, onClickData: any): void;
}


// DROP DOWN DATA
class TRDropdownData {
    public uniqueName?: string;
    public itemContent: any;
    public onClickFunction?: OnActionFunction;
    public onClickCallbackData!: any;

    constructor(uniqueName?: string, itemContent?: any, onClickFunction?: OnActionFunction, onClickCallbackData?: any) {
        this.uniqueName = uniqueName;
        this.itemContent = itemContent;
        this.onClickFunction = onClickFunction;
        this.onClickCallbackData = onClickCallbackData;
    }
}

class TRDropdownDataHelper {
    private actions: Array<TRDropdownData> = [];

    public addAction(action: TRDropdownData) {
        this.actions.push(action)
    }

    public add(uniqueName: string, itemContent: any, onClickFunction?: OnActionFunction, onClickCallbackData?: any): TRDropdownDataHelper {
        this.actions.push(new TRDropdownData(uniqueName, itemContent, onClickFunction, onClickCallbackData))
        return this;
    }

    public getList(): Array<TRDropdownData> {
        return this.actions;
    }

    public static instance(): TRDropdownDataHelper {
        return new TRDropdownDataHelper();
    }
}
// DROP DOWN DATA


// TABLE ACTION DATA
class TRTableActionData {
    public label?: string;
    public url?: string;
    public action?: OnActionFunction;
    public actionCallbackData?: any;
    public icon: any = StopIcon;
    public confirmation?: TRAlertDialogProps;
}

// TABLE ACTION DATA


// TABLE HEADER DATA
class TRTableHeaderData {
    public id?: any;
    public numeric: boolean = false;
    public disablePadding: boolean = false;
    public enableSort: boolean = true;
    public label?: string;
    public title?: string;
}
// TABLE HEADER DATA


// PAGINATION DATA
class TRPaginationData {
    public total: number = 0;
    public itemPerPage: number = 0;
    public offset: number = 0;
    public component: any = "div";
    public backButtonProps: any = "Previous Page";
    public nextButtonProps: any = "Next Page";
    public itemPerPageDropdown: Array<number> = [10, 20, 50, 100, 500, 1000];
}
// PAGINATION DATA

// SELECT DATA
class TRSelectData {
    public total: number = 0;
    public itemPerPage: number = 0;
    public offset: number = 0;
    public component: any = "div";
    public backButtonProps: any = "Previous Page";
    public nextButtonProps: any = "Next Page";
    public itemPerPageDropdown: Array<number> = [10, 20, 50, 100, 500, 1000];
}
// SELECT DATA


export {
    TRDropdownData,
    TRDropdownDataHelper
}