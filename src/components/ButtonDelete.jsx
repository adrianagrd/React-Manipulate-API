import personsService from "../services/personsService";

const deletePerson = async (id, name, persons, handleChangePersonsValue) => {
    try {
        if (window.confirm(`Delete ${name} ?`)) {
            await personsService.deletePerson(id);
            handleChangePersonsValue(persons.filter(person => person.id !== id));
            alert(`Person ${name} deleted successfully.`);
        }
    } catch (error) {
        console.error(`Error deleting person: ${error}`);
    }
};

export const ButtonDelete = ({ id, name, persons, handleChangePersonsValue }) => {
    return (
        <button onClick={() => deletePerson(id, name, persons, handleChangePersonsValue)}> Delete</button>
    );
}