import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): {
        wishes: string;
        createdAt: Date;
        status: string;
        name: string;
        date: string;
        time: string;
        guestsCount: number;
        phone: string;
        id: number;
    };
    findAll(): {
        id: number;
        name: string;
        date: string;
        time: string;
        guestsCount: number;
        phone: string;
        wishes?: string;
        createdAt: Date;
        status: string;
    };
}
