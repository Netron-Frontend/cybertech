"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formBookingApi = void 0;
const axios_1 = require("axios");
const API_BASE_URL = 'http://localhost:3001/api';
const apiClient = axios_1.default.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
exports.formBookingApi = {
    createBooking: async (formBookingData) => {
        try {
            const response = await apiClient.post('/bookings', formBookingData);
            return response.data;
        }
        catch (error) {
            false;
            error.response?.data?.message || 'Something went wrong.';
        }
    },
    getBookings: async () => {
        try {
            const response = await apiClient.get('/bookings');
            return response.data;
        }
        catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Ошибка при получении бронирований'
            };
        }
    },
    updateBookingStatus: async (id, status) => {
        try {
            const response = await apiClient.patch(`/bookings/${id}`, { status });
            return response.data;
        }
        catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Ошибка при обновлении статуса'
            };
        }
    }
};
//# sourceMappingURL=api.js.map