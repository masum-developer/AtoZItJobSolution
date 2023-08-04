import image1 from '../../../assets/images/user.png';
import image2 from '../../../assets/images/female.png';
const DreamJob = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 mt-5">
                <div className="col">
                    <div className='w-50'>
                    <p style={{
            'background-color':
              '#00bfff',
          }}>It was a really cool experience with A to Z It Job Solution. It was very simple and clean without the bugging from job consultants. Keep up the good work guys!</p>
                    </div>
                    <div className='d-flex'> 
                    <img className='me-3' src={image1} alt="" />
                    <div>
                        <h2>Masum Billah</h2>
                        <p>as Senior Front End Engineer.</p>
                    </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className='w-50'>
                    <p style={{
            'background-color':
              '#00bfff',
          }}>Little did I know about the reach of Instahyre. They have hundreds of start-ups searching for candidates. I received a good number of offers!</p>
                    </div>
                    <div className='d-flex'> 
                    <img className='me-3' src={image2} alt="" />
                    <div>
                        <h2>Maria </h2>
                        <p>as Software Developer</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
            <button className='btn btn-success'>Your Dream Job</button>
            </div>
            </>
            
    );
};

export default DreamJob;