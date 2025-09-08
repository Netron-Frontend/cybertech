export interface CreateUserDto {
	name: string;
	date: string;
	time: string;
	guestsCount: number;
	phone: string;
	wishes: string;
}

export interface User extends CreateUserDto {
	id: number;
	createdAt: string;
	status: string;
}

export interface ApiResponse<T> {
	data: T;
	message: string;
}
