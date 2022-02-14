import { Button, FormGroup } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Label } from "reactstrap";
import './style.css';

function FormVehicle({setVeiculos}) {
    return(
        <Formik
                initialValues={{
                  placa: "",
                  renavam: "",
                  chassi: "",
                  marca: "",
                  modelo: "",
                  anoFabricacao: "",
                  cor: "",
                  quilometragem: "",
                  preco: "",
                }}
                validate={() => {}}
                onSubmit={(values, actions) => {

                  setTimeout(() => {
                      setVeiculos((veiculos) => {
                        const v = [...veiculos, {...values}]
                          return v;
                    });
  
                    actions.resetForm();
                  }, 2000);

                }}
              >
                {({ errors, touched, isValid }) => {
                  return (
                    <Form className="Form">
                      <FormGroup>          
                        <Label htmlFor="placa">Placa: </Label>
                        <Field className="form-control" name="placa" id="placa" required />
                        {errors.placa && touched.placa && <div className="invalid-feedback d-block">{errors.placa}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="renavam">Renavam: </Label>
                        <Field className="form-control" name="renavam" id="renavam" required />
                        {errors.renavam && touched.renavam && <div className="invalid-feedback d-block">{errors.renavam}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="chassi">Chassi: </Label>
                        <Field className="form-control" name="chassi" id="chassi" required />
                        {errors.chassi && touched.chassi && <div className="invalid-feedback d-block">{errors.chassi}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="marca">Marca: </Label>
                        <Field className="form-control" name="marca" id="marca" required />
                        {errors.marca && touched.marca && <div className="invalid-feedback d-block">{errors.marca}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="modelo">Modelo: </Label>
                        <Field className="form-control" name="modelo" id="modelo" required />
                        {errors.modelo && touched.modelo && <div className="invalid-feedback d-block">{errors.modelo}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="anoFabricacao">Ano de Fabricação: </Label>
                        <Field className="form-control" name="anoFabricacao" id="anoFabricacao" type="number" required />
                        {errors.anoFabricacao && touched.anoFabricacao && <div className="invalid-feedback d-block">{errors.anoFabricacao}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="cor">Cor: </Label>
                        <Field className="form-control" name="cor" id="cor" required />
                        {errors.cor && touched.cor && <div className="invalid-feedback d-block">{errors.cor}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="quilometragem">Quilometragem: </Label>
                        <Field className="form-control" name="quilometragem" id="quilometragem" type="number" required />
                        {errors.quilometragem && touched.quilometragem && <div className="invalid-feedback d-block">{errors.quilometragem}</div>}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="preco">Preço: </Label>
                        <Field className="form-control" name="preco" id="preco" type="number" required />
                        {errors.preco && touched.preco && <div className="invalid-feedback d-block">{errors.preco}</div>}
                      </FormGroup>
                      <FormGroup className="text-right">
                        <Button
                          className="text-center position-relative form-group"
                          color="primary"
                          type="submit"
                          disabled={!isValid}
                        >
                          Salvar
                        </Button>
                      </FormGroup>
                    </Form>
                  );
                }}
            </Formik>
    )

}

export default FormVehicle;