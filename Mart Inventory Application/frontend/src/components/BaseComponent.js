import { Link } from "react-router-dom";
import "../css/BaseComponent.css";

const BaseCompanent = () => {
    return (
        <div className="basecomponent">
            <div className='container'>
                <div className="dashboard">
                    <h1>
                        Dash Board
                    </h1>
                    <Link to='/' className='btn btn-danger mb-2'>
                        Logout
                    </Link>
                </div>
                <div>
                    <Link to='/employee' className='btn btn-primary mb-2'>
                        Employee List
                    </Link>
                </div>
                <div>
                    <Link to='/product' className='btn btn-primary mb-2'>
                        Product List
                    </Link>
                </div>
                <div>
                    <Link to='/billing' className='btn btn-primary mb-2'>
                        Billing Executive
                    </Link>
                </div>
                <div>
                    <Link to='/customer' className='btn btn-primary mb-2'>
                        Customer List
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BaseCompanent;