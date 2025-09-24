import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Index({ users }) {
  return (
     <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />
    
        <div>
        <h1 className="text-2xl font-bold mt-4 ml-4">Usuários</h1>
        <div className="m-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow p-4">
            <table className="table-fixed w-full">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    <tr>
                        <th className="text-left p-1">Nome</th>
                        <th className="text-left p-1">Email</th>
                        <th className="text-left p-1">Roles</th>
                        <th className="text-left p-1">Permissions</th>
                        <th className="text-left p-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.data.map(u => (
                    <tr key={u.id} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-1">{u.name}</td>
                        <td className="p-1">{u.email}</td>
                        <td className="p-1">{u.roles.map(r => r.name).join(', ')}</td>
                        <td className="p-1">{u.permissions.map(p => p.name).join(', ')}</td>
                        <td className="p-1">
                            <div className="flex space-x-4">
                                <PrimaryButton
                                    onClick={() => router.visit(route('admin.users.edit', u.id))}
                                >
                                    Edit
                                </PrimaryButton>
                                <SecondaryButton
                                    onClick={() => router.delete(route('admin.users.destroy', u.id))}
                                >
                                    Delete
                                </SecondaryButton>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    </AuthenticatedLayout>
    
  );
}