import axios from 'axios';
import { FormDataResponse } from '@/types/ApiTypes';
import { CreateUserDto, User } from '@/types/user';

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
	headers: {
		'Content-Type': 'application/json'
	}
});

export const userService = {
	createUser: async (userData: CreateUserDto): Promise<User> => {
		const response = await apiClient.post<User>('/users', userData);
		return response.data;
	},

	// Получить всех пользователей
	getUsers: async (): Promise<User[]> => {
		const response = await apiClient.get<User[]>('/users');
		return response.data;
	},

	// Получить пользователя по ID
	getUserById: async (id: number): Promise<User> => {
		const response = await apiClient.get<User>(`/users/${id}`);
		return response.data;
	},

	// Обновить пользователя
	updateUser: async (id: number, userData: Partial<CreateUserDto>): Promise<User> => {
		const response = await apiClient.patch<User>(`/users/${id}`, userData);
		return response.data;
	},

	// Удалить пользователя
	deleteUser: async (id: number): Promise<void> => {
		await apiClient.delete(`/users/${id}`);
	}
};

export const submitForm = async (data: FormData): Promise<FormDataResponse> => {
	try {
		const response = await apiClient.post<FormDataResponse>('/api/form', data);
		return response.data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.data?.message || 'Ошибка при отправке формы');
		}
		throw new Error('Неизвестная ошибка');
	}
};
