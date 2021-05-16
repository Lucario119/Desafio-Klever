import React, { useEffect, useState } from 'react';
import { Container, Localization } from './styles';
import useForm from './useForm';
import validate from './validateInfo';

interface Submit {
  submitForm: Function;
}
const RegisterForm: React.FC<Submit> = ({ submitForm }) => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    cities,
    ufs,
    selectedCity,
    selectedUf,
    handleSelectCity,
    handleSelectUf,
  } = useForm(submitForm, validate);

  // const dispatch = useDispatch();

  // const register = useSelector((state: IRegisterState) => state.register);

  // const onChangeName = (e: React.FormEvent<HTMLInputElement>) =>
  //   dispatch({ type: 'change-name', name: e.currentTarget.value });
  // const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) =>
  //   dispatch({ type: 'change-email', email: e.currentTarget.value });
  // const onChangeWhatsapp = (e: React.FormEvent<HTMLInputElement>) =>
  //   dispatch({ type: 'change-whatsapp', whatsapp: e.currentTarget.value });
  // const onChangeSocialMedias = (e: React.FormEvent<HTMLInputElement>) =>
  //   dispatch({
  //     type: 'change-socialmedias',
  //     social_medias: e.currentTarget.value,
  //   });

  return (
    <Container>
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Seus dados</legend>

          <label>Nome Completo</label>
          <input name="name" value={values.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

          <label>Email</label>
          <input name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

          <label>Whatsapp</label>
          <input
            name="whatsapp"
            value={values.whatsapp}
            onChange={handleChange}
          />
          {errors.whatsapp && <p style={{ color: 'red' }}>{errors.whatsapp}</p>}

          <label>Redes Sociais</label>
          <input
            name="social_medias"
            placeholder="Ex: Facebook, Instagram, Twitter"
            value={values.social_medias}
            onChange={handleChange}
          />
          {errors.social_medias && (
            <p style={{ color: 'red' }}>{errors.social_medias}</p>
          )}

          <Localization>
            <div>
              <label>Estados</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="">Selecione o Estado</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {' '}
                    {uf}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="">Selecione a Cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </Localization>
        </fieldset>
        <footer>
          <p>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="submit">Salvar Cadastro</button>
        </footer>
      </form>
    </Container>
  );
};

export default RegisterForm;
