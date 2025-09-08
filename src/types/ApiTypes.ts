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
