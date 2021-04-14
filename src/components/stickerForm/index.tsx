import axios from 'axios';
import { Formik } from 'formik';
import schema from '../utils/schema';
import { useState } from 'react';
import MessageOk from '../MessageOk';
import MessageError from '../MessageError';
import MaskedInput from 'react-text-mask';
import Loading from '../Loading';
import {
  Container,
  StyledButton,
  StyledInput,
  Label,
  StyledErrorMessage,
  ContainerForm,
  FormDivider,
  ButtonDiv,
} from './styles';

import styled from 'styled-components';

const API_URL = 'https://simple-api-selection.herokuapp.com/submit';

const phoneNumberMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

const addressZipMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

export const StyledMasked = styled(MaskedInput)`
  width: 300px;
  height: 36px;
  border: 1px solid #000000;
  background-color: #fff;
  border-radius: 4px;
  margin-left: 12px;
  margin-top: 5px;
  font-family: 'Poppins';
  font-size: 28px;
  color: black;

  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 760px) {
    width: 300px;
    height: 30px;
    font-size: 22px;
  }
`;

const StickerForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [lockFields, setlockFields] = useState(false);

  const sendForm = (values: any) => {
    setLoading(true);
    axios({
      method: 'POST',
      url: API_URL,
      data: values,
    })
      .then(() => {
        setLoading(false);
        setMessage('Success');
      })
      .catch(() => {
        setMessage('Error');

        setLoading(false);
      });
  };

  const onBlurCep = (event, setFieldValue) => {
    const { value } = event.target;
    const cep = value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        data.erro === true ? setlockFields(false) : setlockFields(true);
        setShowFields(true);

        setFieldValue('addressStreet', data.logradouro);
        setFieldValue('addressDistrict', data.bairro);
        setFieldValue('addressCity', data.localidade);
        setFieldValue('addressState', data.uf);
      })
      .catch((error) => {
        setShowFields(true);

        console.error(error);
      });
  };

  return (
    <Container>
      {!loading && message === 'Success' && <MessageOk />}

      {loading && <Loading />}
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
            addressDistrict: '',
            addressCity: '',
            addressState: '',
          }}
          onSubmit={async (values) => {
            sendForm(values);
          }}
        >
          {({ setFieldValue }) => (
            <ContainerForm>
              {message === 'Error' && <MessageError />}
              <FormDivider>
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <div>
                    <StyledInput id="name" name="name" />
                    <StyledErrorMessage component="span" name="name" />
                  </div>

                  <Label htmlFor="email">E-mail</Label>

                  <div>
                    <StyledInput id="email" name="email" type="email" />
                    <StyledErrorMessage component="span" name="email" />
                  </div>

                  <Label htmlFor="phone">Telefone</Label>
                  <div>
                    <StyledInput
                      name="phone"
                      id="phone"
                      render={({ field }) => (
                        <StyledMasked
                          {...field}
                          id="phone"
                          placeholder="(__)_____-____"
                          mask={phoneNumberMask}
                          type="text"
                        />
                      )}
                    />

                    <StyledErrorMessage component="span" name="phone" />
                  </div>

                  <Label htmlFor="addressZip">CEP</Label>
                  <div>
                    <StyledInput
                      name="addressZip"
                      id="addressZip"
                      render={({ field }) => (
                        <StyledMasked
                          {...field}
                          id="addressZip"
                          mask={addressZipMask}
                          placeholder="_____-___"
                          type="text"
                          onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                        />
                      )}
                    />
                    <StyledErrorMessage component="span" name="addressZip" />
                  </div>
                </div>

                {showFields && (
                  <>
                    <div>
                      <Label htmlFor="addressStreet">Logradouro</Label>
                      <div>
                        <StyledInput
                          id="addressStreet"
                          disabled={lockFields}
                          name="addressStreet"
                        />
                        <StyledErrorMessage component="span" name="addressStreet" />
                      </div>

                      <Label htmlFor="addressNumber">Numero</Label>
                      <div>
                        <StyledInput id="addressNumber" name="addressNumber" />
                        <StyledErrorMessage component="span" name="addressNumber" />
                      </div>

                      <Label htmlFor="addressComplement">Complemento</Label>
                      <div>
                        <StyledInput id="addressComplement" name="addressComplement" />
                        <StyledErrorMessage component="span" name="addressComplement" />
                      </div>

                      <Label htmlFor="addressDistrict">Bairro</Label>
                      <div>
                        <StyledInput
                          id="addressDistrict"
                          disabled={lockFields}
                          name="addressDistrict"
                        />
                        <StyledErrorMessage component="span" name="addressDistrict" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="addressCity">Cidade</Label>
                      <div>
                        <StyledInput id="addressCity" disabled={lockFields} name="addressCity" />
                        <StyledErrorMessage component="span" name="addressCity" />
                      </div>

                      <Label htmlFor="addressState">Estado</Label>
                      <div>
                        <StyledInput id="addressState" disabled={lockFields} name="addressState" />
                        <StyledErrorMessage component="span" name="addressState" />
                      </div>
                    </div>
                  </>
                )}
              </FormDivider>
              <ButtonDiv>
                <StyledButton type="submit">Enviar</StyledButton>
              </ButtonDiv>
            </ContainerForm>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default StickerForm;
