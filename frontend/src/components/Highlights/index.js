import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Cards from '../Cards';
import FormVehicle from '../FormVehicle'
import Button from '@mui/material/Button';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const marcas = [
  'CHERY',
  'LADA',
  'JEEP',
  'PONTIAC',
  'VM',
  'FORD'
];

function Highlights() {
  const [veiculos, setVeiculos] = useState([{
    modelo: 'Celer Hatch 1.5 16V Flex 5p',
    marca: 'CHERY', 
    anoFabricacao: '2013',
    cor: 'Vermelho',
    quilometragem: '1000',
    preco: '30000',
    },
    {
      modelo: 'Niva 1.6/ CD 4x4',
      marca: 'LADA', 
      anoFabricacao: '1991',
      cor: 'Prata',
      quilometragem: '3000',
      preco: '50000',
    },
    {
      modelo: 'Cherokee Longitude 3.2 4x4 V6 Aut.',
      marca: 'JEEP', 
      anoFabricacao: '2015',
      cor: 'Vermelho',
      quilometragem: '4000',
      preco: '46000',
    },
    {
      modelo: 'Trans-AM 5.7 V8',
      marca: 'PONTIAC', 
      anoFabricacao: '1991',
      cor: 'Azul',
      quilometragem: '1500',
      preco: '35000',
    },
    {
      modelo: 'Gol Quadrado',
      marca: 'VW', 
      anoFabricacao: '1989',
      cor: 'Vermelho',
      quilometragem: '2500',
      preco: '45000',
    },]);

  const [showForm, setShowForm] = useState(28);

  function control() {
    setShowForm(!showForm);
  }

  return (
    <section className="main-highlights">
      <h1 className="title">
        Veiculos
      </h1>

      <div className="button-genres-movie" >
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-controlled-open-select-label">Marcas</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            size="24px"

            MenuProps={MenuProps}
          >
             {marcas.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        >
                        {name}
                        </MenuItem>
                    ))}
          </Select>
        </FormControl>
      </div>
      
        <div className="cards">
          {veiculos.map((car) => (
            <Cards car={car} />
          ))}
        </div>

      {showForm ? <FormVehicle setVeiculos={setVeiculos} /> : null}

      {showForm ?  (
      <div className="button-load-more">
        <Button variant="outlined"
          color="inherit"
          onClick={control}
          size="24px"
          startIcon={<AiOutlineMinus  />}>CANCELAR</Button>

      </div>
      ): (<div className="button-load-more">        
        <Button variant="outlined"
          color="inherit"
          onClick={control}
          size="24px"
          startIcon={<AiOutlinePlus />}>ANUNCIAR VEICULO</Button>

      </div>)  }
            
    </section>
  );
}

export default Highlights;
