export interface OnActionFunction {
    click(event: any, onClickData: any): void;
}

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


export {
    TRDropdownData,
    TRDropdownDataHelper
}