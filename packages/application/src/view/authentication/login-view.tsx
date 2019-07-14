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

interface LoginUI extends TRProps{
    classes: any;
}

class LoginView extends TRComponent<LoginUI, TRComponentState> {


    doLogin(event: any){

    }

    handleChange(event: any) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    renderUI() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar} src="/assets/logo-192x192.jpg"/>
                        <Typography variant="h5">Login Here</Typography>
                        <form onSubmit={this.doLogin} className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" required name="email" autoComplete="email" autoFocus
                                       onChange={this.handleChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input required name="password" type="password" id="password"
                                       onChange={this.handleChange}/>
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