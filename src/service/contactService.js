import axios from 'axios';

const baseURL =
  'https://65df58aeff5e305f32a2135e.mockapi.io/goit-react-hw-07-phonebook';
axios.defaults.baseURL = baseURL;

async function get() {
  const response = await axios.get('/contacts');
  return response.data;
}

async function create(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

const contactService = {
  get,
  create,
};

export default contactService;
