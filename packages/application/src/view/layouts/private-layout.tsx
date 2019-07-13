import React from 'react';
import { Redirect } from 'react-router';
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import TRBrowserStorageManager from "tm-react/src/artifacts/manager/tr-browser-storage-manager";

export default class PrivateLayout extends TRReactComponent<any, any> {

    render() {
        const Component = this.props.component;
        const route = this.props.route;

        let view = <Component route={route} />
        if (!Boolean(TRBrowserStorageManager.getAsJSON("isAuthorized"))) {
            view = (<Redirect to="/" />);
        }


        return (
            <React.Fragment>
                <p>Private layout</p>
                {view}
            </React.Fragment>
        );
    }

}