import { useSelector } from 'react-redux';

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
        return data
            .filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, car) => acc + +car.cost, 0);
    });
    return (
        <div className="car-value">
            <div>Total Cost: ${totalCost}</div>
        </div>
    );
}

export default CarValue;
