import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import AppScreen from '../components/AppScreen'
import CategoryPickerItem from '../components/CategoryPickerItem'
import { AppForm, AppFormField, SubmitButton, AppFormPicker, FormImagePicker } from '../components/forms'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().required().min(1, "Please Select at least 1 image!"),
});

const categories = [
    {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps'},
    {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email'},
    {label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock'},
];

export default function ListingEditScreen() {
    const location = useLocation();

    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: [],
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    maxLength={8}
                    keyboardType='numeric'
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    numberOfColumns={3}
                    name="category"
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width='50%'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    keyboardType='numeric'
                    name="description"
                    placeholder="Description"
                />
                <SubmitButton title='Post' />
            </AppForm>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
