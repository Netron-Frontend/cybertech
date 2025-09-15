// lib/api-service.ts
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export interface BookingData {
	name: string;
	date: string;
	time: string;
	guestsCount: number;
	phoneNumber: string;
	notes?: string;
}

export interface ApiResponse {
	success: boolean;
	data?: any;
	message?: string;
}

export const bookingApi = {
	// Создать бронирование
	createBooking: async (bookingData: BookingData): Promise<ApiResponse> => {
		try {
			const response = await apiClient.post('/bookings', bookingData);
			return response.data;
		} catch (error: any) {
			return {
				success: false,
				message: error.response?.data?.message || 'Ошибка при создании бронирования'
			};
		}
	},

	// Получить все бронирования
	getBookings: async (): Promise<ApiResponse> => {
		try {
			const response = await apiClient.get('/bookings');
			return response.data;
		} catch (error: any) {
			return {
				success: false,
				message: error.response?.data?.message || 'Ошибка при получении бронирований'
			};
		}
	},

	// Обновить статус бронирования
	updateBookingStatus: async (id: string, status: string): Promise<ApiResponse> => {
		try {
			const response = await apiClient.patch(`/bookings/${id}`, { status });
			return response.data;
		} catch (error: any) {
			return {
				success: false,
				message: error.response?.data?.message || 'Ошибка при обновлении статуса'
			};
		}
	}
};
