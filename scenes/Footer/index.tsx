import Button from "@/components/Button";

const Footer = () => {
  return (
    <div className="pt-14 pb-14">
      <div className="text-center">
        <p className="text-2xl text-primary">
          need help finding the right package?
        </p>
        <Button className="mt-4" type="primary" onClick={() => ""}>
          find me package
        </Button>
      </div>
    </div>
  );
};

export default Footer;
