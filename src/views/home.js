import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Esse é seu sistema de Skills.</p>
        <hr className="my-4" />
        <p>Utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="#/cadastro-usuario"
            role="button"
          >
            <i className="fa fa-users"></i> Cadastrar Usuário
          </a>
          <a className="btn btn-danger btn-lg" href="#/" role="button">
            <i className="fa fa-users"></i> Cadastrar Skill
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
