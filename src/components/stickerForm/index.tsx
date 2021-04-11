import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import  { useState } from 'react';
import MessageOk from '../MessageOk';
import MessageError from '../MessageError';
import Loading from '../Loading';
import {Container,
        StyledButton,
        StyledInput, 
        Label, 
        StyledErrorMessage, 
        ContainerForm
      } from'./styles'

const API_URL = 'https://simple-api-selection.herokuapp.com/submit';


const StickerForm = () => {
	
	const schema = Yup.object().shape({
		name: Yup.string().min(2, 'Nome muito curto').required('* Nome obrigatório'),
		email: Yup.string().email('Email inválido!').required('* Email obrigatório'),
		phone: Yup.string().matches(/(^[0-9]+$)/, 'only digits here').min(10).required('*Telefone obrigatório'),
		addressZip: Yup.string().required('*CEP obrigatório'),
		addressNumber: Yup.number().min(1).required('*Número obrigatório'),
		addressComplement: Yup.string().required('*Complemento obrigatório'),
		addressStreet: Yup.string().required('*Logradouro obrigatório'),
		addressDistrict: Yup.string().required('*Bairro obrigatório'),
		addressCity: Yup.string().required('*Cidade obrigatório'),
		addressState:Yup.string().required('*Estado obrigatório')
	})

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');

	const sendForm = (values: any) => {
    setLoading(true);
		axios({
			method: 'POST',
			url: API_URL,
			data: values
		})
		.then(()=> {
      setLoading(false);
      setMessage('Success')
    })
		.catch(() => {
      setMessage('Error')
			
			setLoading(false);
		})
	}

const onBlurCep = (event, setFieldValue) => {
	const {value} = event.target;
	const cep = value;

	fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((res) => res.json())
      .then((data) => {
        setFieldValue('addressStreet', data.logradouro);
        setFieldValue('addressDistrict', data.bairro);
        setFieldValue('addressCity', data.localidade);
        setFieldValue('addressState', data.uf)}
        )
        .catch((error)=> console.log(error));
}



	return (
		<Container>
      
			{!loading && message === 'Success' && <MessageOk/>}
			
			{loading && <Loading/>}
      {!loading && message !== 'Success' && (
        
        
			<Formik
				validationSchema={schema}
				initialValues={{
					name: '',
					phone: '',
					email: '',
					addressZip: '',
					addressStreet: '',
          addressNumber: '',
          addressComplement: '',
          addressDistrict:'',
          addressCity: '',
          addressState: ''
				}}
				onSubmit={async (values) => {
					sendForm(values);
				}}
			>

			{({setFieldValue})=>(
			
        
          <ContainerForm>
          {message === 'Error' && <MessageError/>}
					<Label htmlFor='name'>Nome</Label>
          <div>
					<StyledInput id='name' name='name'  />
          <StyledErrorMessage component="span" name="name" />
          </div>

          <Label htmlFor='email'>Email</Label>
          
          <div>
					<StyledInput id='email' name='email' type='email' />
          <StyledErrorMessage component="span" name="email" />
          </div>

					<Label htmlFor='phone'>Telefone</Label>
          <div>
					<StyledInput name='phone' 
                       id='phone' 
                       maxlength='11' 
                       placeholder='(__)_____-____' 
                       type='phone'/>
          <StyledErrorMessage component="span" name="phone" />
          </div>

					<Label htmlFor='addressZip'>CEP</Label>
          <div>
					<StyledInput id='addressZip' 
								       name='addressZip' 
								       maxlength='8' 
                       placeholder='_____-___'
								onBlur={(ev) => onBlurCep(ev, setFieldValue)}
								/>
                <StyledErrorMessage component="span" name="addressZip" />
            </div>

					<Label htmlFor='addressStreet'>Logradouro</Label>
          <div>
					<StyledInput id='addressStreet'  name='addressStreet'/>
          <StyledErrorMessage component="span" name="addressStreet" />
					</div>

					<Label htmlFor='addressNumber'>Numero</Label>
          <div>
					<StyledInput id='addressNumber' name='addressNumber'  />
          <StyledErrorMessage component="span" name="addressNumber" />
          </div>

					<Label htmlFor='addressComplement'>Complemento</Label>
          <div>
					<StyledInput id='addressComplement' name='addressComplement'  />
          <StyledErrorMessage component="span" name="addressComplement" />
					</div>

					<Label htmlFor='addressDistrict'>Bairro</Label>
          <div>
					<StyledInput id='addressDistrict'  name='addressDistrict'  />
          <StyledErrorMessage component="span" name="addressDistrict" />
					</div>

					<Label htmlFor='addressCity'>Cidade</Label>
          <div>
					<StyledInput id='addressCity'  name='addressCity' />
          <StyledErrorMessage component="span" name="addressCity" />
          </div>

					<Label htmlFor='addressState'>Estado</Label>
          <div>
					<StyledInput id='addressState'  name='addressState' />
          <StyledErrorMessage component="span" name="addressState" />
          </div>
          
          <div>
          <StyledButton type='submit'>Enviar</StyledButton>
        </div>
        
          
        </ContainerForm>
        )}
        
			</Formik>
    
      )}
				

		</Container>
	)
};

export default StickerForm;
