import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Registration() {
  return (
    <main>
      <section className="site-container">
        <h1 className="section-title">Faça sua inscrição!</h1>
        <div className="mt30 mb30">
          <Card title="Página de inscrição" />
        </div>
        <div className="dflex">
          <Link to={"/promotion"}>
            <Button title="Ver promoção" />
          </Link>
        </div>
      </section>
    </main>
  );
}
