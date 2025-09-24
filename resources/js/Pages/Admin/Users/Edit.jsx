import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ user, allRoles, allPermissions }) {
  const { data, setData, put, processing, errors } = useForm({
    name: user.name || '',
    email: user.email || '',
    roles: user.roles || [],
    permissions: user.permissions || [],
  });

  const submit = (e) => {
    e.preventDefault();
    put(route('admin.users.update', user.id));
  };

  const toggleInArray = (arr, value) => (
    arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]
  );

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit User</h2>}
    >
      <Head title={`Edit ${user.name}`} />
      <div className="m-4 max-w-3xl">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Roles</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {allRoles.map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={data.roles.includes(role)}
                    onChange={() => setData('roles', toggleInArray(data.roles, role))}
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
            {errors.roles && <div className="text-sm text-red-600 mt-1">{errors.roles}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Permissions</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {allPermissions.map((perm) => (
                <label key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={data.permissions.includes(perm)}
                    onChange={() => setData('permissions', toggleInArray(data.permissions, perm))}
                  />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
            {errors.permissions && <div className="text-sm text-red-600 mt-1">{errors.permissions}</div>}
          </div>

          <div className="flex items-center space-x-4">
            <PrimaryButton disabled={processing}>Salvar</PrimaryButton>
            <SecondaryButton type="button">
              <Link href={route('admin.users.index')}>Cancelar</Link>
            </SecondaryButton>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
