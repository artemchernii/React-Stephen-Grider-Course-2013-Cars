import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return { name: state.form.name, cost: state.form.cost };
    });
    const handleNameChange = (e) => {
        const { value } = e.target;
        dispatch(changeName(value));
    };
    const handleCostChange = (e) => {
        const carCost = +e.target.value || 0;
        dispatch(changeCost(carCost));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addCar({
                name,
                cost,
            })
        );
    };
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <div className="label mb-0 mr-1">Name</div>
                        <input
                            className="input is-expanded"
                            value={name}
                            type="text"
                            onChange={handleNameChange}
                        />
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <div className="label mb-0 mr-1">Cost</div>
                        <input
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CarForm;
