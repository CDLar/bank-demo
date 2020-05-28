import React from 'react'
import { translated } from '../contexts/translated'
import { useForm, Controller } from 'react-hook-form'
import { DevTool } from 'react-hook-form-devtools'
import styled from 'styled-components'

//Material UI Imports
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Styled Components
const ErrorMsg = styled.p`
color:red;
font-size:.8rem;
`

const Login = ({ language, loginState, loginClose }) => {
    const { register, handleSubmit, errors, control, getValues } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <Dialog open={loginState} onClose={loginClose} aria-labelledby="form-dialog-title" >
            <DevTool control={control} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="form-dialog">{translated.loginHeader[language]}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {translated.loginMsg[language]}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        inputRef={register({ required: "You must specify a username.", minLength: { value: 6, message: 'Username must have at least 6 characters.' } })}
                        name='username'
                        label={translated.loginUser[language]}
                        type="text"
                        error={!!errors.name}
                        fullWidth
                    />
                    {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
                    <TextField
                        margin="dense"
                        id="password"
                        inputRef={register({ required: "You must specify a password.", minLength: { value: 6, message: 'Password must have at least 6 characters.' } })}
                        label={translated.loginPassword[language]}
                        type="password"
                        name='password'
                        error={!!errors.validName}
                        fullWidth
                    />
                    {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={loginClose} color="primary">
                        {translated.loginCancel[language]}
                    </Button>
                    <Button type='submit' color="primary">
                        {translated.loginSubmit[language]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default Login;