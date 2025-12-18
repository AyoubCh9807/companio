export interface Friend {
    id: string;
    username: string;
    status: 'offline' | 'online';
    avatar: string;
}