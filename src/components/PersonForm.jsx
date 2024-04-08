import personsService from "../services/personsService";

export const PersonForm = ({ newName, setNewName, newNumber, handleNewNumber, persons, setPersons }) => {

    const addNewPerson = (event) => {
        event.preventDefault();
        const existingPerson = persons.find(person => person.name === newName);
        if (!existingPerson) {
            const newPerson = {
                id: Date.now(),
                name: newName,
                number: newNumber
            }
            setPersons([...persons, newPerson]);
            personsService.postPerson(newPerson);
        } else {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                const updatedPerson = { ...existingPerson, number: newNumber };
                setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson));
                personsService.updatePerson(updatedPerson.id, updatedPerson);
            }
        }
    };

    return (
        <div>
            <h2>Add a New Person:</h2>
                <form onSubmit={ addNewPerson }>
                    <div>
                        <label htmlFor="new-Name">Name: </label>
                        <input id="new-Name" value={ newName } onChange={ setNewName } />
                        <br /><br />
                        <label htmlFor="new-Number">Number: </label>
                        <input id="new-Number" value={ newNumber } onChange={ handleNewNumber } />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
        </div>
    );

}