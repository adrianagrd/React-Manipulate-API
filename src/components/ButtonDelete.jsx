import personsService from "../services/personsService";

export const ButtonDelete = ({ id, name, persons, handleChangePersonsValue }) => {

    const deletePerson = async (id, name, persons, handleChangePersonsValue) => {
    
        if (window.confirm(`Delete ${name} ?`)) {
            await personsService.deletePerson(id);
            handleChangePersonsValue(persons.filter(person => person.id !== id));
            alert(`Person ${name} deleted successfully.`);
        }
    };
    return <button onClick={() => deletePerson(id, name, persons, handleChangePersonsValue)}> Delete</button>
    
};