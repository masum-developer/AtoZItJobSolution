import oracle from '../../../assets/images/itCompany/oracle.jpg';
import ibm from '../../../assets/images/itCompany/ibm.jpg';
import tata from '../../../assets/images/itCompany/tata.jpg';
import digitalIndia from '../../../assets/images/itCompany/digitalIndia.jpg';
import techIndia from '../../../assets/images/itCompany/techIndia.jpg';

const TopCompany = () => {
    return (
        <section className='mt-5'>
            <h2 className="text-center">Top Companies</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1">
                <div className="col">
                    <img className='w-50' src={oracle} alt="it company" />
                </div>
                <div className="col">
                    <img className='w-50' src={ibm} alt="it company" />
                </div>
                <div className="col">
                    <img className='w-50' src={tata} alt="it company" />
                </div>

                <div className="col">
                    <img className='w-50' src={digitalIndia} alt="it company" />
                </div>
                <div className="col">
                    <img className='w-50' src={techIndia} alt="it company" />
                </div>
            </div>

        </section>
    );
};

export default TopCompany;