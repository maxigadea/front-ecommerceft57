import { ILoginProps, ILoginPropsErrors, IRegisterProps, IRegisterPropsErrors } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginPropsErrors = {};

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } 

    return errors;
};


export function validateRegisterForm(values: IRegisterProps) {
    const errors: IRegisterPropsErrors = {};

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } 

    return errors;
};
