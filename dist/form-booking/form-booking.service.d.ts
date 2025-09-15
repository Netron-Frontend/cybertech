import { CreateFormBookingDto } from './dto/create-form-booking.dto';
import { FormBookingStatus } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
export declare class FormBookingService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(data: CreateFormBookingDto): Promise<{
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
    getBookings(): Promise<{
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
    updateBookingStatus(id: string, status: FormBookingStatus): Promise<{
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
}
