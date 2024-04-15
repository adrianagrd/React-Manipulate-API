import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {

	const { newName, newNumber, handleNewNameValue, handleNewNumberValue } = useForm();
	const { newFilter, handleNewFilterValue } = useFormFilter();
	const { persons, handleChangePersonsValue} = usePersons();
	
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setNewFilter={ handleNewFilterValue }/>
			<PersonForm 
				newName={ newName } 
				setNewName={ handleNewNameValue } 
				newNumber={ newNumber }
				handleNewNumber={ handleNewNumberValue }
				persons={ persons }
				setPersons={ handleChangePersonsValue }

			/>
			<Numbers  persons={ persons } newFilter={ newFilter } handleChangePersonsValue={handleChangePersonsValue}/>
		</div>
	);
};

export default App;
