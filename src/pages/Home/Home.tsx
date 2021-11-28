import { projectEnvOptions } from "./resources/projectEnvOptions";
import { projectsOptions } from "./resources/projectsOptions";

import { IListItem } from "./interface";

import { Container } from "./styles";

export default function Home() {
  const listItems: IListItem[] = [
    { 
      id: 'li01',
      method: "GET", 
      path: '/user' 
    },
    { 
      id: 'li02',
      method: "PUT", 
      body:'{ "email": "jadson_dasilva@email.com", "password": "123"}',
      path: '/user' 
    },
    { 
      id: 'li03',
      method: "POST", 
      body:'{ "email": "jadson_dasilva@email.com", "password": "123"}',
      path: '/user' 
    },
    { 
      id: 'li04',
      method: "PUT", 
      body:'{ "email": "jadson_dasilva@email.com", "password": "123"}',
      path: '/employers'
    },
    { 
      id: 'li05',
      method: "PUT", 
      body:'{ "email": "jadson_dasilva@email.com", "password": "123"}',
      path: '/employers' 
    },
    { 
      id: 'li06',
      method: "DELETE",
      path: '/employers' 
    }
  ]

  return (
    <Container>
      <section className="home__section">
        <div className="home__section-wrapper">
          <header className="home__section-header">
            <select className="home__section-select">
              {projectEnvOptions.map((env) => (
                <option key={env.name} value={env.value}>
                  {env.name}
                </option>
              ))}
            </select>
            <select className="home__section-select">
              {projectsOptions.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </header>
          <h1 className="home__section-list-title">Entradas:</h1>
          <ul className="home__section-list">
            {listItems.map((item) => (
              <li 
                className="home__section-list-item"
                key={item?.id}
              >
                <span className="home__section-list__method">
                  {item?.method}
                </span>
                <span className="home__section-list__data">
                  {item?.path}
                </span>
                <span className="home__section-list__data">
                  body: {item?.body}
                </span>
              </li>
            ))}
            {listItems?.length === 0 && (
              <span className="home__section-list-alert">
                Nenhum log registrado!
              </span>
            )}
          </ul>
        </div>
      </section>
    </Container>
  )
}