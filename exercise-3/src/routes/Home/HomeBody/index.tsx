import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section className="site-container">
        <div className="mt30 mb30">
          <Card title="Pagina inicial" />
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
