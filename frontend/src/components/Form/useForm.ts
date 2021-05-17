import axios from 'axios';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const useForm = (callback: Function, validate: Function) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const city = selectedCity;
  const uf = selectedUf;
  const history = useHistory();
  const [values, setValues] = useState({
    name: '',
    email: '',
    whatsapp: '',
    social_medias: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    whatsapp: '',
    social_medias: '',
  });

  useEffect(() => {
    async function fetchDataUf() {
      const response = await axios.get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      );

      const ufInitials = response.data.map((uf) => uf.sigla);

      setUfs(ufInitials);
    }

    fetchDataUf();
  }, []);

  useEffect(() => {
    //carregar as cidades sempre que a UF mudar
    if (selectedUf === '0') {
      return;
    }

    async function fetchDataCity() {
      const response = await axios.get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      );

      const cityNames = response.data.map((city) => city.nome);

      setCities(cityNames);
    }
    fetchDataCity();
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { name, email, whatsapp, social_medias } = values;

    api
      .post('users', {
        name,
        email,
        whatsapp,
        social_medias,
        city,
        uf,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso');
        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting,callback]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    selectedCity,
    selectedUf,
    ufs,
    cities,
    handleSelectCity,
    handleSelectUf,
  };
};
export default useForm;
