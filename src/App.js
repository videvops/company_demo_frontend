import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  {
    id: 1,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 2,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 3,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 4,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 5,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 6,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },

  {
    id: 7,
    planta: "Monterrey",
    area: "Pasteles",
    linea: "1",
    tipo: "Mantenimiento",
    subtipo: "Balero dañado",
    inicio: "08:17 p.m.",
    fin: "09:17 p.m.",
    tiempo: "01:00",
  },
];

class App extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      planta: "",
      area: "",
      linea: "",
      tipo: "",
      subtipo: "",
      inicio: "",
      fin: "",
      tiempo: "",
    },
    modalInsertar: false,
    modalEditar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  };

  insertar = () => {
    let valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    let lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  };

  editar = (dato) => {
    let contador = 0;
    let lista = this.state.data;
    lista.map((registro) => {
      if (dato.id == registro.id) {
        lista[contador].planta = dato.planta;
        lista[contador].area = dato.area;
        lista[contador].linea = dato.linea;
        lista[contador].tipo = dato.tipo;
        lista[contador].subtipo = dato.subtipo;
        lista[contador].inicio = dato.inicio;
        lista[contador].fin = dato.fin;
        lista[contador].tiempo = dato.tiempo;
      }
      contador++;
    });
    this.setState({ data: lista, modalEditar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm(
      "Realmente desea eliminar el registro " + dato.id
    );
    if (opcion) {
      let contador = 0;
      let lista = this.state.data;
      lista.map((registro) => {
        if (registro.id == dato.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Nuevo Paro
          </Button>
          <br></br>

          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Planta</th>
                <th>Area</th>
                <th>Linea</th>
                <th>Tipo</th>
                <th>Subtipo</th>
                <th>Inicio Paro</th>
                <th>Fin Paro</th>
                <th>Tiempo</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.planta}</td>
                  <td>{elemento.area}</td>
                  <td>{elemento.linea}</td>
                  <td>{elemento.tipo}</td>
                  <td>{elemento.subtipo}</td>
                  <td>{elemento.inicio}</td>
                  <td>{elemento.fin}</td>
                  <td>{elemento.tiempo}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalEditar(elemento)}
                    >
                      Editar
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => this.eliminar(elemento)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Planta:</label>
              <input
                className="form-control"
                name="planta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.planta}
              />
            </FormGroup>

            <FormGroup>
              <label>Area:</label>
              <input
                className="form-control"
                name="area"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.area}
              />
            </FormGroup>

            <FormGroup>
              <label>Linea:</label>
              <input
                className="form-control"
                name="linea"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.linea}
              />
            </FormGroup>

            <FormGroup>
              <label>Tipo:</label>
              <input
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipo}
              />
            </FormGroup>

            <FormGroup>
              <label>Subtipo:</label>
              <input
                className="form-control"
                name="subtipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.subtipo}
              />
            </FormGroup>

            <FormGroup>
              <label>Inicio Paro:</label>
              <input
                className="form-control"
                name="inicio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.inicio}
              />
            </FormGroup>

            <FormGroup>
              <label>Fin Paro:</label>
              <input
                className="form-control"
                name="fin"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fin}
              />
            </FormGroup>

            <FormGroup>
              <label>Tiempo:</label>
              <input
                className="form-control"
                name="tiempo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tiempo}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button color="danger" onClick={() => this.ocultarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Planta:</label>
              <input
                className="form-control"
                name="planta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.planta}
              />
            </FormGroup>

            <FormGroup>
              <label>Area:</label>
              <input
                className="form-control"
                name="area"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.area}
              />
            </FormGroup>

            <FormGroup>
              <label>Linea:</label>
              <input
                className="form-control"
                name="linea"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.linea}
              />
            </FormGroup>

            <FormGroup>
              <label>Tipo:</label>
              <input
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipo}
              />
            </FormGroup>

            <FormGroup>
              <label>Subtipo:</label>
              <input
                className="form-control"
                name="subtipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.subtipo}
              />
            </FormGroup>

            <FormGroup>
              <label>Inicio Paro:</label>
              <input
                className="form-control"
                name="inicio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.inicio}
              />
            </FormGroup>

            <FormGroup>
              <label>Fin Paro:</label>
              <input
                className="form-control"
                name="fin"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fin}
              />
            </FormGroup>

            <FormGroup>
              <label>Tiempo:</label>
              <input
                className="form-control"
                name="tiempo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tiempo}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.ocultarModalEditar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
