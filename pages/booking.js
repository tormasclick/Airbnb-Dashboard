import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const mockBookings = [
  {
    id: '1',
    customerName: 'John Doe',
    checkIn: '2024-09-01',
    checkOut: '2024-09-07',
    totalAmount: '$500',
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    checkIn: '2024-09-10',
    checkOut: '2024-09-15',
    totalAmount: '$750',
  },
  {
    id: '3',
    customerName: 'Mike Johnson',
    checkIn: '2024-09-12',
    checkOut: '2024-09-18',
    totalAmount: '$600',
  },
];

export default function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from an API or database here
    // For now, we'll use mock data
    setBookings(mockBookings);
  }, []);

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Customer Bookings</h1>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Booking ID</th>
              <th className="py-2 px-4 text-left">Customer Name</th>
              <th className="py-2 px-4 text-left">Check-In</th>
              <th className="py-2 px-4 text-left">Check-Out</th>
              <th className="py-2 px-4 text-left">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="py-2 px-4">{booking.id}</td>
                <td className="py-2 px-4">{booking.customerName}</td>
                <td className="py-2 px-4">{booking.checkIn}</td>
                <td className="py-2 px-4">{booking.checkOut}</td>
                <td className="py-2 px-4">{booking.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
