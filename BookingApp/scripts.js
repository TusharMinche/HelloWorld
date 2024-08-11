document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const appointmentsList = document.getElementById('appointments-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const phone = phoneInput.value;
        const email = emailInput.value;

        // Add a new appointment
        await axios.post('http://localhost:4000/api/v1/add-data', {
            username,
            phone,
            email,
        });

        usernameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';

        loadAppointments();
    });

    async function loadAppointments() {
        const response = await axios.get('http://localhost:4000/api/v1/get-data');
        const appointments = response.data.data;

        appointmentsList.innerHTML = '';

        appointments.forEach(appointment => {
            const li = document.createElement('li');

            const appointmentDetails = document.createElement('div');
            appointmentDetails.textContent = `Username: ${appointment.username}, Email: ${appointment.email}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => editAppointment(appointment.username));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteAppointment(appointment.username));

            li.appendChild(appointmentDetails);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            appointmentsList.appendChild(li);
        });
    }

    async function editAppointment(username) {
        // Get user details
        const response = await axios.get(`http://localhost:4000/api/v1/get-user/${username}`);
        const appointment = response.data.user;

        // Populate form fields with user data
        usernameInput.value = appointment.username;
        phoneInput.value = appointment.phonenumber;
        emailInput.value = appointment.email;

        // Delete the existing user
        await deleteAppointment(username);
    }

    async function deleteAppointment(username) {
        await axios.delete(`http://localhost:4000/api/v1/delete-user/${username}`);
        loadAppointments();
    }

    loadAppointments();
});
