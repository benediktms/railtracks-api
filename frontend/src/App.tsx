import { Button, Image } from '@chakra-ui/core';
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import logo from './logo.svg';

function App() {
  const [data, setData] = useState<AxiosResponse | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/tests');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App'>
      <header>
        <Image src={logo} alt='logo' />
      </header>
      <Button variantColor='blue' onClick={fetchData}>
        show data
      </Button>
      <p>{data ? data.status : null}</p>
    </div>
  );
}

export default App;
