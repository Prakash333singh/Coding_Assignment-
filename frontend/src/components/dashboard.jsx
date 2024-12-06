import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const users = [
        {
            id: 1,
            name: 'Michael Holz',
            email: 'michael.holz@example.com',
            dateCreated: '04/10/2013',
            role: 'Admin',
            status: 'Active',
            profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 2,
            name: 'Paula Wilson',
            email: 'paula.wilson@example.com',
            dateCreated: '05/08/2014',
            role: 'Publisher',
            status: 'Active',
            profilePic: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
            id: 3,
            name: 'Antonio Moreno',
            email: 'antonio.moreno@example.com',
            dateCreated: '11/05/2015',
            role: 'Publisher',
            status: 'Suspended',
            profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            id: 4,
            name: 'Mary Saveley',
            email: 'mary.saveley@example.com',
            dateCreated: '06/09/2016',
            role: 'Reviewer',
            status: 'Active',
            profilePic: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 5,
            name: 'Martin Sommer',
            email: 'martin.sommer@example.com',
            dateCreated: '12/08/2017',
            role: 'Moderator',
            status: 'Inactive',
            profilePic: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
    ];

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'suspended':
                return 'bg-yellow-100 text-yellow-800';
            case 'inactive':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleLogout = () => {
        // Implement logout functionality here (e.g., clear session, redirect to login page)
        // console.log("Logged out");
        localStorage.removeItem('authToken'); // Assuming you're using localStorage for auth
        navigate("/");
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Logout
                    </button>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Date Created
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{user.id}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full object-cover"
                                                        src={user.profilePic}
                                                        alt={`${user.name} profile`}
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap font-medium">
                                                        {user.name}
                                                    </p>
                                                    <p className="text-gray-600 whitespace-no-wrap text-xs">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{user.dateCreated}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center space-x-2">
                                                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                    </svg>
                                                </button>
                                                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
