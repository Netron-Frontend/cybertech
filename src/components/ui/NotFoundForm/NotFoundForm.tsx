'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import FormNotFoundBtn from '@/components/ui/buttons/FormNotFoundBtn/formNotFoundBtn';

interface FormData {
	name: string;
	date: string;
	time: string;
	guests: number;
	phone: string;
	wishes: string;
}

export default function NotFoundForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>('');
	const [formData, setFormData] = useState<FormData>({
		name: '',
		date: '',
		time: '',
		guests: 2,
		phone: '',
		wishes: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: name === 'guests' ? parseInt(value) || 2 : value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			// Отправляем данные на бэкенд используя Axios
			const response = await axios.post('http://localhost:3001/api/form', formData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});

			console.log('Данные успешно отправлены:', response.data);

			// Перенаправляем на страницу успеха
			router.push('/success');
		} catch (err: any) {
			setError(err.response?.data?.message || 'Ошибка при отправке формы');
			console.error('Ошибка:', err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				color: 'white',
				position: 'absolute',
				top: '120px',
				left: '68px'
			}}
		>
			{/* Поле ввода ошибок */}
			{error && (
				<div
					style={{
						color: 'red',
						backgroundColor: '#ffebee',
						padding: '10px',
						borderRadius: '5px',
						border: '1px solid red'
					}}
				>
					{error}
				</div>
			)}

			<div style={{ flexGrow: 1, width: '448px', height: '50px' }}>
				<input
					type='text'
					name='name'
					placeholder='Имя'
					value={formData.name}
					onChange={handleChange}
					required
					style={{
						width: '210px',
						height: '50px',
						borderRadius: '10px',
						border: '1px solid grey',
						padding: '10px 22px',
						backgroundColor: isLoading ? 'grey' : 'none'
					}}
					disabled={isLoading}
				/>
				<input
					type='date'
					name='date'
					placeholder='Дата'
					value={formData.date}
					onChange={handleChange}
					required
					style={{
						width: '105px',
						height: '50px',
						borderRadius: '10px',
						border: '1px solid grey',
						padding: '10px 22px',
						marginLeft: '14px',
						backgroundColor: isLoading ? 'grey' : 'none'
					}}
					disabled={isLoading}
				/>
				<input
					type='time'
					name='time'
					placeholder='Время'
					value={formData.time}
					onChange={handleChange}
					required
					style={{
						width: '105px',
						height: '50px',
						borderRadius: '10px',
						border: '1px solid grey',
						padding: '10px 18px',
						marginLeft: '14px',
						backgroundColor: isLoading ? 'grey' : 'none'
					}}
					disabled={isLoading}
				/>
			</div>

			<label style={{ display: 'flex', alignItems: 'center' }}>
				Количество гостей
				<input
					type='number'
					name='guests'
					placeholder='2'
					onChange={handleChange}
					min='1'
					max='20'
					style={{
						width: '50px',
						textAlign: 'center',
						height: '50px',
						borderRadius: '10px',
						border: '1px solid grey',
						padding: '10px 10px',
						marginLeft: '14px',
						backgroundColor: isLoading ? 'grey' : 'none'
					}}
					disabled={isLoading}
				/>
			</label>

			<input
				type='tel'
				name='phone'
				placeholder='Номер телефона'
				value={formData.phone}
				onChange={handleChange}
				required
				style={{
					width: '394px',
					height: '50px',
					borderRadius: '10px',
					border: '1px solid grey',
					padding: '10px 22px',
					backgroundColor: isLoading ? 'grey' : 'none'
				}}
				disabled={isLoading}
			/>

			<textarea
				name='wishes'
				placeholder='Ваши пожелания'
				value={formData.wishes}
				onChange={handleChange}
				style={{
					width: '394px',
					height: '120px',
					resize: 'none',
					borderRadius: '10px',
					border: '1px solid grey',
					padding: '10px 22px',
					backgroundColor: isLoading ? '#2b2b2f' : 'none'
				}}
				disabled={isLoading}
			/>

			<FormNotFoundBtn />
		</form>
	);
}
