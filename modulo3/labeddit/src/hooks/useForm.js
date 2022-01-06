import { useState } from "react";

const useForm = (initialStage) => {
    const [form, setForm] = useState(initialStage)

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialStage)
    }

    return [form, handleInputChange, clear]
}

export default useForm