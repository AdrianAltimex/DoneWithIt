import { useFormikContext } from 'formik'
import React from 'react'

import AppPicker from '../AppPicker'
import { ErrorMessage } from '.';

export default function AppFormPicker({items, PickerItemComponent, numberOfColumns, name, placeholder, width}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker 
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={item=> setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage title={errors[name]} visible={touched[name]} />
        </>
    )
}
