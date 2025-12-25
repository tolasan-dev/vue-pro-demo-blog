

import { reactive } from "vue";

export function useRequiredValidator () {

    const errors = reactive({});

    const validateField = (field, value, message) => {
        const isValid = value && value.toString().trim() !== "";
        errors[field] = isValid ? "" : message;
        return isValid;
    };

    const resetErrors = () => {
        Object.keys(errors).forEach(key => delete errors[key]);
    };

    return { errors, validateField, resetErrors };
}
