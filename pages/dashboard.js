import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold leading-tight text-gray-900 text-center">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Listings
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              150
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Active Bookings
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              45
            </dd>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Revenue
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              $12,340
            </dd>
          </div>
        </div>
      </div>
    </Layout>
  );
}
