import {SubmitHandler, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

type AddTextFormType = {
    callback: (message: string) => void
    maxSymbols: number
    title: string
}
type InputsType = {
    message: string
}

export const AddTextForm = (props: AddTextFormType) => {

    const onSubmit: SubmitHandler<InputsType> = (data) => {
        props.callback(data.message)
        reset()
    }

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm<InputsType>({mode: 'onSubmit'})

    return <form onSubmit={handleSubmit(onSubmit)}>
        <TextField sx={{m: 0}} multiline={true} label={'Message'} error={!!errors.message} margin="dense"
                   helperText={errors.message?.message}
                   {...register("message", {
                       required: {
                           value: true,
                           message: 'This field is required'
                       },
                       maxLength: {
                           value: props.maxSymbols,
                           message: `Max lenght ${props.maxSymbols} symbol`
                       },
                   })} />
        <Button sx={{height: 56}} type={'submit'} variant="contained">{props.title}</Button>
    </form>
};