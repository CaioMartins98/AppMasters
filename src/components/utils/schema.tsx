import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Nome muito curto').required('* Nome obrigatório'),
  email: Yup.string().email('Email inválido!').required('* Email obrigatório'),
  phone: Yup.string().required('*Telefone obrigatório'),
  addressZip: Yup.string().required('*CEP obrigatório'),
  addressNumber: Yup.number().min(1).required('*Número obrigatório'),
  addressComplement: Yup.string().required('*Complemento obrigatório'),
  addressStreet: Yup.string().required('*Logradouro obrigatório'),
  addressDistrict: Yup.string().required('*Bairro obrigatório'),
  addressCity: Yup.string().required('*Cidade obrigatório'),
  addressState: Yup.string().required('*Estado obrigatório'),
});

export default schema;
