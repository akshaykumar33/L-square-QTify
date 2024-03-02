export const BACKEND_POINT = 'https://qtify-backend-labs.crio.do';

// Fetch top songs from the backend
export async function fetchTopSongs() {
    const apiUrl = `${BACKEND_POINT}/albums/top`;
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch top songs');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching top songs:', error);
        // Handle the error gracefully, possibly retry or show an error message to the user
        throw error;
    }
}

// Fetch new songs from the backend
export async function fetchNewSongs() {
    const apiUrl = `${BACKEND_POINT}/albums/new`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch new songs');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching new songs:', error);
        // Handle the error gracefully, possibly retry or show an error message to the user
        throw error;
    }
}
