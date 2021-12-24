import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import {ErrorMessage} from '.'

export default function AppFormField({name, width, ...otherProps}) {
    const {handleChange,setFieldTouched,touched,errors} = useFormikContext();

    return (
        <>
            <AppTextInput
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
