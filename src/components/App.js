import { useState } from 'react';
import listStudents from '../data/listado.json';
import '../styles/App.scss';

function App() {
  //Variables de estado
  //Me trae todos los datos del Json
  const [data, setData] = useState(listStudents);
  //Me crea la información de una nuesta estudiante
  const [newStudent, setNewStudent] = useState({
    id: crypto.randomUUID(),
    name: '',
    counselor: '',
    speciality: '',
    social_networks: [],
  });
  const [search, setSearch] = useState('');
  const htmlData = data
    .filter((eachStudent) => {
      return (
        eachStudent.name.toLowerCase().includes(search.toLowerCase()) ||
        eachStudent.counselor.toLowerCase().includes(search.toLowerCase())
      );
    })
    .map((listado) => {
      return (
        <tr key={listado.id} className="table-tr">
          <td className="table-td">{listado.name}</td>
          <td className="table-td">{listado.counselor}</td>
          <td>{listado.speciality}</td>
        </tr>
      );
    });

  //FUNCIONES
  const handleNewStudent = (ev) => {
    setNewStudent({ ...newStudent, [ev.target.id]: ev.target.value });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    if (
      (newStudent.name !== '') &
      (newStudent.counselor !== '') &
      (newStudent.speciality !== '')
    ) {
      setData([...data, newStudent]);
      setNewStudent({
        id: crypto.randomUUID(),
        name: '',
        counselor: '',
        speciality: '',
        social_networks: [],
      });
    }
  };
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  return (
    <div className="App">
      <header>
        <h1>Adalabers</h1>
        <form className="form">
          <label className="form_label">Nombre</label>
          <input
            className="form_input"
            placeholder="Ej:Maricarmen"
            onInput={handleSearch}
            value={search}
          />
          <label form_label>Escoge una tutora</label>
          <select onInput={handleSearch} value="search">
            <option>Escoge una opción</option>
            <option value="Yanelis">Yanelis</option>
            <option value="Dayana">Dayana</option>
            <option value="Ivan">Ivan</option>
            <option value="Miguel">Miguel</option>
          </select>
        </form>
      </header>
      <main>
        {' '}
        <section>
          <table className="table ">
            <thead>
              <tr>
                <th className="table-th">Nombre</th>
                <th className="table-th">Tutora</th>
                <th className="table-th">Especialidad</th>
              </tr>
            </thead>
            <tbody className="border list">{htmlData}</tbody>
          </table>
        </section>
        <section>
          <form className="form">
            <label className="label">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleNewStudent}
              value={newStudent.name}
              required
            ></input>
            <label className="label">Tutora:</label>
            <input
              type="text"
              name="counselor"
              id="counselor"
              onChange={handleNewStudent}
              value={newStudent.counselor}
              required
            ></input>
            <label className="label">Especialidad:</label>
            <input
              type="especialidad"
              name="speciality"
              id="speciality"
              onChange={handleNewStudent}
              value={newStudent.speciality}
              required
            ></input>
            <input type="submit" value="Añadir" onClick={handleClick}></input>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
