import Button from "@/components/Button";
import Card from "@/components/Card";
import Layout from "@/components/Layouts/page";

const Home = () => {
  return (
    <Layout>
      <div className="m-4">
        <Card
          imageSrc="/images/image.png"
          title="full production content create pack"
          positions={["x1 producer", "x1 photographer"]}
        />
        <Button className="mt-4" type="primary" onClick={() => ""}>
          search
        </Button>
        <Button className="mt-4" type="secondary" onClick={() => ""}>
          Join
        </Button>
        <Button className="mt-4" type="outline-secondary" onClick={() => ""}>
          Join
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
