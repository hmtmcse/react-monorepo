import {Theme} from "ui-tools/ui/ui-component";

export const LoginLayoutJss = (theme: Theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing( 3 * 2))]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    submit: {
        marginTop: theme.spacing(1),
    },
    form: {
        marginTop: theme.spacing(1),
    },
});