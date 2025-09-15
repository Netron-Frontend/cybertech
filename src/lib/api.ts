import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export interface FormBookingData {
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
  message: string;
}

export const formBookingApi = {
  createBooking: async (formBookingData: FormBookingData) => {
  try {
    const response = await apiClient.post<ApiResponse>('/bookings', formBookingData);
    return response.data;
  }
  catch (error: any){
    false;
    error.response?.data?.message || 'Something went wrong.';
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
}