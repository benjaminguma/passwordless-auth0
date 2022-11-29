import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const { user, error, isLoading, checkSession } = useUser();
	if (!isLoading && user) {
		router.push('/profile');
		return;
	}
	return (
		<section className='container grid_2'>
			<a className='br btn_line' href='api/auth/login'>
				Log In
			</a>
			<a href={'api/auth/login'} className='br btn_line'>
				register
			</a>
		</section>
	);
}
