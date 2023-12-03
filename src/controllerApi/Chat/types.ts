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
