'use client';

import axios from 'axios';
import FormNotFoundBtn from '@/components/ui/buttons/FormNotFoundBtn/formNotFoundBtn';
import { useState } from 'react';
import { bookingApi, BookingData } from '@/lib/api';

export default function NotFoundForm() {
	const [formData, setFormData] = useState<BookingData>({
		name: '',
		date: '',
		time: '',
		guestsCount: 2,
		phoneNumber: '',
		notes: ''
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const result = await bookingApi.createBooking(formData);

		if (result.success) {
			alert('Бронирование успешно создано!');
			// Сброс формы
			setFormData({
				name: '',
				date: '',
				time: '',
				guestsCount: 2,
				phoneNumber: '',
				notes: ''
			});
		} else {
			alert(`Ошибка: ${result.message}`);
		}

		setIsLoading(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: name === 'guestsCount' ? parseInt(value) : value
		}));
	};
	return (
		<form
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
			<div style={{ flexGrow: 1, width: '448px', height: '50px' }}>
				<input
					type='text'
					name='name'
					placeholder='Имя'
					required
					style={{
						width: '210px',
						height: '50px',
						borderRadius: '10px',
						border: '1px solid grey',
						padding: '10px 22px',
						backgroundColor: isLoading ? 'grey' : 'none'
					}}
					value={formData.name}
					onChange={handleChange}
					disabled={isLoading}
				/>
				<input
					type='date'
					name='date'
					placeholder='Дата'
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
					value={formData.date}
					onChange={handleChange}
					disabled={isLoading}
				/>
				<input
					type='time'
					name='time'
					placeholder='Время'
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
					value={formData.time}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>

			<label style={{ display: 'flex', alignItems: 'center' }}>
				Количество гостей
				<input
					type='number'
					name='guestsCount'
					placeholder='2'
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
					value={formData.guestsCount}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</label>

			<input
				type='tel'
				name='phone'
				placeholder='Номер телефона'
				required
				style={{
					width: '394px',
					height: '50px',
					borderRadius: '10px',
					border: '1px solid grey',
					padding: '10px 22px',
					backgroundColor: isLoading ? 'grey' : 'none'
				}}
				value={formData.phoneNumber}
				onChange={handleChange}
				disabled={isLoading}
			/>

			<textarea
				name='wishes'
				placeholder='Ваши пожелания'
				style={{
					width: '394px',
					height: '120px',
					resize: 'none',
					borderRadius: '10px',
					border: '1px solid grey',
					padding: '10px 22px',
					backgroundColor: isLoading ? '#2b2b2f' : 'none'
				}}
				value={formData.notes}
				onChange={handleChange}
				disabled={isLoading}
			/>

			<FormNotFoundBtn />
		</form>
	);
}
