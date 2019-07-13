import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import React from "react";

export default class PublicLayout extends TRReactComponent<any, any> {

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <React.Fragment>
                <Component route={route} />
            </React.Fragment>
        );
    }

}