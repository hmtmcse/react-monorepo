import React from 'react';
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";


const MyLayout = React.lazy(() => import('../view/layouts/my-layout'));
const MyView = React.lazy(() => import('../view/my-view'));

export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = MyLayout
        publicLayoutInfo.addPageInstance("/", MyView);
        pageWithLayout.push(publicLayoutInfo);

        return pageWithLayout
    }

}