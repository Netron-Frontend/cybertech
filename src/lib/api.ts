import axios from 'axios';
import { NextApiResponse } from 'next';
const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
	headers: {
		'Content-Type': 'application/json'
	}
});

export interface FormData {
	name: string;
	email: string;
	message: string;
}

export interface FormDataResponse {
	status: string;
	message: string;
	data: FormData;
}

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
