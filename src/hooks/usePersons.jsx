import { useState, useEffect } from "react";
import personsService from "../services/personsService";

export const usePersons = (newName, newNumber) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        personsService.getPersons().then((data) => {
            handleChangePersonsValue(data)
        })
        .catch((error) => alert(`Error: ${error}`));
    }, [newName, newNumber]);

    const handleChangePersonsValue = (newValue) => {
        setPersons(newValue)
    }

    return {
        persons,
        handleChangePersonsValue
    };
}

export default usePersons;