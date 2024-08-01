export interface Application {
    id: number;
    book_id: number;
    user_id: number;
    application_status: number | null;
    price: number;
    motivational_letter: string;
}