export { default } from 'next-auth/middleware';
//>protect the routes so they can be access while logged out
export const config = {
    matcher: ['/trips', '/reservations', '/properties', '/favorites'],
};
