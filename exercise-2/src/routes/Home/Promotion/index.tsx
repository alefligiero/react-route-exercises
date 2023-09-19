import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion() {
  return (
    <main>
      <section className="site-container">
        <div className="mt30 mb30">
          <Card title="Página de promoção" />
        </div>
        <div className="dflex">
          <Link to={"/registration"}>
            <Button title="Quero participar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
