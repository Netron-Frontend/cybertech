import { FormBookingService } from './form-booking.service';
import { CreateFormBookingDto } from './dto/create-form-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: FormBookingService);
    create(createBookingDto: CreateFormBookingDto): Promise<{
        name: string;
        date: Date;
        time: string;
        guestsCount: number;
        phoneNumber: string;
        notes: string | null;
        id: string;
        status: import(".prisma/client").$Enums.FormBookingStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        tableId: string | null;
    }>;
    findAll(): Promise<{
        name: string;
        date: Date;
        time: string;
        guestsCount: number;
        phoneNumber: string;
        notes: string | null;
        id: string;
        status: import(".prisma/client").$Enums.FormBookingStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        tableId: string | null;
    }[]>;
}
