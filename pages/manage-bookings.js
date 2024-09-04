import { useState, useEffect } from 'react';
import Layout from '../components/Layout'; // Import the Layout component

const mockBookings = [
  {
    id: 1,
    customerName: 'John Doe',
    property: 'Beautiful Beach House',
    date: '2024-09-01',
    status: 'Confirmed',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    property: 'Mountain Cabin',
    date: '2024-09-05',
    status: 'Pending',
  },
  // Add more mock bookings here
];

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newBooking, setNewBooking] = useState({
    customerName: '',
    property: '',
    date: '',
    status: 'Pending',
  });

  useEffect(() => {
    // This would be replaced with an API call to fetch bookings
    setBookings(mockBookings);
  }, []);

  const handleAddBooking = () => {
    setBookings([...bookings, { ...newBooking, id: bookings.length + 1 }]);
    setNewBooking({
      customerName: '',
      property: '',
      date: '',
      status: 'Pending',
    });
    setIsAdding(false);
  };

  const handleEditBooking = (booking) => {
    setBookings(
      bookings.map((b) => (b.id === booking.id ? booking : b))
    );
    setEditingBooking(null);
  };

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter((b) => b.id !== bookingId));
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Bookings</h1>

        {isAdding ? (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Add Booking</h2>
            <input
              type="text"
              placeholder="Customer Name"
              value={newBooking.customerName}
              onChange={(e) =>
                setNewBooking({ ...newBooking, customerName: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Property"
              value={newBooking.property}
              onChange={(e) =>
                setNewBooking({ ...newBooking, property: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <input
              type="date"
              value={newBooking.date}
              onChange={(e) =>
                setNewBooking({ ...newBooking, date: e.target.value })
              }
              className="border p-2 mb-2"
            />
            <button onClick={handleAddBooking} className="bg-blue-500 text-white p-2 rounded">
              Add Booking
            </button>
          </div>
        ) : (
          <button onClick={() => setIsAdding(true)} className="bg-green-500 text-white p-2 rounded mb-4">
            Add Booking
          </button>
        )}

        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Property</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) =>
              editingBooking?.id === booking.id ? (
                <tr key={booking.id}>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={editingBooking.customerName}
                      onChange={(e) =>
                        setEditingBooking({ ...editingBooking, customerName: e.target.value })
                      }
                      className="border p-2"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={editingBooking.property}
                      onChange={(e) =>
                        setEditingBooking({ ...editingBooking, property: e.target.value })
                      }
                      className="border p-2"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="date"
                      value={editingBooking.date}
                      onChange={(e) =>
                        setEditingBooking({ ...editingBooking, date: e.target.value })
                      }
                      className="border p-2"
                    />
                  </td>
                  <td className="border p-2">
                    <select
                      value={editingBooking.status}
                      onChange={(e) =>
                        setEditingBooking({ ...editingBooking, status: e.target.value })
                      }
                      className="border p-2"
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="border p-2">
                    <button onClick={() => handleEditBooking(editingBooking)} className="bg-blue-500 text-white p-2 rounded">
                      Save
                    </button>
                    <button onClick={() => setEditingBooking(null)} className="bg-gray-500 text-white p-2 rounded ml-2">
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={booking.id}>
                  <td className="border p-2">{booking.customerName}</td>
                  <td className="border p-2">{booking.property}</td>
                  <td className="border p-2">{booking.date}</td>
                  <td className="border p-2">{booking.status}</td>
                  <td className="border p-2">
                    <button onClick={() => setEditingBooking(booking)} className="bg-yellow-500 text-white p-2 rounded">
                      Edit
                    </button>
                    <button onClick={() => handleCancelBooking(booking.id)} className="bg-red-500 text-white p-2 rounded ml-2">
                      Cancel
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
