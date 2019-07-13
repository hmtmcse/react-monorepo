import React from 'react';
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";


const PublicLayout = React.lazy(() => import('../view/layouts/public-layout'));
const MyView = React.lazy(() => import('../view/authentication/login-view'));

export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = PublicLayout;
        publicLayoutInfo.addPageInstance("/", MyView);
        pageWithLayout.push(publicLayoutInfo);

        return pageWithLayout
    }

}