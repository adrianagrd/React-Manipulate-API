const baseUrl = 'http://localhost:3001/persons';

const getPersons = async () => {
    try {
        const response = await fetch(baseUrl);
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

const postPerson = async (newPerson) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPerson)
        });
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}

const putPerson = async (userId, newPerson) => {
    try {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPerson)
        });
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

const deletePerson = async (userId) => {
    try {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE',
        })
        return response.json();
    }
    catch(error) {
        console.error(`Error: ${error}`);    
    }
};

export default {
    getPersons,
    postPerson,
    putPerson,
    deletePerson
};
