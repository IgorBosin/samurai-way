import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import {useAppDispatch} from "../../Redux/store";
import {login} from "../../Redux/authReducer";


export type LoginInputsType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    return <>
        <h1 style={{textAlign: 'center'}}>Authorization</h1>
        <LoginForm/>
    </>
}

const LoginForm = () => {

    const dispatch = useAppDispatch()

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm<LoginInputsType>({mode: 'onBlur'})


    const onSubmit: SubmitHandler<LoginInputsType> = (data) => {
        dispatch(login(data))
        reset()
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <TextField label={'Email'} error={!!errors.email} margin="dense"
                                   helperText={errors.email?.message}
                                   {...register("email", {
                                       required: {
                                           value: true,
                                           message: 'This field is required'
                                       },
                                       pattern: {
                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                           message: 'Incorrect email'
                                       }
                                   })} />

                        <TextField label={'Password'} type={'password'} error={!!errors.password} margin="dense"
                                   helperText={errors.password?.message}
                                   {...register("password", {
                                       required: {
                                           value: true,
                                           message: 'This field is required'
                                       },
                                       minLength: {
                                           value: 5,
                                           message: 'Min lenght 5 symbol'
                                       }
                                   })} />

                        <FormControlLabel control={<Checkbox defaultChecked {...register('rememberMe')}/>}
                                          label="Remember me"/>

                        <Button sx={{mb: 1}} type={'submit'} variant="contained">Login</Button>
                    </FormGroup>
                </form>
            </FormControl>
        </Grid>
    </Grid>
};

