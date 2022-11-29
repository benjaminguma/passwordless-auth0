import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import UserDetails from '../components/user';

function Profile() {
	const { user, isLoading } = useUser();
	if (isLoading) {
		return <h1>loading....</h1>;
	}
	return <section className='container grid_2'>{user && <UserDetails user={user} />}</section>;
}

export default withPageAuthRequired(Profile);
