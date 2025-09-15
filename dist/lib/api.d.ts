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
export declare const formBookingApi: {
    createBooking: (formBookingData: FormBookingData) => Promise<ApiResponse | undefined>;
    getBookings: () => Promise<ApiResponse>;
    updateBookingStatus: (id: string, status: string) => Promise<ApiResponse>;
};
