import {UserData} from "../../classApi/User/types.ts";

export interface Chat {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    selectedChat?: boolean;
    last_message: {
        user: UserData,
        time: string;
        content: string;
    },
}

export interface Message {
    name?: string,
    chat_id: number;
    time: string;
    timeText?: string;
    type: string;
    user_id: string;
    content: string;
    mine?: boolean;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    }
}
