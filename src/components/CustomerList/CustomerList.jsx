import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

function CustomerList({ customers,setCustomers }) {
    
    // delete
    const handleDelete = (item) => {
        setCustomers(customers.filter((customer) => customer.id !== item.id));//id leri eşit olan hariç diğerlerini dön
    };

    return (
        <ul className="customer-list">
            {customers?.map((customer) => (
                <CustomerItem customer={customer} key={customer.id} handleDelete={handleDelete} />
            ))}
            
        </ul>
    );
}
export default CustomerList;