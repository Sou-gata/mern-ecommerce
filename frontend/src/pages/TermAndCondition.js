import BradCrumb from "../components/BradCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndCondition = () => {
    return (
        <>
            <Meta title="Terms and Conditions" />
            <BradCrumb title="Terms and Conditions" />
            <Container class1="policy-wrapper py-3 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default TermAndCondition;
