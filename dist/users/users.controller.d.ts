import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
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
}
