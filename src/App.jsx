import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './componentes/Header';
import Card from './componentes/Card';
import Footer from './componentes/Footer';

function App() {
  const perritos = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/3763313/pexels-photo-3763313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Manchas',
      descripcion:
        'El Manchas es muy enérgico, jugueton y sensible. Los dalmatas son fieles a su familia y se llevan bien con los niños.',
      raza: 'Dálmata',
      colorTag: 'primary',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Leon',
      descripcion:
        'Leon es de temperamento apacible, inteligente y cariñoso. Los golden retrievers son juguetones y dóciles con los niños.',
      raza: 'Golden Retriever',
      colorTag: 'warning',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Tiburon',
      descripcion:
        'Tiburon es un perro de familia, es un leal compañero y bueno perro vigía. A pesar de su tamaño, el Dachshund es conocido por su naturaleza valiente.',
      raza: 'Dachshund',
      colorTag: 'success',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Pulga',
      descripcion:
        'Pluga es un perro tranquilo, no suele ladrar mucho, ni cavar, ni masticar. Los Pug disfrutan la compañía  y pueden ser cariñosos.',
      raza: 'Pug',
      colorTag: 'danger',
    },
  ];

  return (
    <>
      <Header titulo="Adopta un Perrito" />

      <main className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {perritos.map((perrito) => (
          <Card
            key={perrito.id}
            urlImagen={perrito.url}
            nombre={perrito.nombre}
            descripcion={perrito.descripcion}
            raza={perrito.raza}
            color={perrito.colorTag}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;