import React from 'react';
import TRComponent from "tm-react/src/artifacts/component/tr-component";
import TRComponentState from "tm-react/src/artifacts/component/tr-component-state";
import {
    Avatar,
    Button,
    CssBaseline,
    FormControl,
    Input,
    InputLabel,
    Paper,
    Typography,
    withStyles
} from "ui-tools/ui/ui-component";
import {LoginLayoutJss} from "../../assets/login-layout-jss";
import {TRProps} from "tm-react/src/artifacts/model/tr-model";
import avatarImage from '../../assets/images/logo-192x192.jpg';
import {TrFormDefinitionData} from "tm-react/src/artifacts/data/tr-form-definition-data";

interface LoginUI extends TRProps {
    classes: any;
}

class LoginView extends TRComponent<LoginUI, TRComponentState> {

    state: TRComponentState = new TRComponentState();

    componentDidMount() {
        this.addFormDefinition("email", new TrFormDefinitionData({
            required: true,
            errorMessage: "Please Enter Email Address",
            isHelpTextAttribute: false
        }));
        this.addFormDefinition("password", new TrFormDefinitionData({
            required: true,
            errorMessage: "Please Enter Password",
            isHelpTextAttribute: false
        }));
    }

    doLogin(event: any) {
        event.preventDefault();

        console.log(this.state);
        console.log("isValid: " + this.validateFormInput());
        console.log(this.state);
    }

    renderUI() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar} src={avatarImage}/>
                        <Typography variant="h5">Login Here</Typography>
                        <form onSubmit={(event:any) => {this.doLogin(event)}} className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" autoComplete="email"
                                       autoFocus {...this.handleInputDataChange("email")} />
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password"
                                       {...this.handleInputDataChange("password")} />
                            </FormControl>
                            <Button type="submit" variant="contained" fullWidth color="primary" children="Sign in"
                                    className={classes.submit}/>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(LoginLayoutJss)(LoginView);