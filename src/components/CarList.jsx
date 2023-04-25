import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const { cars, name } = useSelector(
        ({ form, cars: { data, searchTerm } }) => {
            const filteredCars = data.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return {
                cars: filteredCars,
                name: form.name,
            };
        }
    );
    const dispatch = useDispatch();
    const handleCarDelete = (id) => {
        dispatch(removeCar(id));
    };
    const renderedCars = cars.map((car) => {
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div
                className={`panel ${bold && 'bold'}`}
                key={car.id}
                style={{ color: bold && 'green' }}
            >
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car.id)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars.length === 0 ? 'No cars' : renderedCars}
            <hr />
        </div>
    );
}

export default CarList;
