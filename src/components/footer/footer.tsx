import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container my-5">
        <footer className="text-center text-lg-start ">
          <section className="d-flex justify-content-between p-4">
            <div className="me-5">
              <span>Fale conosco atraves dos nossos canais online:</span>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">ShopeeD</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Somos uma empresa de compra e venda de animais, cachorros e
                    aves..
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Animais</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Cachorros
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Papagaios e aves
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Uteis</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" className="text-white">
                      Sua conta
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Se torne um vendedor
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Ajuda
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contato</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> Uberaba, MG 10012, BR
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> shooped@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +55 34 9 9985-1010
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3">
            © 2023 Copyright:{" "}
            <a className="text-white" href="#">
              www.shopeed.com.br
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
